import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <polygon points="12 11.1715729 7.75735931 15.4142136 6.34314575 14 12 8.34314575 17.6568542 14 16.2426407 15.4142136" />
  </svg>
);

ChevronUp.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

ChevronUp.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default ChevronUp;
