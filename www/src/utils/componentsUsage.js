const getGithubProjectUrl = require('./getGithubProjectUrl');
const dependentProjectsAnalysis = require('../../../dependent-usage.json');

const {
  projectUsages: dependentProjectsUsages,
} = dependentProjectsAnalysis;

const componentsUsage = dependentProjectsUsages
  .reduce((accumulator, project) => {
    Object.keys(project.usages).forEach(componentName => {
      // The next line is necessary for the same naming of the components both in the file with the
      // repositories of use and in the data structures GraphQL.
      const newComponentName = componentName.replace(/\./g, '');
      if (!accumulator[newComponentName]) {
        accumulator[newComponentName] = [];
      }
      accumulator[newComponentName] = accumulator[newComponentName].concat({
        name: project.name,
        folderName: project.folderName,
        version: project.version,
        repositoryUrl: getGithubProjectUrl(project.repository),
        componentUsageCount: project.usages[componentName].length,
        usages: project.usages[componentName],
      });
    });
    return accumulator;
  }, {});

module.exports = componentsUsage;
