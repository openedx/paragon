import React from 'react';
import PropTypes from 'prop-types';

const Times = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <polygon points="16.9497475 8.46446609 13.4142136 12 16.9497475 15.5355339 15.5355339 16.9497475 12 13.4142136 8.46446609 16.9497475 7.05025253 15.5355339 10.5857864 12 7.05025253 8.46446609 8.46446609 7.05025253 12 10.5857864 15.5355339 7.05025253" />
  </svg>
);

Times.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Times.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default Times;
