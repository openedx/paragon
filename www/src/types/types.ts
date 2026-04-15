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
  /** The display name of the theme */
  name: string;
  /** Array of CSS URLs to load for this theme */
  urls?: string[];
  /** Whether this is the built-in default theme */
  isDefault?: boolean;
  /** Optional metadata about the theme */
  metadata?: {
    /** Indicates if the user provided a custom name for this theme */
    hasCustomName?: boolean;
  };
}

/**
 * A theme configuration with required URLs - used when themes need to be fully specified
 * This is the primary type used throughout the application for theme management
 */
export type ThemeConfig = {
  /** The display name of the theme */
  name: string;
  /** Array of CSS URLs to load for this theme (required) */
  urls: string[];
  /** Whether this is the built-in default theme */
  isDefault?: boolean;
  /** Optional metadata about the theme */
  metadata?: Theme['metadata'];
};

/**
 * A theme that guarantees URLs are present - useful for type safety when working with
 * themes that must have CSS resources
 */
export type ThemeWithUrls = Theme & { urls: string[] };

/**
 * A theme without URLs - typically the default theme
 */
export type ThemeWithoutUrls = Theme & { urls: undefined };

/**
 * Array of theme configurations - the standard type for theme collections
 */
export type ThemeConfigArray = ThemeConfig[];

/**
 * Array of themes that may or may not have URLs
 */
export type ThemeArray = Theme[];

/**
 * Theme form state interface for extensible state management
 * Used by theme form components to communicate validation and state information to parent components
 */
export interface ThemeFormState {
  /** Whether the theme form is currently valid */
  isValid: boolean;
}
