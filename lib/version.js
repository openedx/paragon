/* eslint-disable no-console */
const chalk = require('chalk');
const { version } = require('../package.json');

function versionCommand() {
  console.log(`Paragon CLI version: ${chalk.bold(version)}`);
}

module.exports = versionCommand;
