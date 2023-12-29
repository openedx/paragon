const fs = require('fs');
const { getDependencyVersion } = require('./getDependencyVersion');

/**
 * Retrieves package information from the package.json file in the specified directory.
 * @param {string} dir - The path to the project directory.
 * @param {Object} [options={}] - Additional options for fetching dependency version.
 * @returns {Object} - An object containing package information, including version, name, repository, and folder name.
 */
function getPackageInfo(dir, options = {}) {
  const version = getDependencyVersion(dir, options);

  try {
    const { name, repository } = JSON.parse(fs.readFileSync(`${dir}/package.json`, { encoding: 'utf-8' }));

    return {
      version,
      name,
      repository,
      folderName: dir.split('/').pop(),
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Unable to read package.json in ', dir);
    return {};
  }
}

module.exports = { getPackageInfo };
