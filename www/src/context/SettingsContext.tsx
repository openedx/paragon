import React, {
  createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { THEMES } from '../../theme-config';

export interface IDefaultValue {
  theme: string,
  onThemeChange: Function,
  direction: string,
  onDirectionChange: Function,
  openSettings?: Function,
  showSettings?: React.SyntheticEvent | React.ReactNode,
  closeSettings?: React.SyntheticEvent | React.ReactNode,
}

const defaultValue = {
  theme: 'openedx-theme',
  onThemeChange: () => {},
  direction: 'ltr',
  onDirectionChange: () => {},
};

export type HandleThemeChangeType = {
  value: React.SetStateAction<string>
};

export const SettingsContext = createContext<IDefaultValue>(defaultValue);

const SettingsContextProvider: React.FC = ({ children }) => {
  // gatsby does not have access to the localStorage during the build (and first render)
  // so sadly we cannot initialize theme with value from localStorage
  const [theme, setTheme] = useState('openedx-theme');
  const [showSettings, setShowSettings] = useState(false);
  const [direction, setDirection] = useState('ltr');

  const handleDirectionChange = (e: { target: HandleThemeChangeType }) => {
    if (typeof e.target.value === 'string') {
      document.body.setAttribute('dir', e.target.value);
    }
    setDirection(e.target.value);
    if (typeof e.target.value === 'string') {
      global.localStorage.setItem('pgn__direction', e.target.value);
    }
    global.analytics.track('Direction change', { direction: e.target.value });
  };

  const handleThemeChange = (e: { target: HandleThemeChangeType; }) => {
    setTheme(e.target.value);
    if (typeof e.target.value === 'string') {
      global.localStorage.setItem('pgn__theme', e.target.value);
    }
    global.analytics.track('Theme change', { theme: e.target.value });
  };

  const handleSettingsChange = (value: boolean) => {
    setShowSettings(value);
    global.analytics.track('Toggle Settings', { value: value ? 'show' : 'hide' });
  };

  // this hook will be called after the first render, so we can safely access localStorage
  useEffect(() => {
    const savedTheme = global.localStorage.getItem('pgn__theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    const savedDirection = global.localStorage.getItem('pgn__direction');
    if (savedDirection) {
      document.body.setAttribute('dir', savedDirection);
      setDirection(savedDirection);
    }
    if (!global.analytics) {
      global.analytics = {};
      global.analytics.track = () => {};
    }
  }, []);

  const contextValue = {
    theme,
    direction,
    showSettings,
    onThemeChange: handleThemeChange,
    onDirectionChange: handleDirectionChange,
    closeSettings: (): void => handleSettingsChange(false),
    openSettings: (): void => handleSettingsChange(true),
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
