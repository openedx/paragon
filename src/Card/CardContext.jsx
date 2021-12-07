import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const CardContext = createContext({});

const CardContextProvider = ({
  horizontal, children,
}) => (
  <CardContext.Provider value={{ horizontal }}>
    {children}
  </CardContext.Provider>
);

CardContextProvider.propTypes = {
  /** Display `horizontal` layout of the `Card` when the prop is set to `true`. */
  horizontal: PropTypes.bool,
  /** Specifies content of the component. */
  children: PropTypes.node,
};

CardContextProvider.defaultProps = {
  horizontal: false,
  children: null,
};

export { CardContextProvider };
export default CardContext;
