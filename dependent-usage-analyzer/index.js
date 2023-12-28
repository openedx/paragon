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

/**
 * Attempts to extract the Paragon version for a given package directory.
 * When no package-lock.json file is found in the given directory path or when
 * no Paragon version can be retrieved, recursively traverse up the directory tree
 * until we reach the top-level projects directory. This approach is necessary in
 * order to account for potential projects that are technically monorepos containing
 * multiple packages, where dependencies are hoisted to a parent directory.
 *
 * @param {string} dir Path to directory
 * @param {object} options Optional options
 * @param {string} options.projectsDir Path to top-level projects directory
 * @returns String representing direct or peer Paragon dependency version
 */
function getDependencyVersion(dir, options = {}) {
  // package-lock.json contains the actual Paragon version
  // rather than a range in package.json.
  const packageFilename = 'package-lock.json';
  const { projectsDir } = options;
  if (dir === projectsDir) {
    // At the top-level directory containing all projects; Paragon version not found.
    return "";
  }
  const parentDir = dir.split('/').slice(0, -1).join('/');
  if (!fs.existsSync(`${dir}/${packageFilename}`)) {
    // No package-lock.json file exists, so try traversing up the tree until
    // reaching the top-level ``projectsDir``.
    return getDependencyVersion(parentDir, options);
  }
  const {
    packages,
    dependencies,
    peerDependencies
  } = JSON.parse(fs.readFileSync(`${dir}/${packageFilename}`, { encoding: 'utf-8' }));

  const getVersion = (depsObjectName, org = '@edx') => {
    switch (depsObjectName) {
      case 'packages':
        return packages && packages[`node_modules/${org}/paragon`]?.version;
      case 'dependencies':
        return dependencies && dependencies[`${org}/paragon`]?.version;
      case 'peerDependencies':
        return peerDependencies && peerDependencies[`${org}/paragon`]?.version;
      default:
        console.error(`Unexpected organization: ${org} or dependence object name: ${depsObjectName}`);
        return undefined;
    }
  };

  // first handle lockfileVersion 3 that contains all dependencies data in 'packages' key
  const packagesDependencyVersion = getVersion('packages') || getVersion('packages', '@openedx');
  const directDependencyVersion = getVersion('dependencies') || getVersion('dependencies', '@openedx');
  const peerDependencyVersion = getVersion('peerDependencies') || getVersion('peerDependencies', '@openedx');
  const resolvedVersion = packagesDependencyVersion || directDependencyVersion || peerDependencyVersion;
  if (resolvedVersion) {
    return resolvedVersion;
  }
  // No Paragon dependency exists, so try traversing up the tree until
  // reaching the top-level ``projectsDir``.
  return getDependencyVersion(parentDir, options)
}

function getPackageInfo(dir, options = {}) {
  const version = getDependencyVersion(dir, options);
  try {
    const { name, repository } = JSON.parse(fs.readFileSync(`${dir}/package.json`, { encoding: 'utf-8' }));

    return {
      version,
      name,
      repository,
      folderName: dir.split('/').pop(),
    };
  } catch (e) {
    console.error('Unable to read package.json in ', dir);
    return {};
  }
}

function getComponentUsagesInFiles(files, rootDir) {
  // Save the file and line location of components for all files
  return files.reduce((usagesAccumulator, filePath) => {
    const sourceCode = fs.readFileSync(filePath, { encoding: 'utf-8' });
    let ast;
    try {
      ast = parser.parse(sourceCode, { sourceType: 'module', plugins: ['jsx', 'classProperties'] });
    } catch (e) {
      console.error(`There was an error parsing a file into an abstract syntax tree. Skipping file: ${filePath}`);
      return usagesAccumulator;
    }

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
      // ImportDeclaration nodes contains data about imports in the files
      ImportDeclaration(node) {
        const allowedPackages = ['@edx/paragon', '@edx/paragon/icons', '@openedx/paragon', '@openedx/paragon/icons'];
        // Ignore direct imports for now
        if (allowedPackages.includes(node.source.value)) {
          node.specifiers.forEach(addParagonImport);
        }
      },
      // JSXOpeningElement nodes contains data about each JSX element in the file.
      // where Paragon component can be found through node.name.object and node.name.property.name for subcomponents
      // Example: `<Alert variant="danger">Some alert</Alert>`
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
      // JSXExpressionContainer nodes contains data about each JSX props expressions in the file.
      // where Paragon component can be found through node.expression.name
      // Example: `<Icon src={Add} />`
      JSXExpressionContainer(node) {
        const componentName = node.expression.name;
        const isParagonComponent = paragonImportsInFile.hasOwnProperty(componentName);

        if (isParagonComponent) {
          addComponentUsage(componentName, node.expression.loc.start);
        }
      },
      // AssignmentExpression contains data about each assignment in the file,
      // where Paragon components, hooks and utils can be found through node.name.object
      // Example: `const alert = Alert;` will go here
      AssignmentExpression(node) {
        const componentName = node.right.name;
        const isParagonComponent = paragonImportsInFile.hasOwnProperty(componentName);

        if (isParagonComponent) {
          addComponentUsage(componentName, node.loc.start);
        }
      },
      // CallExpression contains data about each function call in the file,
      // where Paragon hooks and functions can be found usage through node.callee.
      // Example: `const myVar = useWindowSize();` will go here
      CallExpression(node) {
        const componentName = node.callee.name;
        const isParagonComponent = paragonImportsInFile.hasOwnProperty(componentName);

        if (isParagonComponent) {
          addComponentUsage(componentName, node.loc.start);
        }
      },
      // MemberExpression contains data about complex expressions,
      // where Paragon components, hooks and utils can be found node.object.
      // Example: `const myVar = isVertical ? Button : ActionRow;` will go here
      MemberExpression(node) {
        const componentName = node.object.name;
        const isParagonComponent = paragonImportsInFile.hasOwnProperty(componentName);

        if (isParagonComponent) {
          addComponentUsage(componentName, node.loc.start);
        }
      }
    })(ast);

    return usagesAccumulator;
  }, {});
}

function analyzeProject(dir, options = {}) {
  const packageInfo = getPackageInfo(dir, options);
  const files = getProjectFiles(dir);
  const usages = getComponentUsagesInFiles(files, dir);

  // Add Paragon version to each component usage
  Object.keys(usages).forEach(componentName => {
    usages[componentName].usages = usages[componentName].map(usage => ({
      ...usage,
      version: packageInfo.version,
    }));
  });

  return { ...packageInfo, usages };
}

function findProjectsToAnalyze(dir) {
  // Find all directories containing a package.json file.
  const packageJSONFiles = glob.sync(`${dir}/**/package.json`, { ignore: [`${dir}/**/node_modules/**`] });

  // If paragon isn't included in the package.json file then skip analyzing it
  const packageJSONFilesWithParagon = packageJSONFiles.filter(packageJSONFile => {
    const { dependencies, peerDependencies } = JSON.parse(fs.readFileSync(packageJSONFile, { encoding: 'utf-8' }));

    const hasDependency = (depsObject, orgs) => {
      return orgs.some(org => depsObject && depsObject[`${org}/paragon`] !== undefined);
    };

    const hasDirectDependency = hasDependency(dependencies, ['@edx', '@openedx']);
    const hasPeerDependency = hasDependency(peerDependencies, ['@edx', '@openedx']);

    return hasDirectDependency || hasPeerDependency;
  });

  console.log(packageJSONFilesWithParagon)

  return packageJSONFilesWithParagon.map(packageJSONFile => path.dirname(packageJSONFile));
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
    const analyzedProjects = projectDirectories.map((dir) => analyzeProject(dir, { projectsDir }));
    const analysis = {
      lastModified: Date.now(),
      projectUsages: analyzedProjects,
    }
    fs.writeFileSync(outputFilePath, JSON.stringify(analysis, null, 2));
    console.log(`Analyzed ${projectDirectories.length} projects:`);
    console.log(analysis);
  });

program.parse(process.argv);
