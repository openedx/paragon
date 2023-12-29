const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const sizeOf = require('image-size');

/**
 * Checks if a given file is an image by analyzing its dimensions.
 *
 * @param {string} fileName - The name or path of the file to check.
 * @returns {boolean} - Returns `true` if the file is determined to be an image, and `false` otherwise.
 * @throws {Error} - Throws an error if there is an issue determining the image dimensions.
 *
 * @example
 * const result = isImage('example.jpg');
 * console.log(result); // true or false
 */
function isImage(fileName) {
  try {
    const imagePath = path.join(__dirname, fileName);
    const dimensions = sizeOf(imagePath);

    return dimensions.width > 0 && dimensions.height > 0;
  } catch (error) {
    return false;
  }
}

/**
 * Processes the content of a file by replacing occurrences of '@edx/paragon' with '@openedx/paragon'.
 *
 * @param {string} filePath - The path to the file to process.
 */
function processFileContent(filePath) {
  const fileName = path.basename(filePath);
  const isInvalidFile = fileName === 'package-lock.json' || fileName === 'package.json' || isImage(fileName);

  if (isInvalidFile) {
    return;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const updatedContent = fileContent.replace(/@edx\/paragon/g, '@openedx/paragon');

  if (fileContent !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`Updated file: ${filePath}`); // eslint-disable-line no-console
  }
}

/**
 * Performs a migration from "@edx/paragon" to "@openedx/paragon" NPM package name.
 */
function migrateToOpenEdxScopeCommand() {
  const projectPath = process.argv[3];
  const stack = [projectPath];

  if (!projectPath) {
    console.error(`${chalk.red.bold('Error: Specify the path to the project.')}`); // eslint-disable-line no-console
    process.exit(1);
  }

  while (stack.length > 0) {
    const currentDir = stack.pop();
    const files = fs.readdirSync(currentDir);

    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const fileStats = fs.statSync(filePath);

      if (fileStats.isDirectory()) {
        if (file === 'node_modules') {
          return;
        }

        if (file.startsWith('.') && file !== '.' && file !== '..') {
          return;
        }

        stack.push(filePath);
      } else {
        processFileContent(filePath);
      }
    });
  }

  console.error(`${chalk.green.bold('Paragon migration to Openedx scope completed successfully.')}`); // eslint-disable-line no-console
}

module.exports = migrateToOpenEdxScopeCommand;
