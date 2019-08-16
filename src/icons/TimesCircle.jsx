import React from 'react';
import PropTypes from 'prop-types';

const TimesCircle = ({ height, width, ...other }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    {...other}
  >
    <path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M15.5355339,7.05025253 L12,10.5857864 L8.46446609,7.05025253 L7.05025253,8.46446609 L10.5857864,12 L7.05025253,15.5355339 L8.46446609,16.9497475 L12,13.4142136 L15.5355339,16.9497475 L16.9497475,15.5355339 L13.4142136,12 L16.9497475,8.46446609 L15.5355339,7.05025253 Z" />
  </svg>
);

TimesCircle.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

TimesCircle.defaultProps = {
  height: '1.5rem',
  width: '1.5rem',
};

export default TimesCircle;
