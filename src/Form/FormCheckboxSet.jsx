import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FormCheckboxSetContextProvider } from './FormCheckboxSetContext';

const FormCheckboxSet = ({
  children,
  name,
  value,
  defaultValue,
  isInline,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const { getControlProps, useSetIsControlGroupEffect } = useFormGroupContext();
  useSetIsControlGroupEffect(true);
  const className = classNames(
    'pgn__form-control-set',
    'pgn__form-checkbox-set',
    props.className,
    { 'pgn__form-checkbox-set-inline': isInline },
  );
  const controlProps = getControlProps({ ...props, className });
  return (
    <FormCheckboxSetContextProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    >
      <div
        role="group"
        className={className}
        {...controlProps}
      >
        {children}
      </div>
    </FormCheckboxSetContextProvider>
  );
};

FormCheckboxSet.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  isInline: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

FormCheckboxSet.defaultProps = {
  className: undefined,
  value: undefined,
  defaultValue: undefined,
  isInline: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

export default FormCheckboxSet;
