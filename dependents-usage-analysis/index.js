const parser = require('@babel/parser');
const fs = require('fs');
const walk = require('babel-walk');
const glob = require('glob');
const { Command } = require('commander');
const path = require('path');

const ignorePatterns = (dir) => ([
  `${dir}/**/node_modules/**`,
  `${dir}/dist/**`,
  `${dir}/public/**`,
  `${dir}/coverage/**`,
  `${dir}/**/*.config.*`,
]);

function getProjectFiles(dir) {
  return glob.sync(`${dir}/**/*.{js,jsx}`, { ignore: ignorePatterns(dir) });
}

function getPackageInfo(dir) {
  try {
    const packageLockFiles = glob.sync(`${dir}/**/package-lock.json`, { ignore: ignorePatterns(dir) });
    const { dependencies } = JSON.parse(fs.readFileSync(packageLockFiles[0], { encoding: 'utf-8' }));
    const packageJSONFiles = glob.sync(`${dir}/**/package.json`, { ignore: ignorePatterns(dir) });
    const { name, repository } = JSON.parse(fs.readFileSync(packageJSONFiles[0], { encoding: 'utf-8' }));

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

function getCodeString(filePath) {
  return fs.readFileSync(filePath, { encoding: 'utf-8' });
}

function parseCode(code) {
  // parse in strict mode and allow module declarations
  return parser.parse(code, {
    sourceType: 'module',
    plugins: [
      // enable jsx and other plugins
      'jsx',
      'classProperties',
    ],
  });
}

const filesToUsagesReducer = (usagesAccumulator, filePath) => {
  const paragonImportsInFile = {};
  const codeStr = getCodeString(filePath);
  const ast = parseCode(codeStr);

  walk.simple({
    JSXOpeningElement(node) {
      const componentName = node.name.object ? node.name.object.name : node.name.name;
      const subComponentName = node.name.object ? node.name.property.name : null;

      if (componentName in paragonImportsInFile) {
        const paragonName = paragonImportsInFile[componentName];
        const fullComponentName = subComponentName ? `${paragonName}.${subComponentName}` : paragonName;
        if (!usagesAccumulator[fullComponentName]) {
          // eslint-disable-next-line no-param-reassign
          usagesAccumulator[fullComponentName] = [];
        }
        usagesAccumulator[fullComponentName].push({
          filePath,
          ...node.loc.start,
        });
      }
    },
    ImportDeclaration(node) {
      // ignore icons and direct imports for now
      if (node.source.value === '@edx/paragon') {
        node.specifiers.forEach(specifierNode => {
          paragonImportsInFile[specifierNode.local.name] = specifierNode.imported
            ? specifierNode.imported.name : specifierNode.local.name;
        });
      }
    },
  })(ast);

  return usagesAccumulator;
};

function analyzeProject(dir, options = {}) {
  const files = getProjectFiles(dir, options);
  const { version, name, repository } = getPackageInfo(dir);
  const usages = files.reduce(filesToUsagesReducer, {});

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

program
  .version('0.0.1')
  .arguments('<projectsDir>')
  .option('-o, --out <outFilePath>', 'output filepath')
  .action((projectsDir, options) => {
    const outputFilePath = options.out || 'out.json';
    const projectsToAnalyze = fs.readdirSync(projectsDir);
    const allProjects = projectsToAnalyze.map(projectDir => analyzeProject(path.join(projectsDir, projectDir)));
    // eslint-disable-next-line no-console
    console.log(allProjects);
    fs.writeFileSync(outputFilePath, JSON.stringify(allProjects, null, 2));
  });

program.parse(process.argv);
