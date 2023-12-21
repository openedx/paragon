// @ts-ignore
import dependentProjectsAnalysis from '../../../dependent-usage.json'; // eslint-disable-line
import getGithubProjectUrl from './getGithubProjectUrl';
import { IDependentProjectsUsages, IDependentUsage, IUsage } from '../types/types';

const { projectUsages } = dependentProjectsAnalysis;
const dependentProjectsUsages = projectUsages as unknown as IDependentProjectsUsages[];

export default function getDependentProjectsUsages() {
  const dependentProjects: IDependentUsage[] = [];

  dependentProjectsUsages.forEach((project: IDependentProjectsUsages) => {
    dependentProjects.push({
      ...project,
      repositoryUrl: getGithubProjectUrl(project.repository),
      count: Object.values<IUsage[]>(project.usages).reduce((acc, usage) => acc + usage.length, 0),
    });
  });

  return dependentProjects;
}
