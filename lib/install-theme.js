/* eslint-disable no-console */
const inquirer = require('inquirer');
const childProcess = require('child_process');

/**
 * Prompts the user to enter the @edx/brand package they want to install.
 *
 * @returns {Promise<Object>} - A Promise that resolves to an object containing the user's input.
 */
function promptUserForTheme() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'theme',
      message: 'What @edx/brand package do you want to install?',
      default: '@edx/brand-openedx@latest',
    },
  ]);
}

/**
 * Installs a specified @edx/brand package.
 *
 * @param {string} theme - The @edx/brand package to install.
 */
function installTheme(theme) {
  const version = theme ? `npm:${theme}` : '';

  const installCommand = `npm install "@edx/brand@${version}" --no-save`;

  childProcess.execSync(installCommand, { stdio: 'inherit' });
}

/**
 * Command handler for installing an @edx/brand package.
 */
async function themeCommand() {
  // Check if the user passed a theme parameter as a command-line argument
  const userPassedThemeParameter = process.argv.length === 4;
  if (userPassedThemeParameter) {
    const providedTheme = process.argv[3];
    installTheme(providedTheme);
  } else {
    const answers = await promptUserForTheme();
    installTheme(answers.theme);
  }
}

module.exports = themeCommand;
