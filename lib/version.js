const chalk = require('chalk');
const { version } = require('../package.json');

function versionCommand() {
  console.log(`Paragon CLI version: ${chalk.bold(version)}`); /* eslint-disable-line no-console */
}

module.exports = versionCommand;
