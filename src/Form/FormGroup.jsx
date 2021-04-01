import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroupContextProvider } from './FormGroupContext';
import { FORM_CONTROL_SIZES } from './constants';

const FormGroup = ({
  children,
  controlId,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  onChange,
  size,
  name,
  as,
  ...props
}) => React.createElement(as, {
  ...props,
  className: classNames('pgn__form-group', props.className),
}, (
  <FormGroupContextProvider
    controlId={controlId}
    isInvalid={isInvalid}
    isValid={isValid}
    onFocus={onFocus}
    onChange={onChange}
    onBlur={onBlur}
    size={size}
    name={name}
  >
    {children}
  </FormGroupContextProvider>
));

FormGroup.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  controlId: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
  name: PropTypes.string,
};

FormGroup.defaultProps = {
  as: 'div',
  className: undefined,
  controlId: undefined,
  isInvalid: false,
  isValid: false,
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
  size: undefined,
  name: undefined,
};

export default FormGroup;
