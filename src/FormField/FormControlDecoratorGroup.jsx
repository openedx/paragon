import React, { useContext, createContext, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useFormFieldContext } from './FormFieldContext';

// overlays
const FormControlLeadingDecorator = ({ children }) => (
  <div className="pgn__form-control-decorator pgn__form-control-decorator-leading">
    {children}
  </div>
);
const FormControlTrailingDecorator = ({ children }) => (
  <div className="pgn__form-control-decorator pgn__form-control-decorator-trailing">
    {children}
  </div>
);

const FormControlFloatingLabel = ({ children }) => {
  const { id: fieldId } = useFormFieldContext();
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

/**
  * Decorates a textual input.
  */
 const FormControlDecoratorGroup = ({
  children,
  leadingElement,
  trailingElement,
  isLabelFloating,
  floatingLabel,
  className,
  ...props
}) => {
  const { id: fieldId, size } = useFormFieldContext({ size: props.size });

  return (
    <div
      className={classNames(
        'pgn__form-control-decorator-group',
        {
          'has-prepended-node': !!leadingElement,
          'has-appended-node': !!trailingElement,
          'has-leading-element': !!leadingElement,
          'has-trailing-element': !!trailingElement,
          'has-floating-label': !!floatingLabel,
          'pgn__form-control-decorator-group-lg': size === 'lg',
          'pgn__form-control-decorator-group-sm': size === 'sm',
        },
        className,
      )}
      {...props}
    >
      {children}
      {leadingElement && <FormControlLeadingDecorator>{leadingElement}</FormControlLeadingDecorator>}
      {trailingElement && <FormControlTrailingDecorator>{trailingElement}</FormControlTrailingDecorator>}
      {floatingLabel && <FormControlFloatingLabel>{floatingLabel}</FormControlFloatingLabel>}
    </div>
  );
};

export default FormControlDecoratorGroup;
