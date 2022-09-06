// eslint-disable-next-line import/no-extraneous-dependencies
const { program } = require('commander');
const { replaceVariables, getFilesWithExtension } = require('./utils');

const BASE_PATH = '../src/Bubble';

const cssFiles = getFilesWithExtension(BASE_PATH, '.scss');

program
  .requiredOption('--direction <name>',
    'Missing parameter "direction". Possible values: "css-to-scss" or "scss-to-css"', 'css-to-scss')
  .action((options) => {
    const { direction } = options;
    cssFiles.forEach(filePath => {
      replaceVariables(filePath, direction);
    });
  });

program.parse(process.argv);
