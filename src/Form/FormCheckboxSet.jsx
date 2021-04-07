import React from 'react';
import PropTypes from 'prop-types';
import { useFormGroupContext } from './FormGroupContext';
import { FormCheckboxSetContextProvider } from './FormCheckboxSetContext';
import FormControlSet from './FormControlSet';

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
  const controlProps = getControlProps(props);
  return (
    <FormCheckboxSetContextProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    >
      <FormControlSet role="group" isInline={isInline} {...controlProps}>
        {children}
      </FormControlSet>
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
