import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <polygon points="12.8284271 12 8.58578644 7.75735931 10 6.34314575 15.6568542 12 10 17.6568542 8.58578644 16.2426407 12.8284271 12" />
  </svg>
);

ChevronRight.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

ChevronRight.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default ChevronRight;
