const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const { COMPONENT_FILES } = require('./constants');
const {
  validateComponentName,
  sendTrackInfo,
  createFile,
  addComponentToExports,
  addComponentToGit,
} = require('./utils');

program
  .requiredOption('--componentName <name>', 'Component must have a name', validateComponentName)
  .action((options) => {
    const { componentName } = options;
    // send data to analytics
    sendTrackInfo(componentName);
    const componentDir = path.resolve(__dirname, `../src/${componentName}`);
    // create directory for the component files
    fs.mkdirSync(componentDir);
    // create all necessary files for the component
    COMPONENT_FILES.forEach(file => createFile(file.targetPath, file.templatePath, componentName));
    // export component and its styles from Paragon
    addComponentToExports(componentName);
    // add generated files to git
    addComponentToGit(componentName);
  });

program.parse(process.argv);
