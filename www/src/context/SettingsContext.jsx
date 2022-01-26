import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { THEMES } from '../../theme-config';

const defaultValue = {
  theme: 'openedx-theme',
  onThemeChange: () => {},
};

const SettingsContext = createContext(defaultValue);

const SettingsContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('openedx-theme');
  const [showSettings, setShowSettings] = useState(false);

  const contextValue = {
    theme,
    onThemeChange: (e) => setTheme(e.target.value),
    showSettings,
    closeSettings: () => setShowSettings(false),
    openSettings: () => setShowSettings(true),
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
        <link
          href="/static/openedx-theme.css"
          rel="stylesheet"
          type="text/css"
        />
        {THEMES.map(themeInfo => themeInfo.stylesheet !== 'openedx-theme' && (
          <link
            key={themeInfo.stylesheet}
            href={`/static/${themeInfo.stylesheet}.css`}
            rel={`stylesheet${theme === themeInfo.stylesheet ? '' : ' alternate'}`}
            type="text/css"
          />
        ))}
      </Helmet>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsContext;
export { SettingsContextProvider };
