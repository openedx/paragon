#!/usr/bin/env node
const { program, Option } = require('commander');
const { transformInPath } = require('./utils');
const mapSCSStoCSS = require('./map-scss-to-css');

program
  .version('0.0.1')
  .description('CLI to replace SCSS variables usages or definitions to CSS variables and vice versa in .scss files.')
  .requiredOption('-p, --filePath <filePath>', 'Path to the file or directory where to replace variables.')
  .addOption(new Option('-s, --source <sourcePath>', 'Path to additional tokens defined outside of Paragon, can be either a file or a directory.'))
  .addOption(new Option('-t, --replacementType <replacementType>', 'Type of replacement: usage or definition. If set to "definition" the command will only update SCSS variables definitions with CSS variables, if set to "usage" - all occurrences of SCSS variables will we replaced')
    .choices(['usage', 'definition'])
    .default('definition'))
  .action(async (options) => {
    const { filePath, replacementType, source } = options;
    const variablesMap = mapSCSStoCSS(source);
    if (replacementType === 'usage') {
      await transformInPath(filePath, variablesMap, 'usage', [], 'scss-to-css');
    } else {
      await transformInPath(filePath, variablesMap);
    }
  });

program.parse(process.argv);
