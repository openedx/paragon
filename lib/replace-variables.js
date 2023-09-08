const minimist = require('minimist');
const { transformInPath } = require('../tokens/utils');
const mapSCSStoCSS = require('../tokens/map-scss-to-css');

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
