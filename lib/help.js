/* eslint-disable no-console */
const chalk = require('chalk');

/**
 * Displays a help message for available commands, including descriptions, parameters, and options.
 *
 * @param {Object} commands - An object containing information about available commands.
 */
function helpCommand(commands) {
  console.log(chalk.yellow.bold('Paragon Help'));
  console.log();
  console.log('Available commands:');
  console.log();

  Object.entries(commands).forEach(([command, { parameters, description, options }]) => {
    console.log(`  ${chalk.green.underline.bold(command)}`);
    if (description) {
      console.log(`      ${description}`);
    }

    if (parameters && parameters.length > 0) {
      console.log('');
      console.log(`      ${chalk.cyan('Parameters: ')}`);
      parameters.forEach(parameter => {
        console.log(`      ${chalk.yellow.bold(parameter.name)} ${chalk.dim(parameter.choices ? `(Choices: ${parameter.choices}, Default: ${parameter.defaultValue || 'None'})` : `Default: ${parameter.defaultValue}`)}`);
        if (parameter.description) {
          console.log(`          ${parameter.description}`);
        }
        console.log('');
      });
    }

    if (options && options.length > 0) {
      console.log('');
      console.log(`      ${chalk.cyan('Options: ')}`);
      options.forEach(option => {
        console.log(`      ${chalk.yellow.bold(option.name)} ${chalk.dim(option.choices ? `(Choices: ${option.choices}, Default: ${option.defaultValue || 'None'})` : `Default: ${option.defaultValue}`)}`);
        if (option.description) {
          console.log(`          ${option.description}`);
        }
        console.log('');
      });
    }
    console.log();
  });
}

module.exports = helpCommand;
