#!/usr/bin/env node
const chalk = require('chalk');
const themeCommand = require('./install-theme');

// command: executor function
const COMMANDS = {
  'install-theme': themeCommand,
  test: () => console.log('Executing "paragon test" function...'),
};

(async () => {
  const [command, ...args] = process.argv.slice(2);
  const executor = COMMANDS[command];

  if (!executor) {
    console.log(chalk.red.bold('Unknown command. Usage: paragon <command>'));
    return;
  }

  try {
    await executor();
  } catch (error) {
    console.error(chalk.red.bold('An error occurred:', error.message));
    process.exit(1);
  }
})();
