import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import { type ThemeSetting } from '../types/types';

export const useThemeContext = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a SettingsContextProvider');
  }

  const {
    settings,
    addTheme,
    updateTheme,
    removeTheme,
    resetThemes,
    handleSettingsChange,
  } = context;

  const themes = settings.themes || [];
  const currentThemeIndex = settings.activeThemeIndex || 0;
  const currentTheme = themes[currentThemeIndex];

  const setCurrentTheme = (index: number) => {
    handleSettingsChange('activeThemeIndex', index);
  };

  const hasCustomThemes = themes.some(theme => theme.urls && theme.urls.length > 0);

  return {
    // State
    themes,
    currentTheme,
    currentThemeIndex,
    hasCustomThemes,

    // Actions
    addTheme: addTheme as (theme: ThemeSetting) => void,
    updateTheme: updateTheme as (index: number, theme: ThemeSetting) => void,
    removeTheme: removeTheme as (index: number) => void,
    resetThemes: resetThemes as () => void,
    setCurrentTheme,
  };
};
