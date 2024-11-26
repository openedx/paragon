const { InvalidOptionArgumentError } = require('commander');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { exec } = require('child_process');
require('dotenv').config();

/**
 * Transforms PascalCase to kebab-case.
 * @param {string} componentName - name of the component
 */
function generateCssClass(componentName) {
  return componentName.replace(
    /[A-Z]+/g,
    (capital, index) => (index ? `-${capital}` : capital).toLowerCase(),
  );
}

/**
 * Helper function to validate component name when the command is invoked.
 * Checks that component does not exists in Paragon and returns
 * component name, otherwise throws an error.
 * @param {string} value - component name
 */
function validateComponentName(value) {
  if (!/^([A-Z][a-z]*)([A-Z][a-z]*)*$/g.test(value)) {
    throw new InvalidOptionArgumentError('Name should match Pascal case. Example: MyComponent.');
  }
  if (fs.existsSync(path.resolve(__dirname, `../src/${value}`))) {
    throw new InvalidOptionArgumentError('The component already exists.');
  }
  return value;
}

/**
 * Sends request to the Netlify function to inform about generate-component usage.
 * @param {string} componentName - component name
 */
function sendTrackInfo(componentName) {
  const { BASE_URL, TRACK_ANONYMOUS_ANALYTICS } = process.env;
  if (TRACK_ANONYMOUS_ANALYTICS) {
    const url = `${BASE_URL}/.netlify/functions/trackGenerateComponent`;
    axios.post(url, { componentName })
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(`Track info is successfully sent (status ${result.status})`);
      }).catch(error => {
        // eslint-disable-next-line no-console
        console.log(`Track info request failed (${error})`);
      });
  }
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
  const cssClass = generateCssClass(componentName);
  const actualPath = targetPath.replace(/componentName/g, componentName);
  const fileContent = fs
    .readFileSync(templatePath, 'utf-8')
    .replace(/componentName/g, componentName)
    .replace(/css-class/g, cssClass);
  fs.writeFileSync(actualPath, fileContent);
}

/**
 * Export both component and its styles from Paragon
 * @param {string} componentName - name of the component to add to the exports
 */
function addComponentToExports(componentName) {
  fs.appendFileSync(
    path.resolve(__dirname, '../src/index.js'),
    `export { default as ${componentName} } from './${componentName}';\n`,
  );
  fs.appendFileSync(
    path.resolve(__dirname, '../src/index.scss'),
    `@import "./${componentName}";\n`,
  );
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
exports.sendTrackInfo = sendTrackInfo;
exports.createFile = createFile;
exports.addComponentToExports = addComponentToExports;
exports.addComponentToGit = addComponentToGit;
