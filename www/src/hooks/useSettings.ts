import { useState, useEffect } from 'react';
import { type ContainerSize } from '~paragon-react';
import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';
import { decodeThemesFromQueryParam, ThemeSetting } from '../utils/queryParamEncoding';

export interface Settings {
  direction?: string;
  language?: string;
  containerWidth?: ContainerSize;
  customThemes?: ThemeSetting[];
  activeCustomThemeIndex?: number;
}

export type UpdateSettingsParams =
  | string
  | Record<string, any>;

export type UpdateSettingsFunction = (
  keyOrUpdates: UpdateSettingsParams,
  value?: any
) => void;

export interface UseSettings {
  settings: Settings;
  updateSettings: UpdateSettingsFunction;
}

const defaultSettings: Settings = {
  direction: 'ltr',
  language: 'en',
  containerWidth: 'md' as ContainerSize,
  customThemes: [],
  activeCustomThemeIndex: 0,
};

export const useSettings = (): UseSettings => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings: UpdateSettingsFunction = (keyOrUpdates, value) => {
    let updates: Record<string, any>;

    if (typeof keyOrUpdates === 'string') {
      // Single key-value update
      updates = { [keyOrUpdates]: value };
    } else {
      // Multiple updates object
      updates = keyOrUpdates;
    }

    const newSettings = { ...settings, ...updates };
    setSettings(prevState => ({ ...prevState, ...updates }));
    global.localStorage.setItem('pgn__settings', JSON.stringify(newSettings));

    // Send analytics events for each update
    Object.entries(updates).forEach(([key, val]) => {
      sendUserAnalyticsEvent(SETTINGS_EVENTS.CHANGED, { setting: key, value: val });
    });
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

    if (themesParam) {
      const themeState = decodeThemesFromQueryParam(themesParam);

      return {
        customThemes: themeState.themes,
        activeCustomThemeIndex: themeState.activeIndex,
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
