// @ts-ignore
import dependentProjectsAnalysis from '../../../dependent-usage.json'; // eslint-disable-line
import getGithubProjectUrl from './getGithubProjectUrl';
import { IDependentUsage, IUsage } from '../types/types';

const {
  projectUsages: dependentProjectsUsages,
} = dependentProjectsAnalysis;

export default function getDependentProjectsUsages() {
  const dependentProjects: IDependentUsage[] = [];

  dependentProjectsUsages.forEach((project: any) => {
    dependentProjects.push({
      ...project,
      repositoryUrl: getGithubProjectUrl(project.repository),
      count: Object.values<IUsage[]>(project.usages).reduce((acc, usage) => acc + usage.length, 0),
    });
  });

  return dependentProjects;
}
