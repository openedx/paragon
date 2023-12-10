const fs = require('fs');
const path = require('path');

function readComponentDir(componentPath, result) {
  const files = fs.readdirSync(componentPath);

  const componentData = {
    rootFiles: [],
    subdirectories: {},
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const filePath = path.join(componentPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      componentData.subdirectories[file] = readComponentDir(filePath, result);
    } else if (path.extname(file) === '.md' && !file.includes('README')) {
      componentData.rootFiles.push(file);
    }
  }

  // eslint-disable-next-line no-return-assign
  return result[path.basename(componentPath)] = componentData;
}

function createTabsData(componentPath, componentDir) {
  const result = {};
  readComponentDir(componentPath, result);
  return result[componentDir];
}

module.exports = { createTabsData };
