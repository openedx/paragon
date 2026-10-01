import { useState, useEffect } from 'react';
import { type ContainerSize } from '~paragon-react';
import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';
import { type ThemeConfig } from '../types/types';
import { decodeThemesFromQueryParam } from '../utils/queryParamEncoding';
import { DEFAULT_THEMES } from '../utils/themeUtils';

export interface Settings {
  direction?: string;
  language?: string;
  containerWidth?: ContainerSize;
  themes?: ThemeConfig[];
  activeThemeIndex?: number;
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
  themes: DEFAULT_THEMES,
  activeThemeIndex: 0,
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

      // Migrate old customBrands to themes if present
      if (savedSettings.customBrands && !savedSettings.themes) {
        savedSettings.themes = savedSettings.customBrands;
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
        themes: themeState.themes,
        activeThemeIndex: themeState.activeIndex,
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

    // Normalize themes: filter out entries without URLs (e.g. old default themes
    // from shared links or localStorage), and ensure the built-in DEFAULT_THEMES
    // (light + dark) are always first, in order.
    const loadedThemes = Array.isArray(finalSettings.themes) ? finalSettings.themes : [];
    const customThemes = loadedThemes.filter(t => !t.isDefault && t.urls?.length > 0);
    finalSettings.themes = [...DEFAULT_THEMES, ...customThemes];

    const activeIndex = finalSettings.activeThemeIndex;
    if (activeIndex == null || activeIndex < 0 || activeIndex >= finalSettings.themes.length) {
      finalSettings.activeThemeIndex = 0;
    }

    setSettings(finalSettings);

    // Apply direction to document body
    if (finalSettings.direction) {
      document.body.setAttribute('dir', finalSettings.direction);
    }

    // If themes were loaded from URL, save normalized themes to localStorage
    if (urlSettings) {
      const settingsToSave = {
        ...storageSettings,
        themes: finalSettings.themes,
        activeThemeIndex: finalSettings.activeThemeIndex,
      };
      global.localStorage.setItem('pgn__settings', JSON.stringify(settingsToSave));
    }
  }, []);

  return {
    settings,
    updateSettings,
  };
};
