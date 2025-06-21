import { type Theme, type ThemeConfig, type ThemeWithUrls } from '../types/types';

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
 * Gets count of auto-named themes (not all custom themes)
 * @param existingThemes - Array of existing themes
 * @returns Count of auto-named themes
 */
export const getCustomThemeCount = (existingThemes: Theme[] = []): number => {
  const autoNamedThemes = existingThemes.filter(theme => !theme.metadata?.hasCustomName);
  return autoNamedThemes.length;
};

/**
 * Generates next available "Custom" theme name using metadata tracking
 * @param existingThemes - Array of existing themes
 * @returns Next available custom theme name
 */
export const generateCustomThemeName = (existingThemes: Theme[] = []): string => {
  const currentCount = getCustomThemeCount(existingThemes);
  return currentCount === 0 ? 'Custom' : `Custom ${currentCount + 1}`;
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
