const fsp = require('fs').promises;
const path = require('path');

async function exploreComponentDirectory(directoryPath, componentStructure) {
  try {
    const files = await fsp.readdir(directoryPath);

    const componentData = {
      rootFiles: [],
      subdirectories: {},
    };

    await Promise.all(files.map(async (fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const fileStats = await fsp.stat(filePath);

      if (fileStats.isDirectory()) {
        componentData.subdirectories[fileName] = await exploreComponentDirectory(filePath, componentStructure);
      } else if (path.extname(fileName) === '.md' && !fileName.includes('README')) {
        const fileNameWithoutExtension = path.parse(fileName).name;
        componentData.rootFiles.push(fileNameWithoutExtension);
      }
    }));

    componentStructure[path.basename(directoryPath)] = componentData;
    return componentData;
  } catch (error) {
    console.error(`Error exploring component directory: ${directoryPath}`, error);
    throw error;
  }
}

async function retrieveRootFiles(componentPath, componentDir, nodeSlug) {
  const [subComponentName] = nodeSlug.split('/').slice(1);
  const componentStructure = {};
  await exploreComponentDirectory(componentPath, componentStructure);

  const componentSubDirectories = componentStructure[componentDir]?.subdirectories;

  if (componentSubDirectories !== undefined) {
    const selectedComponent = componentSubDirectories[subComponentName] || componentStructure[componentDir];
    return selectedComponent.rootFiles || [];
  }

  return [];
}

module.exports = { retrieveRootFiles };
