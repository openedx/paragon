/* eslint-disable no-console */
const chalk = require('chalk');

const DESCRIPTION_PAD = 20;

/**
 * Pads a description string to align with a specified offset string.
 *
 * @param {string} description - The description to pad.
 * @param {string} offsetString - The offset string that the description should align with.
 * @returns {string} - The padded description.
 */
function padLeft(description, offsetString) {
  // Calculate the necessary padding based on the offsetString length
  const padding = ' '.repeat(Math.max(0, DESCRIPTION_PAD - offsetString.length));
  return `${padding}${description}`;
}

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
    console.log(`  ${chalk.green.bold(command)}`);
    if (description) {
      console.log(`    ${description}`);
    }

    if (parameters && parameters.length > 0) {
      console.log(`    ${chalk.cyan('Parameters: ')}`);
      parameters.forEach(parameter => {
        const requiredStatus = parameter.required ? 'Required' : 'Optional';
        const formattedDescription = padLeft(parameter.description, parameter.name);
        console.log(`      ${parameter.name}${formattedDescription} (${requiredStatus}, Default: ${parameter.defaultValue || 'None'})`);
      });
    }

    if (options && options.length > 0) {
      console.log(`    ${chalk.cyan('Options: ')}`);
      options.forEach(option => {
        const formattedDescription = padLeft(option.description, option.name);
        console.log(`      ${option.name}${formattedDescription}`);
      });
    }

    console.log();
  });
}

module.exports = helpCommand;
