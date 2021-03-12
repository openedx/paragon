import React, { useContext, createContext, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useFormFieldContext } from './FormFieldContext';

// overlays
const InputLeadingDecorator = ({ children }) => (
  <div className="pgn__input-decorator pgn__input-decorator-leading">
    {children}
  </div>
);
const InputTrailingDecorator = ({ children }) => (
  <div className="pgn__input-decorator pgn__input-decorator-trailing">
    {children}
  </div>
);

const FormFieldControlFloatingLabel = ({ children }) => {
  const { id: fieldId } = useFormFieldContext();
  return (
    <div className="pgn__input-group-floating-label">
      <div className="pgn__input-group-floating-label-content">
        <label
          className="pgn__input-group-floating-label-text"
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
 const FormFieldControlDecoratorGroup = ({
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
        'pgn__input-decorator-group',
        {
          'has-prepended-node': !!leadingElement,
          'has-appended-node': !!trailingElement,
          'has-leading-element': !!leadingElement,
          'has-trailing-element': !!trailingElement,
          'has-floating-label': !!floatingLabel,
          'pgn__input-decorator-group-lg': size === 'lg',
          'pgn__input-decorator-group-sm': size === 'sm',
        },
        className,
      )}
      {...props}
    >
      {children}
      {leadingElement && <InputLeadingDecorator>{leadingElement}</InputLeadingDecorator>}
      {trailingElement && <InputTrailingDecorator>{trailingElement}</InputTrailingDecorator>}
      {floatingLabel && <FormFieldControlFloatingLabel>{floatingLabel}</FormFieldControlFloatingLabel>}
    </div>
  );
};

export default FormFieldControlDecoratorGroup;
