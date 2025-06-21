import { type Theme, type ThemeConfig, type ThemeWithUrls } from '../types/types';

// Utility functions for theme operations
export const createThemeConfig = (theme: Theme): ThemeConfig => ({
  name: theme.name,
  urls: theme.urls || [],
});

export const hasUrls = (theme: Theme): theme is ThemeWithUrls => Array.isArray(theme.urls) && theme.urls.length > 0;

export const isCustomTheme = (theme: Theme): boolean => hasUrls(theme);
