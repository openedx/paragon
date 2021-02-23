/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const parser = require('@babel/parser');
const fs = require('fs');
const walk = require('babel-walk');
const glob = require('glob');
const { Command } = require('commander');
const path = require('path');

function getProjectFiles(dir) {
  // Common project directories to ignore
  const ignore = [
    `${dir}/**/node_modules/**`,
    `${dir}/dist/**`,
    `${dir}/public/**`,
    `${dir}/coverage/**`,
    `${dir}/**/*.config.*`,
  ];
  // Gather all js and jsx source files
  return glob.sync(`${dir}/**/*.{js,jsx}`, { ignore });
}

function getPackageInfo(dir) {
  try {
    // Package lock contains the actual Paragon version rather than a range in package.json
    const { dependencies } = JSON.parse(fs.readFileSync(`${dir}/package-lock.json`, { encoding: 'utf-8' }));
    const { name, repository } = JSON.parse(fs.readFileSync(`${dir}/package.json`, { encoding: 'utf-8' }));

    return {
      version: dependencies && dependencies['@edx/paragon'] ? dependencies['@edx/paragon'].version : 'unknown',
      name,
      repository,
    };
  } catch (e) {
    console.error('Unable to read package lock json in ', dir);
    return {};
  }
}

function getComponentUsagesInFiles(files, rootDir) {
  // save the file and line location of components for all files
  return files.reduce((usagesAccumulator, filePath) => {
    const sourceCode = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const ast = parser.parse(sourceCode, { sourceType: 'module', plugins: ['jsx', 'classProperties'] });

    // Track the local names of imported paragon components
    const paragonImportsInFile = {};
    const addParagonImport = (specifierNode) => {
      const { local, imported } = specifierNode;
      paragonImportsInFile[local.name] = imported ? imported.name : local.name;
    };

    const addComponentUsage = (fullComponentName, startLocation) => {
      if (!usagesAccumulator[fullComponentName]) {
        usagesAccumulator[fullComponentName] = [];
      }
      usagesAccumulator[fullComponentName].push({
        filePath: filePath.substring(rootDir.length + 1),
        ...startLocation,
      });
    };

    // Walk the abstract syntax tree of the file looking for paragon imports and component usages
    walk.simple({
      ImportDeclaration(node) {
        // ignore icons and direct imports for now
        if (node.source.value === '@edx/paragon') {
          node.specifiers.forEach(addParagonImport);
        }
      },
      JSXOpeningElement(node) {
        const componentName = node.name.object ? node.name.object.name : node.name.name;
        const isParagonComponent = componentName in paragonImportsInFile;

        if (isParagonComponent) {
          const paragonName = paragonImportsInFile[componentName];
          const subComponentName = node.name.object ? node.name.property.name : null;
          const fullComponentName = subComponentName ? `${paragonName}.${subComponentName}` : paragonName;
          addComponentUsage(fullComponentName, node.loc.start);
        }
      },
    })(ast);

    return usagesAccumulator;
  }, {});
}

function analyzeProject(dir, options = {}) {
  const packageInfo = getPackageInfo(dir);
  const files = getProjectFiles(dir, options);
  const usages = getComponentUsagesInFiles(files, dir);

  // Add Paragon version to each component usage
  Object.keys(usages).forEach(componentName => {
    usages[componentName] = usages[componentName].map(usage => ({
      ...usage,
      version: packageInfo.version,
    }));
  });

  return { ...packageInfo, usages };
}

function findProjectsToAnalyze(dir) {
  // Find all directories containing a package.json file.
  const packageJSONFiles = glob.sync(`${dir}/**/package.json`, { ignore: [`${dir}/**/node_modules/**`] });
  return packageJSONFiles.map(packageJSONFile => path.dirname(packageJSONFile));
}

const program = new Command();

program
  .version('1.0.0')
  .arguments('<projectsDir>')
  .option('-o, --out <outFilePath>', 'output filepath')
  .action((projectsDir, options) => {
    const outputFilePath = options.out || 'out.json';
    const projectDirectories = findProjectsToAnalyze(projectsDir);
    console.log(`Found ${projectDirectories.length} projects to analyze`);
    const analysis = projectDirectories.map(analyzeProject);
    fs.writeFileSync(outputFilePath, JSON.stringify(analysis, null, 2));
    console.log(`Analyzed ${projectDirectories.length} projects:`);
    console.log(analysis);
  });

program.parse(process.argv);
