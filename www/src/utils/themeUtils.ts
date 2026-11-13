import { type Theme, type ThemeConfig, type ThemeWithUrls } from '../types/types';

export const DEFAULT_THEME: ThemeConfig = {
  name: 'Open edX (Default)',
  urls: [
    'https://cdn.jsdelivr.net/npm/@openedx/brand-openedx@1/dist/core.min.css',
    'https://cdn.jsdelivr.net/npm/@openedx/brand-openedx@1/dist/light.min.css',
  ],
  isDefault: true,
};

/**
 * Built-in "Open edX Dark" theme, in alpha: not default and not yet audited for accessibility.
 *
 * The dark variant is compiled from `www/src/scss/openedx-dark-theme.scss`
 * (registered in `theme-config.js`) into `public/static/openedx-dark-theme.css`.
 * Selecting it overlays Paragon's dark design-token CSS over the page.
 */
export const DARK_DEFAULT_THEME: ThemeConfig = {
  name: 'Open edX Dark (alpha)',
  urls: ['/static/openedx-dark-theme.css'],
  isDefault: true,
};

/**
 * Built-in themes that are always present in the theme selector, in display order.
 */
export const DEFAULT_THEMES: ThemeConfig[] = [DEFAULT_THEME, DARK_DEFAULT_THEME];

const sameUrls = (a?: string[], b?: string[]) => (
  !!a && !!b && a.length === b.length && a.every((url, i) => url === b[i])
);

/**
 * Finds the built-in theme a saved or shared entry stands for. Saved settings keep `isDefault`,
 * shared links only carry name and URLs, so URLs are matched too.
 */
const findBuiltInIndex = (theme: ThemeConfig): number => {
  const byUrls = DEFAULT_THEMES.findIndex(t => sameUrls(t.urls, theme.urls));
  if (byUrls !== -1 || !theme.isDefault) {
    return byUrls;
  }
  // An older built-in (e.g. a previous default without URLs) falls back to the first one.
  return Math.max(DEFAULT_THEMES.findIndex(t => t.name === theme.name), 0);
};

/**
 * Rebuilds the theme list a shared link points into. Links carry only the custom themes, and their
 * active index counts the built-in themes the sender had before them: one in links made before the
 * dark theme (`builtInCount` missing), all of DEFAULT_THEMES in newer ones.
 */
export const themesFromLink = (
  linkThemes: ThemeConfig[] = [],
  activeIndex = 0,
  builtInCount = 1,
): { themes: ThemeConfig[], activeThemeIndex: number } => {
  const builtIns = Array.from({ length: builtInCount }, (_, i) => DEFAULT_THEMES[i] || DEFAULT_THEME);
  const customThemes = linkThemes.filter(t => findBuiltInIndex(t) === -1 && t.urls?.length > 0);
  return { themes: [...builtIns, ...customThemes], activeThemeIndex: activeIndex };
};

/**
 * Puts the built-in themes first, in order, followed by the custom ones, and moves the active
 * index along with the theme it pointed to. Saved settings and shared links store a plain index,
 * so without this a list saved before a built-in theme was added would select a different theme.
 */
export const normalizeThemes = (
  loadedThemes: ThemeConfig[] = [],
  activeIndex?: number,
): { themes: ThemeConfig[], activeIndex: number } => {
  const customThemes = loadedThemes.filter(t => findBuiltInIndex(t) === -1 && t.urls?.length > 0);
  const themes = [...DEFAULT_THEMES, ...customThemes];

  const active = activeIndex != null ? loadedThemes[activeIndex] : undefined;
  if (!active) {
    return { themes, activeIndex: 0 };
  }
  const builtIn = findBuiltInIndex(active);
  if (builtIn !== -1) {
    return { themes, activeIndex: builtIn };
  }
  const custom = customThemes.indexOf(active);
  return { themes, activeIndex: custom === -1 ? 0 : DEFAULT_THEMES.length + custom };
};

/**
 * Converts existing theme to ThemeConfig (edit mode)
 * @param theme - Existing theme to convert
 * @param customName - Optional custom name (preserves existing name if not provided)
 * @param urls - Optional CSS URLs (uses existing theme URLs if not provided)
 * @returns ThemeConfig with proper metadata
 */
export const convertTheme = (
  theme: Theme,
  customName?: string,
  urls?: string[],
): ThemeConfig => {
  const trimmedName = customName?.trim();
  const hasCustomName = !!trimmedName;

  // Preserve existing theme name if no custom name provided
  const name = trimmedName || theme.name;
  const finalUrls = urls || theme.urls || [];

  return {
    name,
    urls: finalUrls,
    metadata: {
      ...theme.metadata,
      hasCustomName: hasCustomName ? true : theme.metadata?.hasCustomName,
    },
  };
};

/**
 * Generates next available "Custom" theme name by finding the highest existing number
 * @param existingThemes - Array of existing themes
 * @returns Next available custom theme name
 */
export const generateCustomThemeName = (existingThemes: Theme[] = []): string => {
  // Find all existing "Custom" theme names
  const customThemePattern = /^Custom(\s+(\d+))?$/;
  const customThemeNames = existingThemes
    .map(theme => theme.name)
    .filter(name => customThemePattern.test(name))
    .map(name => {
      const match = name.match(customThemePattern);
      // If it's just "Custom" (no number), treat it as number 1
      // If it's "Custom X", use the number X
      return match && match[2] ? parseInt(match[2], 10) : 1;
    });

  // Find the highest number used
  const maxNumber = customThemeNames.length > 0 ? Math.max(...customThemeNames) : 0;

  // Return "Custom" for the first one, "Custom X" for subsequent ones
  return maxNumber === 0 ? 'Custom' : `Custom ${maxNumber + 1}`;
};

/**
 * Creates new theme with auto-generated name if no custom name provided (create mode)
 * @param existingThemes - Array of existing themes for name generation
 * @param customName - Optional custom name (generates auto-name if not provided)
 * @param urls - CSS URLs for the new theme
 * @returns ThemeConfig with proper metadata
 */
export const createNewTheme = (
  existingThemes: Theme[],
  customName?: string,
  urls: string[] = [],
): ThemeConfig => {
  const trimmedName = customName?.trim();
  const hasCustomName = !!trimmedName;

  // Generate auto-name if no custom name provided
  const name = trimmedName || generateCustomThemeName(existingThemes);

  return {
    name,
    urls,
    metadata: {
      hasCustomName,
    },
  };
};

/**
 * Type guard to check if theme has URLs (is a custom theme)
 * @param theme - Theme to check
 * @returns true if theme has URLs
 */
export const hasUrls = (theme: Theme): theme is ThemeWithUrls => Array.isArray(theme.urls) && theme.urls.length > 0;

/**
 * Validates if theme name is available (unique, case-insensitive)
 * @param name - Theme name to check
 * @param existingThemes - Array of existing themes
 * @param excludeTheme - Optional theme to exclude from check (for editing)
 * @returns true if name is available
 */
export const isThemeNameAvailable = (
  name: string,
  existingThemes: Theme[],
  excludeTheme?: Theme | null,
): boolean => {
  const trimmedName = name.trim();
  if (!trimmedName) { return false; }

  return !existingThemes.some(theme => {
    // Skip the theme being edited
    if (excludeTheme && theme.name === excludeTheme.name) {
      return false;
    }
    return theme.name.toLowerCase() === trimmedName.toLowerCase();
  });
};
