const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const folderPath = 'tokens/';

const KEY_ORDERS = {
  main: ['$type', '$value', '$description', 'outputReferences', 'modify', 'source'],
};

const shouldFix = process.argv.includes('--fix');
let warningsCount = 0;
let processedFileCount = 0;

/**
 * Reorders the keys in an object based on a specified key order.
 * @param {Object} obj - The object to reorder.
 * @param {string[]} desiredKeyOrder - The desired order for the keys.
 * @returns {Object} - An object containing the reordered object and
 * a flag indicating if the key order was mismatched and mismatched keys.
 */
function reorderObjectKeys(obj, desiredKeyOrder) {
  const reorderedObject = {};
  const originalKeyList = Object.keys(obj);
  let isKeyOrderMismatched = false;
  const mismatchedKeysList = [];

  desiredKeyOrder.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      reorderedObject[key] = obj[key];
    }
  });

  originalKeyList.forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(reorderedObject, key)) {
      reorderedObject[key] = obj[key];
    }
  });

  if (JSON.stringify(originalKeyList) !== JSON.stringify(Object.keys(reorderedObject))) {
    isKeyOrderMismatched = true;
    mismatchedKeysList.push(...originalKeyList.filter((key, index) => key !== Object.keys(reorderedObject)[index]));
  }

  return { reorderedObject, isKeyOrderMismatched, mismatchedKeys: mismatchedKeysList };
}

/**
 * Recursively reorders keys in JSON data based on specified key orders for nested objects.
 * @param {*} data - The JSON data (object, array, or primitive) to process.
 * @param {string} currentPath - The path to the current data within the JSON structure.
 * @returns {Object} - An object containing the reordered data and
 * a flag indicating if any key order mismatches were found.
 */
function reorderKeysInJson(data, currentPath = '') {
  if (Array.isArray(data)) {
    return data.map((item, index) => reorderKeysInJson(item, `${currentPath}[${index}]`));
  }

  if (typeof data === 'object' && data !== null) {
    const {
      reorderedObject: reorderedData, isKeyOrderMismatched: mainMismatch, mismatchedKeys: mainMismatchedKeys,
    } = reorderObjectKeys(data, KEY_ORDERS.main);
    let hasAnyKeyOrderMismatch = mainMismatch;
    const mismatches = mainMismatch ? { [currentPath]: mainMismatchedKeys } : {};

    Object.keys(reorderedData).forEach((key) => {
      if (KEY_ORDERS.main.includes(key)) {
        reorderedData[key] = data[key];
        return;
      }

      const result = reorderKeysInJson(reorderedData[key], `${currentPath}.${key}`);
      reorderedData[key] = typeof result === 'object' && result !== null ? result.reorderedData || result : result;
      if (result.isKeyOrderMismatched) {
        Object.assign(mismatches, result.mismatches);
        hasAnyKeyOrderMismatch = true;
      }
    });

    return {
      reorderedData,
      isKeyOrderMismatched: hasAnyKeyOrderMismatch,
      mismatches,
    };
  }

  return data;
}

/**
 * Processes all JSON files in a given directory path, reordering keys in each file based on predefined key orders.
 * @param {string} directoryPath - The path of the directory containing JSON files.
 */
function processJsonFilesInDirectory(directoryPath) {
  fs.readdirSync(directoryPath).forEach((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      processJsonFilesInDirectory(filePath);
    } else if (fileStats.isFile() && path.extname(fileName) === '.json') {
      try {
        let fileContent = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileContent);

        const { reorderedData, isKeyOrderMismatched, mismatches } = reorderKeysInJson(jsonData);

        if (isKeyOrderMismatched) {
          warningsCount++;
          if (shouldFix) {
            fs.writeFileSync(filePath, JSON.stringify(reorderedData, null, 2), 'utf-8');
          } else {
            console.warn(chalk.yellow(`Warning: Key order mismatch in ${filePath}.`));
            console.warn(chalk.red('Mismatched keys by path:'));
            Object.entries(mismatches).forEach(([keyPath, keys]) => {
              console.warn(chalk.cyan(`  Path: ${keyPath.slice(1)}`));
              console.warn(chalk.magenta(`  Mismatched keys: ${keys.join(', ')}`));
              console.warn();
            });
          }
        }

        if (!fileContent.endsWith('\n')) {
          fileContent += '\n';
          fs.writeFileSync(filePath, fileContent, 'utf-8');
        }

        processedFileCount++;
      } catch (error) {
        console.error(chalk.red(`Error processing file ${filePath}:`), error);
      }
    }
  });
}

processJsonFilesInDirectory(folderPath);

let statusMessage;

if (shouldFix) {
  statusMessage = chalk.green(`Processed ${processedFileCount} files. ${warningsCount} files were updated.`);
} else if (warningsCount > 0) {
  statusMessage = chalk.yellow(`Processed ${processedFileCount} files. ${warningsCount} files have key order mismatches.`);
} else {
  statusMessage = chalk.green(`Processed ${processedFileCount} files. All files are in correct order.`);
}

console.log(statusMessage);
