const fs = require('fs');
const path = require('path');

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
      result[key[node]] = prefix;
    }
  });
  return result;
}

function cssVariableWrapper(variable) {
  return `var(${variable})`;
}

function replaceVariables(filePath, direction = 'css-to-scss') {
  const targetFile = fs.readFileSync(filePath, 'utf-8');
  const coreMapFile = fs.readFileSync(path.resolve(__dirname, './build/scss-to-css-core.json'), 'utf-8');
  const coreVariables = JSON.parse(coreMapFile);

  let result = targetFile;
  Object.keys(coreVariables).forEach(variable => {
    const cssVariable = cssVariableWrapper(coreVariables[variable]);
    if (direction === 'scss-to-css') {
      result = result.replaceAll(variable, cssVariable);
    } else {
      result = result.replaceAll(cssVariable, variable);
    }
  });
  if (!filePath.endsWith('_variables.scss')) {
    const componentsMapFile = fs.readFileSync(path.resolve(__dirname, './build/scss-to-css-components.json'), 'utf-8');
    const componentsVariables = JSON.parse(componentsMapFile);
    Object.keys(componentsVariables).forEach(variable => {
      const cssVariable = cssVariableWrapper(componentsVariables[variable]);
      if (direction === 'scss-to-css') {
        result = result.replaceAll(variable, cssVariable);
      } else {
        result = result.replaceAll(cssVariable, variable);
      }
    });
  }
  fs.writeFileSync(filePath, result);
}

module.exports = {
  getFilesWithExtension,
  getSCSStoCSSMap,
  replaceVariables,
};
