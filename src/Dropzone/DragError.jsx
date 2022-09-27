import React from 'react';
import PropTypes from 'prop-types';

function DragError({ message }) {
  return (
    <div className="pgn__dropzone-error-wrapper">
      {message}
    </div>
  );
}

DragError.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default DragError;
