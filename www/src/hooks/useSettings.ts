import { useState, useEffect } from 'react';
import { type ContainerSize } from '~paragon-react';
import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';
import { ThemeSetting } from '../utils/queryParamEncoding';

export interface Settings {
  direction?: string;
  language?: string;
  containerWidth?: ContainerSize;
  customThemes?: ThemeSetting[];
  activeCustomThemeIndex?: number;
}

const defaultSettings: Settings = {
  direction: 'ltr',
  language: 'en',
  containerWidth: 'md' as ContainerSize,
  customThemes: [],
  activeCustomThemeIndex: 0,
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings = (key: string, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(prevState => ({ ...prevState, [key]: value }));
    global.localStorage.setItem('pgn__settings', JSON.stringify(newSettings));
    sendUserAnalyticsEvent(SETTINGS_EVENTS.CHANGED, { setting: key, value });
  };

  const loadSettingsFromStorage = () => {
    const storageSettings = global.localStorage.getItem('pgn__settings');
    if (storageSettings) {
      const savedSettings = JSON.parse(storageSettings);
      
      // Migrate old customBrands to customThemes if present
      if (savedSettings.customBrands && !savedSettings.customThemes) {
        savedSettings.customThemes = savedSettings.customBrands;
        delete savedSettings.customBrands;
        global.localStorage.setItem('pgn__settings', JSON.stringify(savedSettings));
      }
      
      return savedSettings;
    }
    return null;
  };

  const loadSettingsFromURL = () => {
    const url = new URL(window.location.href);
    const themesParam = url.searchParams.get('themes');
    const activeThemeParam = url.searchParams.get('activeTheme');
    
    if (themesParam) {
      const { decodeThemesFromQueryParam } = require('../utils/queryParamEncoding');
      const loadedThemes = decodeThemesFromQueryParam(themesParam);
      const loadedActiveIdx = activeThemeParam ? parseInt(activeThemeParam, 10) : 0;
      
      return {
        customThemes: loadedThemes,
        activeCustomThemeIndex: loadedActiveIdx,
      };
    }
    
    return null;
  };

  useEffect(() => {
    const urlSettings = loadSettingsFromURL();
    const storageSettings = loadSettingsFromStorage();
    
    const finalSettings = {
      ...defaultSettings,
      ...storageSettings,
      ...urlSettings,
    };
    
    setSettings(finalSettings);
    
    // Apply direction to document body
    if (finalSettings.direction) {
      document.body.setAttribute('dir', finalSettings.direction);
    }
    
    // If themes were loaded from URL, save them to localStorage
    if (urlSettings) {
      const settingsToSave = {
        ...storageSettings,
        customThemes: urlSettings.customThemes,
        activeCustomThemeIndex: urlSettings.activeCustomThemeIndex,
      };
      global.localStorage.setItem('pgn__settings', JSON.stringify(settingsToSave));
    }
  }, []);

  return {
    settings,
    updateSettings,
  };
}; 