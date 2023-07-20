#!/usr/bin/env node

const inquirer = require('inquirer');
const childProcess = require('child_process');

const themes = [
  { name: '@edx/brand-openedx', value: '' },
  { name: '@edx/brand-edx.org', value: 'npm:@edx/brand-edx.org@latest' },
];

function promptUserForTheme() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'Choose a theme to install:',
      choices: themes.map((theme) => theme.name),
    },
  ]);
}

function installTheme(theme) {
  const installCommand = `npm install "@edx/brand@${theme}" --no-save`;

  childProcess.execSync(installCommand, { stdio: 'inherit' });
}

function handleSomething() {
  console.log('Executing "paragon something" function...');
}

(async () => {
  const [command, ...args] = process.argv.slice(2);

  switch (command) {
    case 'theme':
      try {
        const answers = await promptUserForTheme();
        const selectedTheme = themes.find((theme) => theme.name === answers.theme);

        installTheme(selectedTheme.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        process.exit(1);
      }
      break;

    // Add additional cases for other commands here
    case 'something':
      handleSomething();
      break;

    default:
      console.log('Unknown command. Usage: paragon <command>');
      break;
  }
})();
