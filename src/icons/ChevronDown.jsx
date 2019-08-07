import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = ({ viewBox, height, ...other }) => (
  <div>
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox={viewBox}
      {...other}
    >
      <path
        d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"
      />
    </svg>
  </div>
);

ChevronDown.propTypes = {
  viewBox: PropTypes.string.isRequired,
  height: PropTypes.string,
};

ChevronDown.defaultProps = {
  height: '1em',
};

export default ChevronDown;
