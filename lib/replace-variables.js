import minimist from 'minimist';
import { transformInPath } from '../tokens/utils.js';
import mapSCSStoCSS from '../tokens/map-scss-to-css.js';

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
  const alias = {
    filePath: 'p',
    source: 's',
    replacementType: 't',
    direction: 'd',
  };

  const {
    filePath,
    source: sourcePath,
    replacementType,
    direction,
  } = minimist(commandArgs, { alias });

  const variablesMap = mapSCSStoCSS(sourcePath);

  if (replacementType === 'usage') {
    await transformInPath(filePath, variablesMap, 'usage', [], direction);
  } else {
    await transformInPath(filePath, variablesMap);
  }
}

export default replaceVariablesCommand;
