import React, { ReactNode } from 'react';
import { useFormGroupContext } from './FormGroupContext';

interface FormControlFloatingLabelProps {
  children: ReactNode;
}

function FormControlFloatingLabel({ children }: FormControlFloatingLabelProps) {
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

export default FormControlFloatingLabel;
