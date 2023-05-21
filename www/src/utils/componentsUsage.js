const getGithubProjectUrl = require('./getGithubProjectUrl');
const dependentProjectsAnalysis = require('../../../dependent-usage.json');

const {
  projectUsages: dependentProjectsUsages,
} = dependentProjectsAnalysis;

const componentsUsage = dependentProjectsUsages
  .reduce((accumulator, project) => {
    Object.keys(project.usages).forEach(componentName => {
      if (!accumulator[componentName]) {
        accumulator[componentName] = [];
      }
      accumulator[componentName] = accumulator[componentName].concat({
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
