#!/usr/bin/env node
const chalk = require('chalk');
const themeCommand = require('../lib/install-theme');
const helpCommand = require('../lib/help');
const buildTokensCommand = require('../lib/build-tokens');
const replaceVariablesCommand = require('../lib/replace-variables');
const buildScssCommand = require('../lib/build-scss');
const { sendTrackInfo } = require('../lib/utils');
const versionCommand = require('../lib/version');
const migrateToOpenEdxScopeCommand = require('../lib/migrate-to-openedx-scope');

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
  *      choices: 'optionChoices',
  *      defaultValue: 'optionDefaultValue',
  *      required: true/false,
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
  'build-tokens': {
    executor: buildTokensCommand,
    description: 'CLI to build Paragon design tokens.',
    options: [
      {
        name: '-s, --source',
        description: 'Specify the source directory for design tokens.',
        defaultValue: '\'\'',
      },
      {
        name: '-b, --build-dir',
        description: 'Specify the build directory for the generated tokens.',
        defaultValue: './build/',
      },
      {
        name: '--source-tokens-only',
        description: 'Include only source design tokens in the build.',
        defaultValue: false,
      },
      {
        name: '-t, --themes',
        description: 'Specify themes to include in the token build. Eg. light,dark or "light dark"',
        defaultValue: 'light',
      },
      {
        name: '--base-theme',
        description: 'Specify the base theme to use in the token build. For example, to build the "high-contrast" theme on top of the ligth theme use "--theme high-contrast --base-theme light".',
        defaultValue: 'Same as theme',
      },
      {
        name: '--all-themes',
        description: 'Build tokens for all themes in the source directory.',
        defaultValue: false,
      },
    ],
  },
  'replace-variables': {
    executor: replaceVariablesCommand,
    description: 'CLI to replace SCSS variables usages or definitions to CSS variables and vice versa in .scss files.',
    parameters: [
      {
        name: '-p, --filePath',
        description: 'Path to the file or directory where to replace variables.',
        defaultValue: '\'\'',
      },
    ],
    options: [
      {
        name: '-s, --source',
        description: 'Type of replacement: usage or definition. If set to "definition" the command will only update SCSS variables definitions with CSS variables, if set to "usage" - all occurrences of SCSS variables will we replaced',
        defaultValue: '\'\'',
      },
      {
        name: '-t, --replacementType',
        description: 'Type of replacement: usage or definition. If set to "definition" the command will only update SCSS variables definitions with CSS variables, if set to "usage" - all occurrences of SCSS variables will we replaced',
        choices: '[usage|definition]',
        defaultValue: 'definition',
      },
      {
        name: '-d, --direction',
        description: 'Map direction: css-to-scss or scss-to-css, if replacement type parameter is set to "definition" this has no effect.',
        choices: '[scss-to-css|css-to-scss]',
        defaultValue: 'scss-to-css',
      },
    ],
  },
  'build-scss': {
    executor: buildScssCommand,
    description: 'CLI to compile Paragon\'s core and themes SCSS into CSS.',
    options: [
      {
        name: '--corePath',
        description: 'Path to the theme\'s core SCSS file, defaults to Paragon\'s core.scss.',
        defaultValue: 'styles/scss/core/core.scss',
      },
      {
        name: '--themesPath',
        description: `Path to the directory that contains themes' files. Expects directory to have following structure:
          themes/
            light/
            │  ├─ index.css
            │  ├─ other_css_files
            dark/
            │  ├─ index.css
            │  ├─ other_css_files
            some_other_custom_theme/
            │  ├─ index.css
            │  ├─ other_css_files
          ...

          where index.css has imported all other CSS files in the theme's subdirectory. The script will output
          light.css, dark.css and some_other_custom_theme.css files (together with maps and minified versions).
          You can provide any amount of themes. Default to paragon's themes.
      `,
        defaultValue: 'styles/css/themes',
      },
      {
        name: '--outDir',
        description: 'Specifies directory where to out resulting CSS files.',
        defaultValue: './dist',
      },
      {
        name: '--defaultThemeVariants',
        description: `Specifies default theme variants. Defaults to a single 'light' theme variant.
          You can provide multiple default theme variants by passing multiple values, for
          example: \`--defaultThemeVariants light dark\`
        `,
        defaultValue: 'light',
      },
    ],
  },
  help: {
    executor: (args) => helpCommand(COMMANDS, args),
    parameters: [
      {
        name: 'command',
        description: 'Specifies command name.',
        defaultValue: '\'\'',
        choices: '[install-theme|build-tokens|replace-variables|build-scss]',
        required: false,
      },
    ],
    description: 'Displays help for available commands.',
  },
  version: {
    executor: versionCommand,
    description: 'Displays the current version of Paragon CLI.',
  },
};

/**
 * Executes a Paragon CLI command based on the provided command-line arguments.
 *
 * @async
 * @function executeParagonCommand
 */
(async () => {
  const [command, ...commandArgs] = process.argv.slice(2);
  const resolvedCommand = commandAliases[command] || command;
  const executor = COMMANDS[resolvedCommand];

  if (!executor) {
    // eslint-disable-next-line no-console
    console.log(chalk.red.bold('Unknown command. Usage: paragon <command>.'));
    return;
  }

  try {
    await executor.executor(commandArgs);
    sendTrackInfo('openedx.paragon.cli-command.used', { command, status: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(chalk.red.bold('An error occurred:', error.message));
    sendTrackInfo('openedx.paragon.cli-command.used', { command, status: 'error', errorMsg: error.message });
    process.exit(1);
  }
})();
