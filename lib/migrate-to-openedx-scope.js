const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const isValidFileExtension = (filename) => /(.jsx|.js|.tsx|.ts|.md|.rst|.scss)$/.test(filename.toLowerCase());

/**
 * Processes the content of a file by replacing occurrences of '@edx/paragon' with '@openedx/paragon'.
 *
 * @param {string} filePath - The path to the file to process.
 */
function processFileContent(filePath) {
  const fileName = path.basename(filePath);

  if (!isValidFileExtension(fileName)) {
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
  const projectPath = process.argv[3] || path.resolve(__dirname, '../../../../');
  const stack = [projectPath];

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
