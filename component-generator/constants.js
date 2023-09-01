const path = require('path');

// list of objects describing files that will be
// created for new component, each object should contain
// two attributes:
// 1. targetPath - a path where new file will be created
// 2. templatePath - a path to the template used to create new file
//
// Note that 'componentName' string is used as a placeholder for the
// new component's name and will be replaced during component creation
// both in template and targetPath
exports.COMPONENT_FILES = [
  {
    targetPath: path.resolve(__dirname, '../src/componentName/index.jsx'),
    templatePath: path.resolve(__dirname, './templates/index.jsx'),
  },
  {
    targetPath: path.resolve(__dirname, '../src/componentName/_variables.scss'),
    templatePath: path.resolve(__dirname, './templates/_variables.scss'),
  },
  {
    targetPath: path.resolve(__dirname, '../src/componentName/README.md'),
    templatePath: path.resolve(__dirname, './templates/README.md'),
  },
  {
    targetPath: path.resolve(__dirname, '../src/componentName/componentName.scss'),
    templatePath: path.resolve(__dirname, './templates/styles.scss'),
  },
  {
    targetPath: path.resolve(__dirname, '../src/componentName/componentName.test.jsx'),
    templatePath: path.resolve(__dirname, './templates/test.jsx'),
  },
];
