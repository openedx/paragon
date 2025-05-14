const inquirer = require('inquirer');
const childProcess = require('child_process');

const themeCommand = require('../install-theme');

jest.mock('inquirer');
jest.mock('child_process');

describe('install-theme', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.argv = ['node', 'script'];
  });

  describe('promptUserForTheme', () => {
    it('should prompt user with correct default theme', async () => {
      inquirer.prompt.mockResolvedValueOnce({ theme: '@openedx/brand-openedx@latest' });

      await themeCommand();

      expect(inquirer.prompt).toHaveBeenCalledWith([
        expect.objectContaining({
          type: 'input',
          name: 'theme',
          message: 'What @edx/brand package do you want to install?',
          default: '@openedx/brand-openedx@latest',
        }),
      ]);
    });
  });

  describe('installTheme', () => {
    it('should install theme when provided via command line', async () => {
      process.argv = ['node', 'script', 'install-theme', '@edx/custom-theme@1.0.0'];

      await themeCommand();

      expect(childProcess.execSync).toHaveBeenCalledWith(
        'npm install "@edx/brand@npm:@edx/custom-theme@1.0.0" --no-save',
        expect.any(Object),
      );
    });

    it('should install theme when provided via prompt', async () => {
      inquirer.prompt.mockResolvedValueOnce({ theme: '@edx/custom-theme@2.0.0' });

      await themeCommand();

      expect(childProcess.execSync).toHaveBeenCalledWith(
        'npm install "@edx/brand@npm:@edx/custom-theme@2.0.0" --no-save',
        expect.any(Object),
      );
    });

    it('should handle empty theme input correctly', async () => {
      inquirer.prompt.mockResolvedValueOnce({ theme: '' });

      await themeCommand();

      expect(childProcess.execSync).toHaveBeenCalledWith(
        'npm install "@edx/brand@" --no-save',
        expect.any(Object),
      );
    });
  });
});
