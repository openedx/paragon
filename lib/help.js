/* eslint-disable no-console */
const chalk = require('chalk');

/**
 * Finds a command based on the given name in the commands object.
 *
 * @param {Array} commandName - The name to find the command.
 * @param {Object} commands - The object containing commands to search in.
 * @returns {Object|null} - The found command or null if the command is not found.
 */
const findCommandByName = (commandName, commands) => ((commandName in commands)
  ? { [commandName]: commands[commandName] } : null);

/**
 * Displays a help message for available commands, including descriptions, parameters, and options.
 *
 * @param {Object} commands - An object containing information about available commands.
 * @param {Array} commandArgs - An array containing the command name.
 */
function helpCommand(commands, commandArgs) {
  const retrievedCommands = commandArgs.length ? findCommandByName(commandArgs, commands) : commands;
  if (!retrievedCommands) {
    console.error(chalk.red.bold('Unknown command. Usage: paragon help <command>.'));
    return;
  }

  console.log(chalk.yellow.bold('Paragon Help'));
  console.log();

  if (!commandArgs.length) {
    console.log('Available commands:');
  }

  console.log();

  Object.entries(retrievedCommands).forEach(([command, { parameters, description, options }]) => {
    console.log(`  ${chalk.green.underline.bold(command)}`);
    if (description) {
      console.log(`      ${description}`);
    }

    if (parameters && parameters.length > 0) {
      console.log('');
      console.log(`      ${chalk.bold.cyan('Parameters: ')}`);
      parameters.forEach(parameter => {
        console.log(`      ${chalk.yellow.bold(parameter.name)} ${chalk.grey(parameter.choices ? `${parameter.choices}, Default: ${parameter.defaultValue || 'None'}` : `Default: ${parameter.defaultValue || 'None'}`)}`);
        if (parameter.description) {
          console.log(`          ${parameter.description}`);
        }
        console.log('');
      });
    }

    if (options && options.length > 0) {
      console.log('');
      console.log(`      ${chalk.bold.cyan('Options: ')}`);
      options.forEach(option => {
        console.log(`      ${chalk.yellow.bold(option.name)} ${chalk.grey(option.choices ? `${option.choices}, Default: ${option.defaultValue || 'None'}` : `Default: ${option.defaultValue}`)}`);
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
