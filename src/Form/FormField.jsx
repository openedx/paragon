import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldContextProvider } from './FormFieldContext';
import { FORM_CONTROL_SIZES } from './constants';

const FormField = ({
  children,
  id,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  size,
  as,
  ...props
}) => React.createElement(as, props, (
  <FormFieldContextProvider
    id={id}
    isInvalid={isInvalid}
    isValid={isValid}
    onFocus={onFocus}
    onBlur={onBlur}
    size={size}
  >
    {children}
  </FormFieldContextProvider>
));

FormField.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};

FormField.defaultProps = {
  as: 'div',
  id: undefined,
  isInvalid: false,
  isValid: false,
  onFocus: undefined,
  onBlur: undefined,
  size: undefined,
};

export default FormField;
