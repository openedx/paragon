import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = ({ height, ...other }) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <polygon points="12 12.8284271 16.2426407 8.58578644 17.6568542 10 12 15.6568542 6.34314575 10 7.75735931 8.58578644 12 12.8284271" />
  </svg>
);

ChevronDown.propTypes = {
  height: PropTypes.string,
};

ChevronDown.defaultProps = {
  height: '2rem',
};

export default ChevronDown;
