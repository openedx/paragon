import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const CardContext = createContext({});

function CardContextProvider({
  orientation, children, isLoading,
}) {
  return (
    <CardContext.Provider value={{ orientation, isLoading }}>
      {children}
    </CardContext.Provider>
  );
}

CardContextProvider.propTypes = {
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies content of the component. */
  children: PropTypes.node,
};

CardContextProvider.defaultProps = {
  orientation: 'vertical',
  isLoading: false,
  children: null,
};

export { CardContextProvider };
export default CardContext;
