import React, {
  createContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { messages } from '~paragon-react';

import { IntlProvider } from 'react-intl';

import { DEFAULT_THEME } from '../../theme-config';

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
    global.analytics.track(`openedx.paragon.docs.settings.${key}.changed`, { [key]: value });
  };

  const toggleSettings = (value: boolean) => {
    setShowSettings(value);
    global.analytics.track(`openedx.paragon.docs.settings.${value ? 'opened' : 'closed'}`);
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
