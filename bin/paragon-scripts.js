#!/usr/bin/env node
const chalk = require('chalk');
const themeCommand = require('../lib/install-theme');
const helpCommand = require('../lib/help');

const HELP_COMMAND = 'help';

const COMMANDS = {
  /**
  *'command-name': {
  *  executor: executorFunc,
  *
  *  ********** Block for help command start **********
  *  description: 'Command description',
  *  parameters: [
  *    {
  *      name: 'paramName',
  *      description: 'paramDescription',
  *      defaultValue: 'paramDefaultValue',
  *      required: true/false,
  *    },
  *    ...
  *  ],
  *  options: [
  *    {
  *      name: '--optionName',
  *      description: 'optionDescription',
  *    },
  *    ...
  *  ],
  *  ********** Block for help command end **********
  *},
  */
  'install-theme': {
    executor: themeCommand,
    description: 'Installs the specific @edx/brand package.',
    parameters: [
      {
        name: 'theme',
        description: 'The @edx/brand package to install.',
        defaultValue: '@edx/brand-openedx@latest',
        required: false,
      },
    ],
  },
  help: {
    executor: helpCommand,
    description: 'Displays help for available commands.',
  },
};

(async () => {
  const [command, ...commandArgs] = process.argv.slice(2);
  const executor = COMMANDS[command];

  if (!executor) {
    // eslint-disable-next-line no-console
    console.log(chalk.red.bold('Unknown command. Usage: paragon <command>.'));
    return;
  }

  if (command === HELP_COMMAND) {
    helpCommand(COMMANDS);
    return;
  }

  try {
    await executor.executor(commandArgs);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(chalk.red.bold('An error occurred:', error.message));
    process.exit(1);
  }
})();
