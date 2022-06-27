import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Components from '~paragon-react'; // eslint-disable-line
import getParagonComponentsTypes from '../utils/getParagonComponentsTypes';

const InsightsContext = createContext({});

const InsightsContextProvider = ({ children }) => {
  const [paragonTypes, setParagonTypes] = useState({});

  useEffect(() => {
    setParagonTypes(getParagonComponentsTypes(Components));
  }, []);

  const contextValue = {
    paragonTypes,
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

export default InsightsContext;
