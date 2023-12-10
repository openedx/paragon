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
      const nameWithoutExtension = path.parse(file).name;
      componentData.rootFiles.push(nameWithoutExtension);
    }
  }

  // eslint-disable-next-line no-return-assign
  return result[path.basename(componentPath)] = componentData;
}

function createTabsData(componentPath, componentDir, mainComponent) {
  const result = {};
  readComponentDir(componentPath, result);

  const subdirectories = result[componentDir]?.subdirectories;

  if (subdirectories !== undefined) {
    const selectedComponent = subdirectories[mainComponent] || result[componentDir];
    return selectedComponent.rootFiles || [];
  }

  return [];
}

module.exports = { createTabsData };
