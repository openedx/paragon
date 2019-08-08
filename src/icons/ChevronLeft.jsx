import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = ({ height, ...other }) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <polygon points="11.1715729 12 15.4142136 16.2426407 14 17.6568542 8.34314575 12 14 6.34314575 15.4142136 7.75735931 11.1715729 12" />
  </svg>
);

ChevronLeft.propTypes = {
  height: PropTypes.string,
};

ChevronLeft.defaultProps = {
  height: '2rem',
};

export default ChevronLeft;
