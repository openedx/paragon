import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <polygon points="12 12.8284271 16.2426407 8.58578644 17.6568542 10 12 15.6568542 6.34314575 10 7.75735931 8.58578644 12 12.8284271" />
  </svg>
);

ChevronDown.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

ChevronDown.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default ChevronDown;
