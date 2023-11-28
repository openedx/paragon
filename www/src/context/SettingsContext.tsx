import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { messages } from '~paragon-react';

import { THEMES, DEFAULT_THEME } from '../../theme-config';
import { SETTINGS_EVENTS, sendUserAnalyticsEvent } from '../../segment-events';

export interface IDefaultValue {
  settings: {
    theme?: string,
    direction?: string,
    language?: string,
    containerWidth?: string,
  },
  theme?: string,
  handleSettingsChange: Function,
  showSettings?: React.SyntheticEvent | React.ReactNode,
  closeSettings?: React.SyntheticEvent | React.ReactNode,
  openSettings?: Function,
}

const defaultValue = {
  settings: {},
  handleSettingsChange: () => {},
};

export const SettingsContext = createContext<IDefaultValue>(defaultValue);

function SettingsContextProvider({ children }) {
  // gatsby does not have access to the localStorage during the build (and first render)
  // so sadly we cannot initialize theme with value from localStorage
  const [settings, setSettings] = useState({
    theme: DEFAULT_THEME,
    direction: 'ltr',
    language: 'en',
    containerWidth: 'md',
  });
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsChange = (key: string, value: string) => {
    if (key === 'direction') {
      document.body.setAttribute('dir', value);
    }
    setSettings(prevState => ({ ...prevState, [key]: value }));
    global.localStorage.setItem('pgn__settings', JSON.stringify({ ...settings, [key]: value }));
    sendUserAnalyticsEvent(SETTINGS_EVENTS.CHANGED, { [key]: value });
  };

  const toggleSettings = (value: boolean) => {
    setShowSettings(value);
    sendUserAnalyticsEvent(value ? SETTINGS_EVENTS.OPENED : SETTINGS_EVENTS.CLOSED);
  };

  // this hook will be called after the first render, so we can safely access localStorage
  useEffect(() => {
    const storageSettings = global.localStorage.getItem('pgn__settings');
    const savedSettings = storageSettings ? JSON.parse(storageSettings) : null;
    if (savedSettings) {
      setSettings(savedSettings);
      document.body.setAttribute('dir', savedSettings.direction);
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
