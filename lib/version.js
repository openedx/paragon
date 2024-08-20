/* eslint-disable no-console */
import chalk from 'chalk';
import packageJson from '../package.json' assert { type: 'json' };

function versionCommand() {
  console.log(`Paragon CLI version: ${chalk.bold(packageJson.version)}`);
}

export default versionCommand;