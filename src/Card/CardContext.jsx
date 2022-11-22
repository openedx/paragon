import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const CardContext = createContext({});

function CardContextProvider({
  orientation,
  children,
  isLoading,
  variant,
}) {
  return (
    <CardContext.Provider value={{ orientation, isLoading, variant }}>
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
  /** Specifies `Card` style variant */
  variant: PropTypes.oneOf(['light', 'dark', 'muted']),
};

CardContextProvider.defaultProps = {
  orientation: 'vertical',
  isLoading: false,
  children: null,
  variant: 'light',
};

export { CardContextProvider };
export default CardContext;
