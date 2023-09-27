const minimist = require('minimist');
const { transformInPath } = require('../tokens/utils');
const mapSCSStoCSS = require('../tokens/map-scss-to-css');

/**
 * Replaces CSS or SASS variables in a file with their corresponding values.
 *
 * @param {string[]} commandArgs - Command line arguments for replacing variables.
 * @param {string} [commandArgs.filePath] - The path to the file in which variables should be replaced.
 * @param {string} [commandArgs.source] - The path to the source directory containing variable mappings.
 * @param {string} [commandArgs.replacementType] - The type of replacement ('usage' or 'all').
 * @param {string} [commandArgs.direction] - The direction of replacement ('forward' or 'backward').
 */
async function replaceVariablesCommand(commandArgs) {
  const args = minimist(commandArgs);
  const filePath = args.p || args.filePath;
  const sourcePath = args.s || args.source;
  const replacementType = args.t || args.replacementType;
  const direction = args.d || args.direction;

  const variablesMap = mapSCSStoCSS(sourcePath);

  if (replacementType === 'usage') {
    await transformInPath(filePath, variablesMap, 'usage', [], direction);
  } else {
    await transformInPath(filePath, variablesMap);
  }
}

module.exports = replaceVariablesCommand;
