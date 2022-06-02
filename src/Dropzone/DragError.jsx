import React from 'react';
import PropTypes from 'prop-types';

const DragError = ({ message }) => (
  <div className="pgn__dropzone-error-wrapper">
    {message}
  </div>
);

DragError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default DragError;
