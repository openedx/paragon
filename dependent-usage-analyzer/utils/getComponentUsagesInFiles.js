/* eslint-disable no-prototype-builtins */
const fs = require('fs');
const walk = require('babel-walk');
const parser = require('@babel/parser');

/**
 * Retrieves information about Paragon component usages in project.
 * @param {Array.<string>} files - An array of file paths to analyze.
 * @param {string} rootDir - The root directory of the project.
 * @returns {Object} - An object containing component usage information, organized by component name.
 */
function getComponentUsagesInFiles(files, rootDir) {
  // Save the file and line location of components for all files
  return files.reduce((usagesAccumulator, filePath) => {
    const sourceCode = fs.readFileSync(filePath, { encoding: 'utf-8' });
    let ast;

    try {
      ast = parser.parse(sourceCode, { sourceType: 'module', plugins: ['jsx', 'classProperties'] });
    } catch (e) {
      // eslint-disable-next-line no-console
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
      },
    })(ast);

    return usagesAccumulator;
  }, {});
}

module.exports = { getComponentUsagesInFiles };
