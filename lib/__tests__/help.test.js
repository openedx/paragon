const chalk = require('chalk');

const { COMMANDS } = require('../../bin/paragon-scripts');
const { helpCommand, findCommandByName } = require('../help');

/* eslint-disable no-console */
console.log = jest.fn();
console.error = jest.fn();
/* eslint-enable no-console */

describe('helpCommand', () => {
  beforeEach(() => {
    /* eslint-disable no-console */
    console.log.mockClear();
    console.error.mockClear();
    /* eslint-enable no-console */
  });

  it('displays all commands when no specific command is provided', () => {
    helpCommand(COMMANDS, []);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith('Available commands:');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('install-theme'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('build-tokens'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('version'));
    /* eslint-enable no-console */
  });

  it('displays specific command details when command name is provided', () => {
    helpCommand(COMMANDS, ['install-theme']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('install-theme'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('The @edx/brand package to install.'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Installs the specific @edx/brand package'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('theme'));
    /* eslint-enable no-console */
  });

  it('displays error for unknown command', () => {
    helpCommand(COMMANDS, ['unknown']);

    expect(console.error).toHaveBeenCalledWith(/* eslint-disable-line no-console */
      chalk.red.bold('Unknown command. Usage: paragon help <command>.'),
    );
  });

  it('handles commands without parameters or options', () => {
    helpCommand(COMMANDS, ['version']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('version'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Displays the current version of Paragon CLI'));
    /* eslint-enable no-console */
  });

  it('handles parameters with choices', () => {
    helpCommand(COMMANDS, ['help']);
    expect(console.log).toHaveBeenCalledWith(/* eslint-disable-line no-console */
      expect.stringContaining(
        `${chalk.yellow.bold('command')} ${chalk.grey('[install-theme|build-tokens|replace-variables|build-scss|serve-theme-css], Default: \'\'')}`,
      ),
    );
  });

  it('handles options with choices', () => {
    helpCommand(COMMANDS, ['replace-variables']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('replace-variables'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining(
      'CLI to replace SCSS variables usages or definitions to CSS variables and vice versa in .scss files.',
    ));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        `${chalk.yellow.bold('-t, --replacementType')} ${chalk.grey('[usage|definition], Default: definition')}`,
      ),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        `${chalk.yellow.bold('-d, --direction')} ${chalk.grey('[scss-to-css|css-to-scss], Default: scss-to-css')}`,
      ),
    );
    /* eslint-enable no-console */
  });

  it('handles commands with both parameters and options with choices', () => {
    helpCommand(COMMANDS, ['build-scss']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('build-scss'));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('CLI to compile Paragon\'s core and themes SCSS into CSS.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('--corePath')} ${chalk.grey('Default: styles/scss/core/core.scss')}`),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Path to the theme\'s core SCSS file'));

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('--themesPath')} ${chalk.grey('Default: styles/css/themes')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Path to the directory that contains themes\' files'),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('themes/'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('light/'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('dark/'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('some_other_custom_theme/'));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('where index.css has imported all other CSS files in the theme\'s subdirectory'),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('The script will output'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('You can provide any amount of themes'));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('light.css, dark.css and some_other_custom_theme.css files'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('(together with maps and minified versions).'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('You can provide any amount of themes. Default to paragon\'s themes.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('--outDir')} ${chalk.grey('Default: ./dist')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Specifies directory where to out resulting CSS files.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('--defaultThemeVariants')} ${chalk.grey('Default: light')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Specifies which theme variants are marked as defaults in the generated theme-urls.json.'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Consuming applications (Open edX micro-frontends) use theme-urls.json'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Variants not listed as defaults are still built and'),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('You can provide multiple default theme variants'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('example: `--defaultThemeVariants light dark`'));
    /* eslint-enable no-console */
  });

  it('handles commands with multiple options including list choices', () => {
    helpCommand(COMMANDS, ['build-tokens']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('build-tokens'));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('CLI to build Paragon design tokens.'),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-s, --source')} ${chalk.grey('Default: \'\'')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-t, --themes')} ${chalk.grey('Default: light')}`),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Can be provided as a comma-separated list'));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-v, --verbose')} ${chalk.grey('Default: false')}`),
    );
    /* eslint-enable no-console */
  });

  it('handles replace-variables command with parameters and options', () => {
    helpCommand(COMMANDS, ['replace-variables']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('replace-variables'));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'CLI to replace SCSS variables usages or definitions to CSS variables and vice versa in .scss files.',
      ),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-p, --filePath')} ${chalk.grey('Default: \'\'')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Path to the file or directory where to replace variables.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-s, --source')} ${chalk.grey('Default: \'\'')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Type of replacement: usage or definition'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        `${chalk.yellow.bold('-t, --replacementType')} ${chalk.grey('[usage|definition], Default: definition')}`,
      ),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Type of replacement: usage or definition'));

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        `${chalk.yellow.bold('-d, --direction')} ${chalk.grey('[scss-to-css|css-to-scss], Default: scss-to-css')}`,
      ),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Map direction: css-to-scss or scss-to-css'));
    /* eslint-enable no-console */
  });

  it('handles build-tokens command with options', () => {
    helpCommand(COMMANDS, ['build-tokens']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('build-tokens'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('CLI to build Paragon design tokens.'));

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-s, --source')} ${chalk.grey('Default: \'\'')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Specify the source directory for design tokens.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-b, --build-dir')} ${chalk.grey('Default: ./build/')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Specify the build directory for the generated tokens.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('--source-tokens-only')} ${chalk.grey('Default: false')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Include only source design tokens in the build.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('--output-token-references')} ${chalk.grey('Default: true')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Include references for tokens with aliases to other tokens in the build output.'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-t, --themes')} ${chalk.grey('Default: light')}`),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Specify themes to include in the token build.'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Can be provided as a comma-separated list'));

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('-v, --verbose')} ${chalk.grey('Default: false')}`),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Enable verbose logging.'));
    /* eslint-enable no-console */
  });

  it('handles migrate-to-openedx-scope command with parameters', () => {
    helpCommand(COMMANDS, ['migrate-to-openedx-scope']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('migrate-to-openedx-scope'));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('CLI for migrate from "@edx/paragon" to "@openedx/paragon".'),
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(`${chalk.yellow.bold('path')} ${chalk.grey('Default: None')}`),
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'Path to the directory where to replace Paragon package name, default to root of the repository',
      ),
    );
    /* eslint-enable no-console */
  });

  it('handles help command with parameters', () => {
    helpCommand(COMMANDS, ['help']);
    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith(chalk.yellow.bold('Paragon Help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('help'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Displays help for available commands.'));

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        `${chalk.yellow.bold('command')} ${chalk.grey('[install-theme|build-tokens|replace-variables|build-scss|serve-theme-css], Default: \'\'')}`,
      ),
    );
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Specifies command name.'));
    /* eslint-enable no-console */
  });
});

describe('findCommandByName', () => {
  it('returns command object when command exists', () => {
    const result = findCommandByName('help', COMMANDS);
    expect(result).toEqual({ help: COMMANDS.help });
  });

  it('returns null when command does not exist', () => {
    const result = findCommandByName('unknown', COMMANDS);
    expect(result).toBeNull();
  });
});
