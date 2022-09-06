const { program, Option } = require('commander');
const { replaceVariables, getFilesWithExtension } = require('./utils');

program
  .description('CLI to replace SCSS variables to CSS variables and vice versa in .scss files.')
  .requiredOption('-p, --path <filePath>', 'Path to the file or directory where to replace variables.')
  .addOption(new Option('-d, --direction <name>', 'Map direction: css-to-scss or scss-to-css.')
    .choices(['scss-to-css', 'css-to-scss'])
    .default('scss-to-css'))
  .action((options) => {
    const { direction, path } = options;
    const sourceFiles = getFilesWithExtension(path, '.scss');
    sourceFiles.forEach(filePath => {
      replaceVariables(filePath, direction);
    });
  });

program.parse(process.argv);
