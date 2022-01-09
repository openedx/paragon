const { InvalidOptionArgumentError } = require('commander');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/**
 * Helper function to validate component name when the command is invoked.
 * Checks that component does not exists in Paragon and returns
 * component name, otherwise throws an error.
 * @param {string} value - component name
 */
function validateComponentName(value) {
  if (fs.existsSync(`./src/${value}`)) {
    throw new InvalidOptionArgumentError('The component already exists.');
  }
  return value;
}

/**
 * Creates a file for the component based on the template.
 * Note that 'componentName' string is a reserved placeholder,
 * all its occurrences in both targetPath and provided template will
 * get replaced by the actual component name while create new file.
 * @param {string} targetPath - a path where new file will be created
 * @param {string} templatePath - a path to the template used to create a file
 * @param {string} componentName - name of the component
 */
function createFile(targetPath, templatePath, componentName) {
  const actualPath = targetPath.replace(/componentName/g, componentName);
  const fileContent = fs
    .readFileSync(templatePath, 'utf-8')
    .replace(/componentName/g, componentName);
  fs.writeFileSync(actualPath, fileContent);
}

/**
 * Export both component and its styles from Paragon
 * @param {string} componentName - name of the component to add to the exports
 */
function addComponentToExports(componentName) {
  fs.appendFileSync('./src/index.js', `export { default as ${componentName} } from './${componentName}';\n`);
  fs.appendFileSync('./src/index.scss', `@import './${componentName}/${componentName}.scss';\n`);
}

/**
 * Add files related to the new component to Git (these include exports from Paragon and new generated files)
 * @param {string} componentName - name of the component
 */
function addComponentToGit(componentName) {
  const componentDir = path.resolve(__dirname, `../src/${componentName}`);
  const componentExportFile = path.resolve(__dirname, '../src/index.js');
  const stylesExportFile = path.resolve(__dirname, '../src/index.scss');
  exec(`git add ${componentExportFile} ${stylesExportFile} ${componentDir}/*`);
}

exports.validateComponentName = validateComponentName;
exports.createFile = createFile;
exports.addComponentToExports = addComponentToExports;
exports.addComponentToGit = addComponentToGit;
