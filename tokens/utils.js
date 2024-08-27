const fs = require('fs');
const readline = require('readline');
const path = require('path');

/**
 * Recursively retrieves files with a specific extension from a given directory.
 *
 * @param {string} location - The path to the directory or file to start the search.
 * @param {string} extension - The file extension to search for (e.g., '.js', '.css').
 * @param {string[]} [files=[]] - An array to accumulate the file paths that match the extension.
 * @param {string[]} [excludeDirectories=[]] - An array of directory names to exclude from the search.
 * @returns {string[]} - An array of file paths that have the specified extension.
 */
function getFilesWithExtension(location, extension, files = [], excludeDirectories = []) {
  const content = fs.statSync(location);
  if (content.isDirectory()) {
    const contentPaths = fs.readdirSync(location);
    contentPaths.forEach(contentPath => {
      if (!excludeDirectories.includes(contentPath)) {
        getFilesWithExtension(path.join(location, contentPath), extension, files, excludeDirectories);
      }
    });
  } else if (location.endsWith(extension)) {
    files.push(location);
  }
  return files;
}

/**
 * Generates a mapping of SCSS variables to corresponding CSS variables.
 *
 * @param {string} prefix - The prefix used to build the CSS variable names (e.g., '--my-prefix').
 * @param {Object} tokensObject - The object representing the design tokens, which may be nested.
 * @param {Object} result - The object where the mapping of SCSS to CSS variables will be stored.
 * @returns {Object} - The `result` object containing the SCSS-to-CSS variable mappings.
 */
function getSCSStoCSSMap(prefix, tokensObject, result) {
  Object.entries(tokensObject).forEach(([node, value]) => {
    if (value?.constructor.name === 'Object') {
      const newPrefix = `${prefix}-${node}`;
      getSCSStoCSSMap(newPrefix, value, result);
    } else if (node === 'source') {
      // eslint-disable-next-line no-param-reassign
      result[value] = `var(${prefix})`;
    }
  });
  return result;
}

/**
 * Replaces variable usage in a file based on a provided mapping and direction.
 *
 * @param {string} filePath - The path to the file where variables should be replaced.
 * @param {Object} variablesMap - A map of variables to their replacement values.
 * @param {string} [direction='scss-to-css'] - The direction of the replacement, either `scss-to-css` or `css-to-scss`.
 * - `scss-to-css`: Replaces SCSS variables (e.g., `$some-variable`) with CSS variables.
 * - `css-to-scss`: Replaces CSS variables (e.g., `var(--some-variable)`) with SCSS variables.
 * @returns {Promise<void>} - A promise that resolves when the file has been successfully processed and written.
 */
async function replaceVariablesUsage(filePath, variablesMap, direction = 'scss-to-css') {
  let variableRegex;
  let result = '';

  if (direction === 'css-to-scss') {
    variableRegex = /var\((\w|-|_)*\)/g;
  } else if (direction === 'scss-to-css') {
    variableRegex = /(\$|#{\$)(\w|-|_)*(}|,|;|\)|\s|$)/g;
  }

  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    let parsedLine = line;
    const variables = [...parsedLine.matchAll(variableRegex)];

    variables.forEach(variableData => {
      let varExpressionToReplace = variableData[0];
      let actualVariable = varExpressionToReplace;

      if (direction === 'scss-to-css') {
        // handle interpolation expressions first, e.g. #{$some-variable}
        if (varExpressionToReplace.startsWith('#{') && varExpressionToReplace.endsWith('}')) {
          actualVariable = varExpressionToReplace.slice(2, -1);

          // general case, e.g. $some-variable;
        } else if ([',', ';', ')', ' ', '}'].includes(varExpressionToReplace.slice(-1))) {
          varExpressionToReplace = varExpressionToReplace.slice(0, -1);
          actualVariable = varExpressionToReplace;
        }
      }

      if (actualVariable in variablesMap) {
        parsedLine = parsedLine.replaceAll(varExpressionToReplace, variablesMap[actualVariable]);
      }
    });

    result += `${parsedLine}\n`;
  }

  fs.writeFileSync(filePath, result);
}

/**
 * Replaces SCSS variables definition with value from design tokens
 *
 * @async
 * @param {string} pathToStylesheet - full path to the stylesheet where to perform replacement
 * @param {Object} variablesMap - object that contains variables definitions to use during replacement
 */
async function replaceVariablesDefinitions(pathToStylesheet, variablesMap) {
  const fileStream = fs.createReadStream(pathToStylesheet);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let result = '';
  let currentVar = '';
  let currentValue = '';

  function processVariable() {
    if (currentVar) {
      if (currentVar in variablesMap) {
        result += `${currentVar}: ${variablesMap[currentVar]} !default;\n`;
      } else {
        result += `${currentVar}:${currentValue}`;
      }
    } else {
      result += currentValue;
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    if (line.startsWith('$')) {
      processVariable();
      [currentVar, ...currentValue] = line.split(':');
      currentValue = `${currentValue.join(':')}\n`;
    } else if (!line.trim() || line.startsWith('\\')) {
      processVariable();
      currentVar = '';
      currentValue = `${line}\n`;
    } else {
      currentValue += `${line}\n`;
    }
  }

  // last variable was not covered by the loop
  processVariable();

  fs.writeFileSync(pathToStylesheet, result);
}

/**
 * Update SCSS variables definitions or usages in given path with CSS variables derived from design tokens
 *
 * @param {string} location - path where to update variables
 * @param {Object} variablesMap - SCSS-to-CSS or CSS-to-SCSS mapping of the variables
 * @param {string} transformType - type of operation, one of ['definition', 'usage'].
 * 'definition' will replace SCSS variables definitions with CSS ones, while 'usage' will replace all occurrences
 * of SCSS / CSS variables (depends on the direction parameter).
 * @param {Array[string]} excludePaths - exclude paths from the search
 * @param {string} direction - replacement direction of variables, takes effect only when transformType === 'usage'.
 * Can be either 'scss-to-css' or 'css-to-scss'.
 * @return {Promise<void>}
 */
async function transformInPath(location, variablesMap, transformType = 'definition', excludePaths = [], direction = 'scss-to-css') {
  const content = fs.statSync(location);
  if (content.isDirectory()) {
    const contentPaths = fs.readdirSync(location);
    contentPaths.forEach(contentPath => {
      if (!excludePaths.includes(contentPath)) {
        transformInPath(path.join(location, contentPath), variablesMap, transformType, excludePaths, direction);
      }
    });
  } else if (location.endsWith('.scss')) {
    if (transformType === 'usage') {
      await replaceVariablesUsage(location, variablesMap, direction);
    } else {
      await replaceVariablesDefinitions(location, variablesMap);
    }
  }
}

/**
 * Creates an `index.css` file that imports all other CSS files in a directory.
 *
 * @param {Object} options - The options for creating the `index.css` file.
 * @param {string} [options.buildDir=path.resolve(__dirname, '../styles/css')]
 * - The base directory where the CSS files are located.
 * @param {boolean} options.isTheme - A flag indicating whether the directory is for theme files.
 * @param {string} options.themeVariant - The specific theme variant to be used (e.g., 'dark', 'light').
 */
function createIndexCssFile({ buildDir = path.resolve(__dirname, '../styles/css'), isTheme, themeVariant }) {
  const directoryPath = isTheme ? `${buildDir}/themes/${themeVariant}` : `${buildDir}/core`;

  fs.readdir(directoryPath, (errDir, files) => {
    if (errDir) {
      // eslint-disable-next-line no-console
      console.error('Error reading directory:', errDir);
      return;
    }

    const outputCssFiles = files.filter(file => file !== 'index.css');
    // When creating themes, there are typically two files: one for utility classes and one for variables.
    // It's organized them to allow variables be reading first.
    if (isTheme) { outputCssFiles.reverse(); }

    const exportStatements = outputCssFiles.map((file) => `@import "${file}";`);

    const indexContent = `${exportStatements.join('\n')}\n`;

    fs.writeFile(path.join(directoryPath, 'index.css'), indexContent, (errFile) => {
      if (errFile) {
        // eslint-disable-next-line no-console
        console.error('Error creating index file:', errFile);
      }
    });
  });
}

/**
 * Composes a breakpoint name according to the Paragon namespace.
 *
 * @param {string} breakpointName - breakpoint initial name.
 * @param {string} format - screen width format.
 * @return {string} - new breakpoint name.
 */
function composeBreakpointName(breakpointName, format) {
  return `@custom-media --${breakpointName.replace(/breakpoint/g, `breakpoint-${format}-width`)}`;
}

/**
 * Generates a custom file header using Style Dictionary hooks.
 *
 * @param {Object} StyleDictionary - The Style Dictionary instance being used.
 * @param {Object} file - The file object containing metadata about the file being generated.
 * @returns {string[]} - An array of strings representing the lines of the file header.
 */
function createCustomHeader(StyleDictionary, file) {
  return StyleDictionary.hooks.fileHeaders.customFileHeader({ file });
}

module.exports = {
  createIndexCssFile,
  getFilesWithExtension,
  getSCSStoCSSMap,
  transformInPath,
  composeBreakpointName,
  createCustomHeader,
};
