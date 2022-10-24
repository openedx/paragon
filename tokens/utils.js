const fs = require('fs');
const readline = require('readline');
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
      result[key[node]] = `var(${prefix})`;
    }
  });
  return result;
}

async function replaceVariables(filePath, direction = 'scss-to-css') {
  const mapFile = fs.readFileSync(path.resolve(__dirname,`./build/${direction}.json`), 'utf-8');
  const variablesMap = JSON.parse(mapFile);
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

module.exports = {
  getFilesWithExtension,
  getSCSStoCSSMap,
  replaceVariables,
};
