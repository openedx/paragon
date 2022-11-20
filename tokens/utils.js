const fs = require('fs');
const readline = require('readline');
const path = require('path');
const chroma = require('chroma-js');

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

function getSCSStoCSSMap(prefix, key, result) {
  Object.keys(key).forEach(node => {
    if (key[node].constructor.name === 'Object') {
      const newPrefix = `${prefix}-${node}`;
      getSCSStoCSSMap(newPrefix, key[node], result);
    } else if (node === 'source') {
      // eslint-disable-next-line no-param-reassign
      result[key[node]] = `var(${prefix})`;
    }
  });
  return result;
}

async function replaceVariablesUsage(filePath, variablesMap, direction = 'scss-to-css') {
  let variableRegex;
  let result = '';

  if (direction === 'css-to-scss') {
    variableRegex = /var\((\w|-|_)*\)/g;
  } else if (direction === 'scss-to-css') {
    variableRegex = /\$(\w|-|_)*(,|;|\)|\s|}|$)/g;
  }

  const fileStream = fs.createReadStream(path.resolve(__dirname, filePath));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    let parsedLine = line;
    const variables = [...parsedLine.matchAll(variableRegex)];

    variables.forEach(variableData => {
      let variable = variableData[0];
      if (direction === 'scss-to-css' && [',', ';', ')', ' ', '}'].includes(variable.slice(-1))) {
        variable = variable.slice(0, -1);
      }
      if (variable in variablesMap) {
        parsedLine = parsedLine.replaceAll(variable, variablesMap[variable]);
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
 * Javascript version of bootstrap's color-yiq function. Decides whether to return light color variant or dark one
 * based on contrast value of the input color
 *
 * @param color - chroma-js color instance
 * @param {String} [light] - light color variant, defaults to 'yiq-text-light' from ./source/global/other.json
 * @param {String} [dark] - dark color variant, defaults to 'yiq-text-dark' from ./source/global/other.json
 * @param {Number} [threshold] - contrast threshold, defaults to 'yiq-contrasted-threshold'
 * from ./source/global/other.json
 * @return chroma-js color instance (one of dark or light variants)
 */
function colorYiq(color, light, dark, threshold) {
  const defaultsFile = fs.readFileSync(path.resolve(__dirname, 'source', 'global', 'other.json'), 'utf8');
  const defaults = JSON.parse(defaultsFile);
  const {
    'yiq-text-dark': defaultDark,
    'yiq-text-light': defaultLight,
    'yiq-contrasted-threshold': defaultThreshold,
  } = defaults;

  const contrastThreshold = threshold || defaultThreshold;
  const lightColor = light || defaultLight;
  const darkColor = dark || defaultDark;

  const [r, g, b] = color.rgb();
  const yiq = ((r * 299) + (g * 587) + (b * 114)) * 0.001;

  if (yiq >= contrastThreshold) {
    return chroma(darkColor);
  }

  return chroma(lightColor);
}

module.exports = {
  getFilesWithExtension,
  getSCSStoCSSMap,
  transformInPath,
  colorYiq,
};
