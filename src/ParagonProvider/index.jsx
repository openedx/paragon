import { ThemeProvider, useTheme, withTheme } from '@emotion/react';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const ParagonContext = React.createContext();

const useParagonContext = useContext(ParagonContext);

const ParagonProvider = ({ children, theme, locale }) => (
  <ParagonContext.Provider value={{ locale }}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </ParagonContext.Provider>
);

ParagonProvider.propTypes = {
  locale: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
  children: PropTypes.node,
};

ParagonProvider.defaultProps = {
  locale: 'en-us',
  theme: {},
  children: null,
};

export default ParagonProvider;
export {
  ParagonContext,
  useParagonContext,
  ThemeProvider,
  useTheme,
  withTheme,
};
