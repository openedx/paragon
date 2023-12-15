// @ts-ignore
import dependentProjectsAnalysis from '../../../dependent-usage.json'; // eslint-disable-line
import getGithubProjectUrl from './getGithubProjectUrl';
import { IDependentProjectsUsages, IDependentUsage, IUsage } from '../types/types';

const {
  projectUsages: dependentProjectsUsages,
} = dependentProjectsAnalysis;

// Utility function to convert dynamic structure to expected structure
function convertToExpectedStructure(project: any): IDependentProjectsUsages {
  return {
    ...project,
    usages: Object.keys(project.usages).reduce((acc, key) => {
      acc[key] = project.usages[key];
      return acc;
    }, {} as { [key: string]: IUsage[] }),
  };
}

export default function getDependentProjectsUsages() {
  const dependentProjects: IDependentUsage[] = [];

  dependentProjectsUsages.forEach((project: any) => {
    const convertedProject = convertToExpectedStructure(project);

    dependentProjects.push({
      ...convertedProject,
      repositoryUrl: getGithubProjectUrl(project.repository),
      count: Object.values<IUsage[]>(convertedProject.usages).reduce((acc, usage) => acc + usage.length, 0),
    });
  });

  return dependentProjects;
}
