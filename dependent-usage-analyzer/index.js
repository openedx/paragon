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
    // eslint-disable-next-line no-console
    console.error('Unable to read package lock json in ', dir);
    return {};
  }
}

const filesToUsagesReducer = (rootDir, usagesAccumulator, filePath) => {
  const paragonImportsInFile = {};
  const sourceCode = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const ast = parser.parse(sourceCode, {
    sourceType: 'module',
    // enable jsx and other plugins
    plugins: ['jsx', 'classProperties'],
  });

  const handleJSXOpeningElement = (node) => {
    const componentName = node.name.object ? node.name.object.name : node.name.name;
    const isParagonComponent = componentName in paragonImportsInFile;

    if (isParagonComponent) {
      const paragonName = paragonImportsInFile[componentName];
      const subComponentName = node.name.object ? node.name.property.name : null;
      const fullComponentName = subComponentName ? `${paragonName}.${subComponentName}` : paragonName;
      if (!usagesAccumulator[fullComponentName]) {
        // eslint-disable-next-line no-param-reassign
        usagesAccumulator[fullComponentName] = [];
      }
      usagesAccumulator[fullComponentName].push({
        filePath: filePath.substring(rootDir.length + 1),
        ...node.loc.start,
      });
    }
  };

  const handleImportDeclaration = (node) => {
    // ignore icons and direct imports for now
    if (node.source.value === '@edx/paragon') {
      node.specifiers.forEach(specifierNode => {
        paragonImportsInFile[specifierNode.local.name] = specifierNode.imported
          ? specifierNode.imported.name : specifierNode.local.name;
      });
    }
  };

  walk.simple({
    JSXOpeningElement: handleJSXOpeningElement,
    ImportDeclaration: handleImportDeclaration,
  })(ast);

  return usagesAccumulator;
};

function analyzeProject(dir, options = {}) {
  const files = getProjectFiles(dir, options);
  const { version, name, repository } = getPackageInfo(dir);
  const usages = files.reduce(filesToUsagesReducer.bind(null, dir), {});

  // Add Paragon version to each usage
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const component in usages) {
    usages[component] = usages[component].map(usage => ({ ...usage, version }));
  }

  return {
    name,
    version,
    repository,
    usages,
  };
}

const program = new Command();

function findProjectsToAnalyze(dir) {
  // Find all directories containing a package.json file.
  const packageJSONFiles = glob.sync(`${dir}/**/package.json`, { ignore: [`${dir}/**/node_modules/**`] });
  return packageJSONFiles.map(packageJSONFile => path.dirname(packageJSONFile));
}

program
  .version('0.0.1')
  .arguments('<projectsDir>')
  .option('-o, --out <outFilePath>', 'output filepath')
  .action((projectsDir, options) => {
    const outputFilePath = options.out || 'out.json';
    const projectDirectories = findProjectsToAnalyze(projectsDir);
    console.log(`Found ${projectDirectories.length} projects to analyze`);
    const allProjects = projectDirectories.map(analyzeProject);
    console.log(allProjects);
    fs.writeFileSync(outputFilePath, JSON.stringify(allProjects, null, 2));
  });

program.parse(process.argv);
