import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { messages, type ContainerSize } from '~paragon-react';

import { useSettings } from '../hooks/useSettings';
import { useCustomThemes } from '../hooks/useCustomThemes';
import { useDirection } from '../hooks/useDirection';
import { useSettingsUI } from '../hooks/useSettingsUI';

export interface IDefaultValue {
  settings: {
    direction?: string,
    language?: string,
    containerWidth?: ContainerSize,
    themes?: any[],
    activeThemeIndex?: number,
  },
  handleSettingsChange: Function,
  addTheme: Function,
  updateTheme: Function,
  removeTheme: Function,
  resetThemes: Function,
  showSettings?: React.SyntheticEvent | React.ReactNode,
  closeSettings?: () => void,
  openSettings?: () => void,
}

const defaultValue = {
  settings: {},
  handleSettingsChange: () => {},
  addTheme: () => {},
  updateTheme: () => {},
  removeTheme: () => {},
  resetThemes: () => {},
};

export const SettingsContext = createContext<IDefaultValue>(defaultValue);

function SettingsContextProvider({ children }) {
  const { settings, updateSettings } = useSettings();
  const {
    handleThemesChange,
    addTheme,
    updateTheme,
    removeTheme,
    resetThemes,
  } = useCustomThemes(settings, updateSettings);
  const { handleDirectionChange } = useDirection(settings, updateSettings);
  const { showSettings, openSettings, closeSettings } = useSettingsUI();

  const handleSettingsChange = (key: string, value: any) => {
    if (key === 'direction') {
      handleDirectionChange(value);
    } else if (key === 'themes' || key === 'activeThemeIndex') {
      handleThemesChange(key, value);
    } else {
      updateSettings(key, value);
    }
  };

  // Initialize analytics if not available
  useEffect(() => {
    if (!global.analytics) {
      global.analytics = {};
      global.analytics.track = () => {};
    }
  }, []);

  const contextValue = {
    settings,
    showSettings,
    handleSettingsChange,
    addTheme,
    updateTheme,
    removeTheme,
    resetThemes,
    closeSettings,
    openSettings,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      <IntlProvider messages={messages[settings.language || 'en']} locale={settings.language?.split('-')[0] || 'en'}>
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
