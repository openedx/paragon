import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import * as Components from '~paragon-react';
import * as Icons from '~paragon-icons';
import getParagonComponentsTypes from '../utils/getParagonComponentsTypes';

const InsightsContext = createContext({});

function InsightsContextProvider({ children }) {
  const [paragonTypes, setParagonTypes] = useState({});

  useEffect(() => {
    setParagonTypes(getParagonComponentsTypes(Components));
  }, []);

  const isParagonIcon = (name) => name in Icons;

  const contextValue = useMemo(() => ({
    paragonTypes,
    isParagonIcon,
  }), [paragonTypes]);

  return (
    <InsightsContext.Provider value={contextValue}>
      {children}
    </InsightsContext.Provider>
  );
}

InsightsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { InsightsContextProvider };
export default InsightsContext;
