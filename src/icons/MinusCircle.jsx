import React from 'react';
import PropTypes from 'prop-types';

const MinusCircle = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M18,11 L6,11 L6,13 L18,13 L18,11 Z" />
  </svg>
);

MinusCircle.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

MinusCircle.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default MinusCircle;
