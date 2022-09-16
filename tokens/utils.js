const fs = require('fs');
const path = require('path');

function getFilesWithExtension(location, extension, files = []) {
  const content = fs.statSync(location);
  if (content.isDirectory()) {
    const contentPaths = fs.readdirSync(location);
    contentPaths.forEach(contentPath => {
      getFilesWithExtension(path.join(location, contentPath), extension, files);
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
  const mapFile = fs.readFileSync(path.resolve(__dirname, './build/scss-to-css-map.json'), 'utf-8');
  const variables = JSON.parse(mapFile);
  let result = targetFile;
  Object.keys(variables).forEach(variable => {
    const cssVariable = cssVariableWrapper(variables[variable]);
    if (direction === 'scss-to-css') {
      result = result.replaceAll(variable, cssVariable);
    } else {
      result = result.replaceAll(cssVariable, variable);
    }
  });
  fs.writeFileSync(filePath, result);
}

module.exports = {
  getFilesWithExtension,
  getSCSStoCSSMap,
  replaceVariables,
};

