import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = ({ height, ...other }) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <polygon points="12.8284271 12 8.58578644 7.75735931 10 6.34314575 15.6568542 12 10 17.6568542 8.58578644 16.2426407 12.8284271 12" />
  </svg>
);

ChevronRight.propTypes = {
  height: PropTypes.string,
};

ChevronRight.defaultProps = {
  height: '2rem',
};

export default ChevronRight;
