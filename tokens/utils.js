const fs = require('fs');

function getFilesWithExtension(path, extension, files = []) {
  const content = fs.statSync(path);
  if (content.isDirectory()) {
    const contentPaths = fs.readdirSync(path);
    contentPaths.forEach(contentPath => {
      getFilesWithExtension(`${path}/${contentPath}`, extension, files);
    });
  } else if (path.endsWith(extension)) {
    files.push(path);
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

function replaceVariables(path, direction = 'css-to-scss') {
  const targetFile = fs.readFileSync(path, 'utf-8');
  const mapFile = fs.readFileSync('../style-dictionary-build/scss-to-css-map.json', 'utf-8');
  const variables = JSON.parse(mapFile);
  let result = targetFile;
  Object.keys(variables).forEach(variable => {
    const cssVariable = cssVariableWrapper(variables[variable]);
    if (direction === 'css-to-scss') {
      result = result.replaceAll(variable, cssVariable);
    } else {
      result = result.replaceAll(cssVariable, variable);
    }
  });
  fs.writeFileSync(path, result);
}

module.exports = {
  getFilesWithExtension,
  getSCSStoCSSMap,
  replaceVariables,
};
