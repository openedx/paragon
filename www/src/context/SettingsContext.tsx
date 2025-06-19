import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { messages, type ContainerSize } from '~paragon-react';

import { THEMES, DEFAULT_THEME } from '../../theme-config';
import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';

export interface IDefaultValue {
  settings: {
    theme?: string,
    direction?: string,
    language?: string,
    containerWidth?: ContainerSize,
    customBrand?: null | { name: string, urls: string[] },
  },
  theme?: string,
  handleSettingsChange: Function,
  handleCustomBrandChange: Function,
  resetCustomBrand: Function,
  showSettings?: React.SyntheticEvent | React.ReactNode,
  closeSettings?: () => void,
  openSettings?: () => void,
}

const defaultValue = {
  settings: {},
  handleSettingsChange: () => {},
  handleCustomBrandChange: () => {},
  resetCustomBrand: () => {},
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
    customBrand: null as null | { name: string, urls: string[] },
  });
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsChange = (key: string, value: string) => {
    if (key === 'direction') {
      document.body.setAttribute('dir', value);
    }
    setSettings(prevState => ({ ...prevState, [key]: value }));
    global.localStorage.setItem('pgn__settings', JSON.stringify({ ...settings, [key]: value }));
    sendUserAnalyticsEvent(SETTINGS_EVENTS.CHANGED, { setting: key, value });
  };

  const handleCustomBrandChange = (brand: { name: string, urls: string[] }) => {
    setSettings(prev => ({ ...prev, customBrand: brand }));
    global.localStorage.setItem('pgn__custom_brand', JSON.stringify(brand));
    // Remove any previous custom CSS
    document.querySelectorAll('link[data-custom-brand]').forEach(el => el.remove());
    // Inject new CSS URLs
    brand.urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.setAttribute('data-custom-brand', 'true');
      document.head.appendChild(link);
    });
  };

  const resetCustomBrand = () => {
    setSettings(prev => ({ ...prev, customBrand: null }));
    global.localStorage.removeItem('pgn__custom_brand');
    document.querySelectorAll('link[data-custom-brand]').forEach(el => el.remove());
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
    const storageSettings = global.localStorage.getItem('pgn__settings');
    const savedSettings = storageSettings ? JSON.parse(storageSettings) : null;
    const storageBrand = global.localStorage.getItem('pgn__custom_brand');
    const savedBrand = storageBrand ? JSON.parse(storageBrand) : null;
    if (savedSettings) {
      setSettings(prev => ({ ...prev, ...savedSettings, customBrand: savedBrand }));
      document.body.setAttribute('dir', savedSettings.direction);
    } else if (savedBrand) {
      setSettings(prev => ({ ...prev, customBrand: savedBrand }));
    }
    if (savedBrand) {
      // Inject custom CSS on load
      savedBrand.urls.forEach(url => {
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
    handleCustomBrandChange,
    resetCustomBrand,
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
