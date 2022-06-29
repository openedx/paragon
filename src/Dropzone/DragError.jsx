import React from 'react';
import PropTypes from 'prop-types';

const DragError = ({ message }) => (
  <div className="pgn__dropzone-error-wrapper">
    {message}
  </div>
);

DragError.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default DragError;
