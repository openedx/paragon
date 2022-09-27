import React from 'react';
import PropTypes from 'prop-types';
import { useFormGroupContext } from './FormGroupContext';
import { FormRadioSetContextProvider } from './FormRadioSetContext';
import FormControlSet from './FormControlSet';

function FormRadioSet({
  children,
  name,
  value,
  defaultValue,
  isInline,
  onChange,
  onFocus,
  onBlur,
  ...props
}) {
  const { getControlProps, useSetIsControlGroupEffect } = useFormGroupContext();
  useSetIsControlGroupEffect(true);
  const controlProps = getControlProps(props);
  return (
    <FormRadioSetContextProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    >
      <FormControlSet role="radiogroup" isInline={isInline} {...controlProps}>
        {children}
      </FormControlSet>
    </FormRadioSetContextProvider>
  );
}

FormRadioSet.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  isInline: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

FormRadioSet.defaultProps = {
  className: undefined,
  value: undefined,
  defaultValue: undefined,
  isInline: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

export default FormRadioSet;
