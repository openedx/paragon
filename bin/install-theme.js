const inquirer = require('inquirer');
const childProcess = require('child_process');

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

function installTheme(theme) {
  const version = theme ? `npm:${theme}` : '';

  const installCommand = `npm install "@edx/brand@${version}" --no-save`;

  childProcess.execSync(installCommand, { stdio: 'inherit' });
}

async function themeCommand() {
  const answers = await promptUserForTheme();
  installTheme(answers.theme);
}

module.exports = themeCommand;
