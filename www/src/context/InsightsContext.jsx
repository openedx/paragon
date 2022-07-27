import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Components from '~paragon-react'; // eslint-disable-line
import * as Icons from '~paragon-icons'; // eslint-disable-line
import getParagonComponentsTypes from '../utils/getParagonComponentsTypes';

const InsightsContext = createContext({});

const InsightsContextProvider = ({ children }) => {
  const [paragonTypes, setParagonTypes] = useState({});

  useEffect(() => {
    setParagonTypes(getParagonComponentsTypes(Components));
  }, []);

  const isParagonIcon = (name) => name in Icons;

  const contextValue = {
    paragonTypes,
    isParagonIcon,
  };

  return (
    <InsightsContext.Provider value={contextValue}>
      {children}
    </InsightsContext.Provider>
  );
};

InsightsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { InsightsContextProvider };
export default InsightsContext;
