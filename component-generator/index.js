const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const { COMPONENT_FILES } = require('./constants');
const {
  validateComponentName,
  createFile,
  addComponentToExports,
  addComponentToGit,
} = require('./utils');
const { sendTrackInfo } = require('../utils');

program
  .argument('<ComponentName>', 'Component must have a name', validateComponentName)
  .action((componentName) => {
    // send data to analytics
    sendTrackInfo(componentName, 'trackGenerateComponent');
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
