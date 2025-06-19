import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { messages } from '~paragon-react';

import { useSettings, useCustomThemes, useDirection, useSettingsUI } from '../hooks';

export interface IDefaultValue {
  settings: {
    direction?: string,
    language?: string,
    containerWidth?: any,
    customThemes?: any[],
    activeCustomThemeIndex?: number,
  },
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
  const { settings, updateSettings } = useSettings();
  const { handleCustomThemesChange, handleCustomThemeChange, resetCustomTheme } = useCustomThemes(settings, updateSettings);
  const { handleDirectionChange } = useDirection(settings, updateSettings);
  const { showSettings, openSettings, closeSettings } = useSettingsUI();

  const handleSettingsChange = (key: string, value: any) => {
    if (key === 'direction') {
      handleDirectionChange(value);
    } else if (key === 'customThemes' || key === 'activeCustomThemeIndex') {
      handleCustomThemesChange(key, value);
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
    handleCustomThemeChange,
    resetCustomTheme,
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
