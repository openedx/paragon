import React from 'react';
import PropTypes from 'prop-types';

const Minus = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <rect x="6" y="11" width="12" height="2" />
  </svg>
);

Minus.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Minus.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default Minus;
