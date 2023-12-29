#!/usr/bin/env node
const chalk = require('chalk');
const themeCommand = require('../lib/install-theme');
const helpCommand = require('../lib/help');
const versionCommand = require('../lib/version');
const migrateToOpenEdxScopeCommand = require('../lib/migrate-to-openedx-scope');

const HELP_COMMAND = 'help';
const commandAliases = {
  '-v': 'version',
  '--version': 'version',
};

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
        defaultValue: '@openedx/brand-openedx@latest',
        required: false,
      },
    ],
  },
  'migrate-to-openedx-scope': {
    executor: migrateToOpenEdxScopeCommand,
    description: 'CLI for migrate from "@edx/paragon" to "@openedx/paragon".',
    parameters: [
      {
        name: 'path',
        description: 'Path to the directory where to replace Paragon package name, default to root of the repository',
        required: false,
      },
    ],
  },
  help: {
    executor: helpCommand,
    description: 'Displays help for available commands.',
  },
  version: {
    executor: versionCommand,
    description: 'Displays the current version of Paragon CLI.',
  },
};

(async () => {
  const [command] = process.argv.slice(2);
  const resolvedCommand = commandAliases[command] || command;
  const executor = COMMANDS[resolvedCommand];

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
    await executor.executor();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(chalk.red.bold('An error occurred:', error.message));
    process.exit(1);
  }
})();
