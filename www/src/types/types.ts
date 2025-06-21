export interface IInsightsContext {
  paragonTypes: {
    [key: string]: string
  },
  isParagonIcon: Function,
}

export interface IUsage {
  filePath: string,
  line: number,
  column: number,
  index: number,
}

export interface IComponentUsageData {
  componentUsageCount: number,
  folderName: string,
  name: string,
  repositoryUrl: string,
  usages: IUsage[],
  version: string,
}

export interface IDependentProjectsUsages extends Omit<IDependentUsage, 'count'> {
  version: string,
  name: string,
  repository: { type: string, url: string } | string,
  folderName: string,
}

export interface IDependentUsage {
  version?: string,
  name?: string,
  repository?: { type: string, url: string } | string,
  repositoryUrl?: string,
  count: number,
  folderName?: string,
  usages: {
    [key: string]: IUsage[],
  },
}

export interface IComponentUsage {
  name: string,
  componentUsageInProjects: IComponentUsageData[],
}

// Theme-related types
export interface Theme {
  name: string;
  urls?: string[];
}

// Utility types for when URLs are required
export type ThemeWithUrls = Theme & { urls: string[] };
export type ThemeConfig = Required<Theme>;
