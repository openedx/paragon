import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
// @ts-ignore
import { messages } from '~paragon-react';

import { THEMES } from '../../theme-config';

export interface IDefaultValue {
  settings: {
    theme?: string,
    direction?: string,
    language?: string,
  },
  theme?: string,
  handleSettingsChange: Function,
  showSettings?: React.SyntheticEvent | React.ReactNode,
  closeSettings?: React.SyntheticEvent | React.ReactNode,
  // onThemeChange: Function,
  // direction: string,
  // onDirectionChange: Function,
  // openSettings?: Function,
  // showSettings?: React.SyntheticEvent | React.ReactNode,
  // closeSettings?: React.SyntheticEvent | React.ReactNode,
}

const defaultValue = {
  settings: {},
  handleSettingsChange: () => {},
};

export const SettingsContext = createContext<IDefaultValue>(defaultValue);

const SettingsContextProvider: React.FC = ({ children }) => {
  // gatsby does not have access to the localStorage during the build (and first render)
  // so sadly we cannot initialize theme with value from localStorage
  const [settings, setSettings] = useState({
    theme: 'openedx-theme',
    direction: 'ltr',
    language: 'en',
  });
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsChange = (key: string, value: string) => {
    if (key === 'direction') {
      document.body.setAttribute('dir', value);
    }
    setSettings(prevState => ({ ...prevState, [key]: value }));
    global.localStorage.setItem('pgn__settings', JSON.stringify({ ...settings, [key]: value }));
    global.analytics.track(`${key[0].toUpperCase() + key.slice(1)} change`, { [key]: value });
  };

  const toggleSettings = (value: React.SetStateAction<boolean>) => {
    setShowSettings(value);
    global.analytics.track('Toggle Settings', { value: value ? 'show' : 'hide' });
  };

  // this hook will be called after the first render, so we can safely access localStorage
  useEffect(() => {
    // @ts-ignore
    const savedSettings = JSON.parse(global.localStorage.getItem('pgn__settings'));
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
        {THEMES.map(themeInfo => themeInfo.stylesheet !== 'openedx-theme' && (
          <link
            key={themeInfo.stylesheet}
            href={`/static/${themeInfo.stylesheet}.css`}
            rel={`stylesheet${settings.theme === themeInfo.stylesheet ? '' : ' alternate'}`}
            type="text/css"
          />
        ))}
      </Helmet>
      <IntlProvider messages={messages[settings.language]} locale={settings.language.split('-')[0]}>
        {children}
      </IntlProvider>
    </SettingsContext.Provider>
  );
};

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsContext;
export { SettingsContextProvider };
