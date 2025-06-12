const chalk = require('chalk');

const { version } = require('../../package.json');
const versionCommand = require('../version');

console.log = jest.fn(); /* eslint-disable-line no-console */

describe('versionCommand', () => {
  beforeEach(() => {
    console.log.mockClear(); /* eslint-disable-line no-console */
  });

  it('should log the correct version number', () => {
    versionCommand();

    expect(console.log).toHaveBeenCalledTimes(1); /* eslint-disable-line no-console */
    const consoleOutput = console.log.mock.calls[0][0]; /* eslint-disable-line no-console */
    expect(consoleOutput).toContain(`Paragon CLI version: ${chalk.bold(version)}`);
  });
});
