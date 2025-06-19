import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { messages, type ContainerSize } from '~paragon-react';

import { THEMES, DEFAULT_THEME } from '../../theme-config';
import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';
import { encodeThemesToQueryParam, decodeThemesFromQueryParam, ThemeSetting } from '../utils/queryParamEncoding';

export interface IDefaultValue {
  settings: {
    theme?: string,
    direction?: string,
    language?: string,
    containerWidth?: ContainerSize,
    customThemes?: ThemeSetting[],
    activeCustomThemeIndex?: number,
  },
  theme?: string,
  handleSettingsChange: Function,
  handleCustomThemeChange: Function,
  resetCustomTheme: Function,
  showSettings?: React.SyntheticEvent | React.ReactNode,
  closeSettings?: () => void,
  openSettings?: () => void,
}

const defaultValue = {
  settings: {},
  handleSettingsChange: () => {},
  handleCustomThemeChange: () => {},
  resetCustomTheme: () => {},
};

export const SettingsContext = createContext<IDefaultValue>(defaultValue);

function SettingsContextProvider({ children }) {
  // gatsby does not have access to the localStorage during the build (and first render)
  // so sadly we cannot initialize theme with value from localStorage
  const [settings, setSettings] = useState({
    theme: DEFAULT_THEME,
    direction: 'ltr',
    language: 'en',
    containerWidth: 'md' as ContainerSize,
    customThemes: [] as ThemeSetting[],
    activeCustomThemeIndex: 0,
  });
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsChange = (key: string, value: any) => {
    if (key === 'direction') {
      document.body.setAttribute('dir', value);
    }
    if (key === 'customThemes' || key === 'activeCustomThemeIndex') {
    // Remove any previous custom CSS
    document.querySelectorAll('link[data-custom-brand]').forEach(el => el.remove());
      let themesArr: ThemeSetting[] = settings.customThemes || [];
      let activeIdx = settings.activeCustomThemeIndex || 0;
      if (key === 'customThemes') {
        themesArr = value || [];
        if (activeIdx >= themesArr.length) activeIdx = 0;
      } else if (key === 'activeCustomThemeIndex') {
        activeIdx = value;
      }
      // Inject CSS for the active theme
      if (themesArr.length > 0 && themesArr[activeIdx]) {
        themesArr[activeIdx].urls.forEach((url: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.setAttribute('data-custom-brand', 'true');
      document.head.appendChild(link);
    });
      }
      // Update query param for themes and active index
      const encoded = encodeThemesToQueryParam(themesArr);
      const url = new URL(window.location.href);
      if (themesArr.length > 0) {
        url.searchParams.set('themes', encoded);
        url.searchParams.set('activeTheme', String(activeIdx));
      } else {
        url.searchParams.delete('themes');
        url.searchParams.delete('activeTheme');
      }
      window.history.replaceState({}, '', url.toString());
      // Store only customThemes and activeCustomThemeIndex in localStorage
      const newSettings = { ...settings, customThemes: themesArr, activeCustomThemeIndex: activeIdx };
      setSettings(prevState => ({ ...prevState, customThemes: themesArr, activeCustomThemeIndex: activeIdx }));
      global.localStorage.setItem('pgn__settings', JSON.stringify(newSettings));
      sendUserAnalyticsEvent(SETTINGS_EVENTS.CHANGED, { setting: key, value });
      return;
    }
    const newSettings = { ...settings, [key]: value };
    setSettings(prevState => ({ ...prevState, [key]: value }));
    global.localStorage.setItem('pgn__settings', JSON.stringify(newSettings));
    sendUserAnalyticsEvent(SETTINGS_EVENTS.CHANGED, { setting: key, value });
  };

  const handleCustomThemeChange = (theme: ThemeSetting) => {
    // Add or replace the first custom theme and set it as active
    handleSettingsChange('customThemes', [theme]);
    handleSettingsChange('activeCustomThemeIndex', 0);
  };

  const resetCustomTheme = () => {
    handleSettingsChange('customThemes', []);
    handleSettingsChange('activeCustomThemeIndex', 0);
  };

  const toggleSettings = (value: boolean) => {
    const event = value
      ? SETTINGS_EVENTS.OPENED
      : SETTINGS_EVENTS.CLOSED;

    setShowSettings(value);
    sendUserAnalyticsEvent(event);
  };

  // this hook will be called after the first render, so we can safely access localStorage
  useEffect(() => {
    const url = new URL(window.location.href);
    const themesParam = url.searchParams.get('themes');
    const activeThemeParam = url.searchParams.get('activeTheme');
    let loadedThemes: ThemeSetting[] = [];
    let loadedActiveIdx = 0;
    let loadedSettings: any = {};
    if (themesParam) {
      loadedThemes = decodeThemesFromQueryParam(themesParam);
      loadedActiveIdx = activeThemeParam ? parseInt(activeThemeParam, 10) : 0;
    } else {
    const storageSettings = global.localStorage.getItem('pgn__settings');
      let savedSettings = storageSettings ? JSON.parse(storageSettings) : null;
      // Migrate old customBrands to customThemes if present
      if (savedSettings && savedSettings.customBrands && !savedSettings.customThemes) {
        savedSettings.customThemes = savedSettings.customBrands;
        delete savedSettings.customBrands;
        global.localStorage.setItem('pgn__settings', JSON.stringify(savedSettings));
      }
      loadedThemes = savedSettings && savedSettings.customThemes ? savedSettings.customThemes : [];
      loadedActiveIdx = savedSettings && typeof savedSettings.activeCustomThemeIndex === 'number' ? savedSettings.activeCustomThemeIndex : 0;
      loadedSettings = savedSettings || {};
    }
    setSettings(prev => ({ ...prev, customThemes: loadedThemes, activeCustomThemeIndex: loadedActiveIdx }));
    if (loadedSettings.direction) {
      document.body.setAttribute('dir', loadedSettings.direction);
    }
    if (loadedThemes.length > 0 && loadedThemes[loadedActiveIdx]) {
      loadedThemes[loadedActiveIdx].urls.forEach((url: string) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.setAttribute('data-custom-brand', 'true');
        document.head.appendChild(link);
      });
    }
    if (!global.analytics) {
      global.analytics = {};
      global.analytics.track = () => {};
    }
  }, []);

  const contextValue = {
    settings,
    showSettings,
    handleSettingsChange,
    handleCustomThemeChange,
    resetCustomTheme,
    closeSettings: () => toggleSettings(false),
    openSettings: () => toggleSettings(true),
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      <Helmet>
        {/* Open edX theme is the base and default theme which should always be included and active in the <head>.
            Other themes generally inherit from it and override its values, so if they are included after the base
            one they wil get applied to the site. This is done to avoid flickering when changing themes,
            if you simply change href of the stylesheet there is a small window of time when the previous
            theme gets unapplied and new one loaded which leaves whose site without styles.
         */}
        {THEMES.map(({ stylesheet, id }) => id !== DEFAULT_THEME && (
          <link
            key={id}
            href={`/static/${stylesheet}.css`}
            rel={`stylesheet${settings.theme === id ? '' : ' alternate'}`}
            type="text/css"
          />
        ))}
      </Helmet>
      <IntlProvider messages={messages[settings.language]} locale={settings.language.split('-')[0]}>
        {children}
      </IntlProvider>
    </SettingsContext.Provider>
  );
}

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsContext;
export { SettingsContextProvider };
