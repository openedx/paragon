import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

export interface CurrentTheme {
  name: string;
  urls?: string[];
}

/**
 * Custom hook to get the current theme from settings
 * Returns the active custom theme or defaults to 'Open edX'
 */
export const useCurrentTheme = (): CurrentTheme => {
  const { settings } = useContext(SettingsContext);
  
  const customThemes = Array.isArray(settings?.customThemes) ? settings.customThemes : [];
  const activeIdx = typeof settings?.activeCustomThemeIndex === 'number' ? settings.activeCustomThemeIndex : 0;
  const currentTheme = customThemes[activeIdx] || { name: 'Open edX' };
  
  return currentTheme;
}; 