/* eslint-disable no-console */
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');

const tokensDirectory = 'tokens/';

const DESIGN_TOKEN_KEY_ORDER = [
  '$type',
  '$value',
  '$description',
  'outputReferences',
  'modify',
  'source',
];

const shouldApplyFix = process.argv.includes('--fix');

let mismatchWarningCount = 0;
let totalProcessedFileCount = 0;

/**
 * Reorders the keys in an object based on a specified key order.
 * @param {Object} object - The object to reorder.
 * @param {string[]} desiredKeyOrder - The desired order for the keys.
 * @returns {Object} - An object containing the reordered object and
 * a flag indicating if the key order was mismatched and a list of mismatched keys.
 */
function reorderKeysInObject(object, desiredKeyOrder) {
  const objectKeys = Object.keys(object);
  const objectKeySet = new Set(objectKeys);
  let isOrderMismatched = false;
  const mismatchedKeyList = [];

  let index = 0;

  const reorderedObject = desiredKeyOrder.reduce((accumulatedObject, key) => {
    if (objectKeySet.has(key)) {
      accumulatedObject[key] = object[key];
      if (key !== objectKeys[index]) {
        isOrderMismatched = true;
        mismatchedKeyList.push(objectKeys[index]);
      }
      index++;
    }
    return accumulatedObject;
  }, {});

  objectKeys.forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(reorderedObject, key)) {
      reorderedObject[key] = object[key];
      if (index < objectKeys.length && key !== objectKeys[index]) {
        isOrderMismatched = true;
        mismatchedKeyList.push(objectKeys[index]);
      }
      index++;
    }
  });

  return {
    reorderedObject,
    isOrderMismatched,
    mismatchedKeys: mismatchedKeyList,
  };
}

/**
 * Recursively reorders keys in JSON data based on a specified key order for nested objects.
 * @param {*} jsonData - The JSON data (object, array, or primitive) to process.
 * @param {string} jsonPath - The path to the current data within the JSON structure.
 * @returns {Object} - An object containing the reordered data and
 * a flag indicating if any key order mismatches were found.
 */
function recursivelyReorderKeys(jsonData, jsonPath = '') {
  if (Array.isArray(jsonData)) {
    return jsonData.map((item, index) => recursivelyReorderKeys(item, `${jsonPath}[${index}]`));
  }

  if (typeof jsonData === 'object' && jsonData !== null) {
    const {
      reorderedObject: reorderedData,
      isOrderMismatched: hasMainMismatch,
      mismatchedKeys: mainMismatchedKeys,
    } = reorderKeysInObject(jsonData, DESIGN_TOKEN_KEY_ORDER);

    let hasAnyMismatch = hasMainMismatch;
    const mismatches = hasMainMismatch ? { [jsonPath]: mainMismatchedKeys } : {};

    Object.entries(reorderedData).reduce((accumulatedMismatches, [key, value]) => {
      if (DESIGN_TOKEN_KEY_ORDER.includes(key)) {
        reorderedData[key] = value;
        return accumulatedMismatches;
      }

      const result = recursivelyReorderKeys(value, `${jsonPath}.${key}`);
      reorderedData[key] = result.reorderedData || result;

      if (result.isOrderMismatched) {
        Object.assign(accumulatedMismatches, result.mismatches);
        hasAnyMismatch = true;
      }
      return accumulatedMismatches;
    }, mismatches);

    return {
      reorderedData,
      isOrderMismatched: hasAnyMismatch,
      mismatches,
    };
  }

  return jsonData;
}

/**
 * Processes all JSON files in a given directory path,
 * reordering keys in each file based on predefined key orders.
 * @param {string} directoryPath - The path of the directory containing JSON files.
 */
async function processJsonFilesInDirectory(directoryPath) {
  try {
    const directoryEntries = await fs.readdir(directoryPath, { withFileTypes: true });

    const fileProcessingTasks = directoryEntries.map(async (entry) => {
      const entryPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        return processJsonFilesInDirectory(entryPath);
      }

      if (entry.isFile() && path.extname(entry.name) === '.json') {
        try {
          const fileContent = await fs.readFile(entryPath, 'utf-8');
          const jsonData = JSON.parse(fileContent);

          const {
            reorderedData,
            isOrderMismatched,
            mismatches,
          } = recursivelyReorderKeys(jsonData);

          if (isOrderMismatched) {
            mismatchWarningCount++;
            if (shouldApplyFix) {
              await fs.writeFile(entryPath, `${JSON.stringify(reorderedData, null, 2)}\n`, 'utf-8');
            } else {
              console.warn(chalk.yellow(`Warning: Key order mismatch in ${entryPath}.`));
              console.warn(chalk.red('Mismatched info:'));
              Object.entries(mismatches).forEach(([keyPath, keys]) => {
                console.warn(chalk.cyan(`  Path: ${keyPath.slice(1)}`));
                console.warn(chalk.magenta(`  Mismatched keys: ${keys.join(', ')}`));
                console.warn();
              });
            }
          }

          if (!fileContent.endsWith('\n')) {
            await fs.writeFile(entryPath, `${fileContent}\n`, 'utf-8');
          }

          totalProcessedFileCount++;
          return null;
        } catch (error) {
          console.error(chalk.red(`Error processing file ${entryPath}:`), error);
          return null;
        }
      }

      return null;
    });

    await Promise.all(fileProcessingTasks);
  } catch (error) {
    console.error(chalk.red(`Error reading directory ${directoryPath}:`), error);
  }
}

processJsonFilesInDirectory(tokensDirectory).then(() => {
  let statusMessage;

  if (shouldApplyFix) {
    statusMessage = chalk.green(`Processed ${totalProcessedFileCount} files. ${mismatchWarningCount} files were updated.`);
  } else if (mismatchWarningCount > 0) {
    statusMessage = chalk.yellow(`Processed ${totalProcessedFileCount} files. ${mismatchWarningCount} files have key order mismatches.`);
  } else {
    statusMessage = chalk.green(`Processed ${totalProcessedFileCount} files. All files are in correct order.`);
  }

  console.log(statusMessage);
});
