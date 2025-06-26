import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import { type Theme } from '../types/types';

/**
 * Custom hook to get the current theme from settings
 * Returns the active theme from the themes array (default theme is index 0)
 */
export const useCurrentTheme = (): Theme => {
  const { settings } = useContext(SettingsContext);

  const themes = Array.isArray(settings?.themes) ? settings.themes : [];
  const activeIdx = settings?.activeThemeIndex || 0;

  // Ensure we have at least the default theme
  if (themes.length === 0) {
    return { name: 'Open edX (Default)' };
  }

  // Return the active theme, fallback to default if index is out of bounds
  const currentTheme = themes[activeIdx] || themes[0];
  return currentTheme || { name: 'Open edX (Default)' };
};
