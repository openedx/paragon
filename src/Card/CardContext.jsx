import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const CardContext = createContext({});

function CardContextProvider({
  orientation, children,
}) {
  return (
    <CardContext.Provider value={{ orientation }}>
      {children}
    </CardContext.Provider>
  );
}

CardContextProvider.propTypes = {
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Specifies content of the component. */
  children: PropTypes.node,
};

CardContextProvider.defaultProps = {
  orientation: 'vertical',
  children: null,
};

export { CardContextProvider };
export default CardContext;
