import React from 'react';
import PropTypes from 'prop-types';
import { useFormGroupContext } from './FormGroupContext';

function FormControlFloatingLabel({ children }) {
  const { controlId } = useFormGroupContext();
  return (
    <div className="pgn__form-control-floating-label">
      <div className="pgn__form-control-floating-label-content">
        <label
          className="pgn__form-control-floating-label-text"
          htmlFor={controlId}
        >
          {children}
        </label>
      </div>
    </div>
  );
}

FormControlFloatingLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormControlFloatingLabel;
