import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const defaultValue = {
  theme: 'openedx-theme',
  onThemeChange: () => {},
};

const ThemeContext = createContext(defaultValue);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('openedx-theme');

  const contextValue = {
    theme,
    onThemeChange: (e) => setTheme(e.target.value),
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <Helmet>
        <link id="theme-link" href={`/${theme}.css`} rel="stylesheet" type="text/css" />
      </Helmet>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
export { ThemeContextProvider };
