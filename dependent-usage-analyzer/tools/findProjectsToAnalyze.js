const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Finds projects that include Paragon as a dependency.
 * @param {string} dir - The path to the directory to search for projects.
 * @returns {Array.<string>} - An array of directory paths containing projects with Paragon as a dependency.
 */
function findProjectsToAnalyze(dir) {
  // Find all directories containing a package.json file.
  const packageJSONFiles = glob.sync(`${dir}/**/package.json`, { ignore: [`${dir}/**/node_modules/**`] });

  // If paragon isn't included in the package.json file then skip analyzing it
  const packageJSONFilesWithParagon = packageJSONFiles.filter(packageJSONFile => {
    const { dependencies, peerDependencies } = JSON.parse(fs.readFileSync(packageJSONFile, { encoding: 'utf-8' }));

    const hasDependency = (depsObject, orgs) => orgs.some(org => depsObject && depsObject[`${org}/paragon`] !== undefined);

    const hasDirectDependency = hasDependency(dependencies, ['@edx', '@openedx']);
    const hasPeerDependency = hasDependency(peerDependencies, ['@edx', '@openedx']);

    return hasDirectDependency || hasPeerDependency;
  });

  // eslint-disable-next-line no-console
  console.log(packageJSONFilesWithParagon);

  return packageJSONFilesWithParagon.map(packageJSONFile => path.dirname(packageJSONFile));
}

module.exports = { findProjectsToAnalyze };
