import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = ({ height, ...other }) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <polygon points="12 11.1715729 7.75735931 15.4142136 6.34314575 14 12 8.34314575 17.6568542 14 16.2426407 15.4142136" />
  </svg>
);

ChevronUp.propTypes = {
  height: PropTypes.string,
};

ChevronUp.defaultProps = {
  height: '2rem',
};

export default ChevronUp;
