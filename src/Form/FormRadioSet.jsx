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
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies name for the component. */
  name: PropTypes.string.isRequired,
  /** Specifies values for the FormRadioSet. */
  value: PropTypes.string,
  /** Specifies default values. */
  defaultValue: PropTypes.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: PropTypes.bool,
  /** Specifies onChange event handler. */
  onChange: PropTypes.func,
  /** Specifies onFocus event handler. */
  onFocus: PropTypes.func,
  /** Specifies onBlur event handler. */
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
