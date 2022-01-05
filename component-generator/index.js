const { program } = require('commander');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const { COMPONENT_FILES } = require('./constants');
const { validateComponentName, createFile, addComponentToExports } = require('./utils');

program
  .requiredOption('--componentName <name>', 'Component must have a name', validateComponentName)
  .action((options) => {
    const { componentName } = options;
    const componentDir = path.resolve(__dirname, `../src/${componentName}`);
    // create directory for the component files
    fs.mkdirSync(componentDir);
    // create all necessary files for the component
    COMPONENT_FILES.forEach(file => createFile(file.targetPath, file.templatePath, componentName));
    // export component and its styles from Paragon
    addComponentToExports(componentName);
    // add generated files to git
    exec(`git add ${componentDir}/*`);
  });

program.parse(process.argv);
