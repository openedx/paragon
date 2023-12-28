const { getPackageInfo, getProjectFiles, getComponentUsagesInFiles } = require('../utils');

/**
 * Analyzes a project by retrieving package information, project files, and component usages.
 * @param {string} dir - The path to the project directory.
 * @param {Object} [options={}] - Additional options for fetching package information.
 * @returns {Object} - An object containing information about the analyzed project,
 * including package details, component usages, and Paragon version associated with each usage.
 */
function analyzeProject(dir, options = {}) {
    const packageInfo = getPackageInfo(dir, options);
    const files = getProjectFiles(dir);
    const usages = getComponentUsagesInFiles(files, dir);

    // Add Paragon version to each component usage
    Object.keys(usages).forEach(componentName => {
        usages[componentName].usages = usages[componentName].map(usage => ({
            ...usage,
            version: packageInfo.version,
        }));
    });

    return { ...packageInfo, usages };
}

module.exports = { analyzeProject };
