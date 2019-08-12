import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <polygon points="11.1715729 12 15.4142136 16.2426407 14 17.6568542 8.34314575 12 14 6.34314575 15.4142136 7.75735931 11.1715729 12" />
  </svg>
);

ChevronLeft.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

ChevronLeft.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default ChevronLeft;
