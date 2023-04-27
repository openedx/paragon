/**
 * This module contains utilities functions
 * which deal with displaying multiple themes on docs site.
 */

const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { THEMES } = require('./theme-config');

/**
 * Parses SCSS variables stylesheet into JS object of the form {variable: value}
 *
 * @async
 * @param {string} pathToVariables - path to the stylesheet, relative to the node_modules of www project
 * @returns {Promise<Object>} - object populated with stylesheet data
 */
async function parseSCSSIntoObject(pathToVariables) {
  const fileStream = fs.createReadStream(pathToVariables);
  const parsedValues = {};

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // value of a SCSS variable can span multiple lines unfortunately...
  // to cover such cases we introduce local variables to store data while
  // we iterate over lines in the stylesheet
  let currentVariable = '';
  let currentValue = '';

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    // we encountered new variable
    if (line.startsWith('$')) {
      // save stored data about prev variable to resulting object
      if (currentVariable && currentValue) {
        parsedValues[currentVariable] = currentValue;
      }
      [currentVariable, ...currentValue] = line.split(':');
      currentValue = `${currentValue.join(':')}\n`;
    } else {
      const cleanLine = line.trim();
      if (cleanLine && !cleanLine.startsWith('//')) {
        // if the line is not blank and not a comment,
        // consider it a continuation of the value of the current variable
        currentValue += `${line}\n`;
      }
    }
  }

  parsedValues[currentVariable] = currentValue;

  return parsedValues;
}

/**
 * Generates JS object that contains data about SCSS variables of each theme
 *
 * @async
 * @returns {Promise<Object>} - object populated with SCSS variables for each theme
 */
async function getThemesSCSSVariables() {
  const themeSCSSVariables = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const { id, pathToVariables } of THEMES) {
    if (pathToVariables) {
      // eslint-disable-next-line no-await-in-loop
      themeSCSSVariables[id] = await parseSCSSIntoObject(path.resolve(__dirname, '../node_modules', pathToVariables));
    } else {
      themeSCSSVariables[id] = {};
    }
  }

  return themeSCSSVariables;
}

/**
 * Generates content of a component's SCSS variables file for each theme.
 *
 * @async
 * @param {string} pathToStylesheet - full path to the stylesheet of the component
 * @param {Object} themesData - object that contains data about SCSS variables for each theme
 * @returns {Promise<{Object}>} - object with computed stylesheet for each theme
 */
async function processComponentSCSSVariables(pathToStylesheet, themesData) {
  const scssVariablesData = Object.fromEntries(THEMES.map(({ id }) => [id, '']));
  const fileStream = fs.createReadStream(pathToStylesheet);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let currentVar = '';
  let currentValue = '';

  /**
   * Computes current variable's value for each theme and saves it.
   */
  function processVariable() {
    THEMES.forEach(({ id }) => {
      if (currentVar in themesData[id]) {
        scssVariablesData[id] += `${currentVar}: ${themesData[id][currentVar]}`;
      } else {
        scssVariablesData[id] += `${currentVar}: ${currentValue}`;
      }
    });
  }

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    if (line.startsWith('$')) {
      if (currentVar && currentValue) {
        processVariable();
      }
      [currentVar, ...currentValue] = line.split(':');
      currentValue = `${currentValue.join(':')}\n`;
    } else {
      const cleanLine = line.trim();
      if (cleanLine && !cleanLine.startsWith('//')) {
        currentValue += `${line}\n`;
      }
    }
  }

  // last variable was not covered by the loop
  processVariable();

  return scssVariablesData;
}

module.exports = {
  getThemesSCSSVariables,
  processComponentSCSSVariables,
};
