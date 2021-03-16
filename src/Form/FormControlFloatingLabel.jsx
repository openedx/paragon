import React from 'react';
import PropTypes from 'prop-types';
import { useFormGroupContext } from './FormGroupContext';

const FormControlFloatingLabel = ({ children }) => {
  const { id: fieldId } = useFormGroupContext();
  return (
    <div className="pgn__form-control-floating-label">
      <div className="pgn__form-control-floating-label-content">
        <label
          className="pgn__form-control-floating-label-text"
          htmlFor={fieldId}
        >
          {children}
        </label>
      </div>
    </div>
  );
};

FormControlFloatingLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormControlFloatingLabel;
