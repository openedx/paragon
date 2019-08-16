import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <polygon points="13 6 13 11 18 11 18 13 13 13 13 18 11 18 11 13 6 13 6 11 11 11 11 6" />
  </svg>
);

Plus.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Plus.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default Plus;
