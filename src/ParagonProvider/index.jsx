import { ThemeProvider, useTheme, withTheme } from '@emotion/react';
import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { theme as paragonTheme } from '..';

const ParagonContext = React.createContext();

const useParagonContext = () => useContext(ParagonContext);

const ParagonProvider = ({
  children,
  theme,
  locale,
  ...props
}) => {
  const themeWithDefaults = useMemo(
    () => (theme === undefined ? paragonTheme : theme(paragonTheme)),
    [theme],
  );
  return (
    <ParagonContext.Provider value={{ locale, ...props }}>
      <ThemeProvider theme={themeWithDefaults}>
        {children}
      </ThemeProvider>
    </ParagonContext.Provider>
  );
};

ParagonProvider.propTypes = {
  locale: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.func,
  children: PropTypes.node,
};

ParagonProvider.defaultProps = {
  locale: 'en-us',
  theme: undefined,
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
