const glob = require('glob');

/**
 * Retrieves an array of JavaScript and JSX source files within the specified directory.
 * @param {string} dir - The path to the project directory.
 * @returns {Array.<string>} - An array of file paths to JavaScript and JSX source files.
 */
function getProjectFiles(dir) {
  // Common project directories to ignore
  const ignore = [
    `${dir}/**/node_modules/**`,
    `${dir}/dist/**`,
    `${dir}/public/**`,
    `${dir}/coverage/**`,
    `${dir}/**/*.config.*`,
  ];

  // Gather all js and jsx source files
  return glob.sync(`${dir}/**/*.{js,jsx}`, { ignore });
}

module.exports = { getProjectFiles };
