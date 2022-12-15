const fs = require('fs');
const path = require('path');
const { program, Option } = require('commander');
const { transformInPath } = require('./utils');

program
  .description('CLI to replace SCSS variables usages or definitions to CSS variables and vice versa in .scss files.')
  .requiredOption('-p, --filePath <filePath>', 'Path to the file or directory where to replace variables.')
  .addOption(new Option('-t, --replacementType <replacementType>', 'Type of replacement: usage or definition. If set to "definition" the command will only update SCSS variables definitions with CSS variables, if set to "usage" - all occurrences of SCSS variables will we replaced')
    .choices(['usage', 'definition'])
    .default('definition'))
  .addOption(new Option('-d, --direction <name>', 'Map direction: css-to-scss or scss-to-css, if replacement type parameter is set to "definition" this has no effect.')
    .choices(['scss-to-css', 'css-to-scss'])
    .default('scss-to-css'))
  .action(async (options) => {
    const { direction, filePath, replacementType } = options;
    if (replacementType === 'usage') {
      const mapFile = fs.readFileSync(path.resolve(__dirname, `./variables-maps/${direction}.json`), 'utf-8');
      const variablesMap = JSON.parse(mapFile);
      await transformInPath(filePath, variablesMap, 'usage', ['Table'], direction);
    } else {
      const mapFile = fs.readFileSync(path.resolve(__dirname, './variables-maps/scss-to-css.json'), 'utf-8');
      const variablesMap = JSON.parse(mapFile);
      await transformInPath(filePath, variablesMap);
    }
  });

program.parse(process.argv);
