#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
const themeCommand = require('./install-theme');

// command: executor function
const COMMANDS = {
  'install-theme': themeCommand,
};

(async () => {
  const [command] = process.argv.slice(2);
  const executor = COMMANDS[command];

  if (!executor) {
    // eslint-disable-next-line no-console
    console.log(chalk.red.bold('Unknown command. Usage: paragon <command>'));
    return;
  }

  try {
    await executor();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(chalk.red.bold('An error occurred:', error.message));
    process.exit(1);
  }
})();
