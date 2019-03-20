import React from 'react';
import PropTypes from 'prop-types';


function CssJail({ children }) {
  return (
    <div
      style={{ fontFamily: 'sans-serif' }}
      className="css-jail"
    >
      {children}
    </div>
  );
}

CssJail.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CssJail;
