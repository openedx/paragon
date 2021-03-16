import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroupContextProvider } from './FormGroupContext';
import { FORM_CONTROL_SIZES } from './constants';

const FormGroup = ({
  children,
  id,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  size,
  as,
  ...props
}) => React.createElement(as, {
  ...props,
  className: classNames('pgn__form-group', props.className),
}, (
  <FormGroupContextProvider
    id={id}
    isInvalid={isInvalid}
    isValid={isValid}
    onFocus={onFocus}
    onBlur={onBlur}
    size={size}
  >
    {children}
  </FormGroupContextProvider>
));

FormGroup.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
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

FormGroup.defaultProps = {
  as: 'div',
  className: undefined,
  id: undefined,
  isInvalid: false,
  isValid: false,
  onFocus: undefined,
  onBlur: undefined,
  size: undefined,
};

export default FormGroup;
