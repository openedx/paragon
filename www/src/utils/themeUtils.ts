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
