const fs = require('fs');

/**
 * Attempts to extract the Paragon version for a given package directory.
 * When no package-lock.json file is found in the given directory path or when
 * no Paragon version can be retrieved, recursively traverse up the directory tree
 * until we reach the top-level projects directory. This approach is necessary in
 * order to account for potential projects that are technically monorepos containing
 * multiple packages, where dependencies are hoisted to a parent directory.
 *
 * @param {string} dir Path to directory
 * @param {object} options Optional options
 * @param {string} options.projectsDir Path to top-level projects directory
 * @returns String representing direct or peer Paragon dependency version
 */
function getDependencyVersion(dir, options = {}) {
    // package-lock.json contains the actual Paragon version
    // rather than a range in package.json.
    const packageFilename = 'package-lock.json';
    const { projectsDir } = options;

    if (dir === projectsDir) {
        // At the top-level directory containing all projects; Paragon version not found.
        return "";
    }

    const parentDir = dir.split('/').slice(0, -1).join('/');

    if (!fs.existsSync(`${dir}/${packageFilename}`)) {
        // No package-lock.json file exists, so try traversing up the tree until
        // reaching the top-level ``projectsDir``.
        return getDependencyVersion(parentDir, options);
    }

    const {
        packages,
        dependencies,
        peerDependencies
    } = JSON.parse(fs.readFileSync(`${dir}/${packageFilename}`, { encoding: 'utf-8' }));

    const getVersion = (depsObjectName, org = '@edx') => {
        switch (depsObjectName) {
            case 'packages':
                return packages && packages[`node_modules/${org}/paragon`]?.version;
            case 'dependencies':
                return dependencies && dependencies[`${org}/paragon`]?.version;
            case 'peerDependencies':
                return peerDependencies && peerDependencies[`${org}/paragon`]?.version;
            default:
                console.error(`Unexpected organization: ${org} or dependence object name: ${depsObjectName}`);
                return undefined;
        }
    };

    // first handle lockfileVersion 3 that contains all dependencies data in 'packages' key
    const packagesDependencyVersion = getVersion('packages') || getVersion('packages', '@openedx');
    const directDependencyVersion = getVersion('dependencies') || getVersion('dependencies', '@openedx');
    const peerDependencyVersion = getVersion('peerDependencies') || getVersion('peerDependencies', '@openedx');
    const resolvedVersion = packagesDependencyVersion || directDependencyVersion || peerDependencyVersion;

    if (resolvedVersion) {
        return resolvedVersion;
    }

    // No Paragon dependency exists, so try traversing up the tree until
    // reaching the top-level ``projectsDir``.
    return getDependencyVersion(parentDir, options)
}

module.exports = { getDependencyVersion };
