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
  size,
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
    size={size}
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
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};

FormGroup.defaultProps = {
  as: 'div',
  className: undefined,
  controlId: undefined,
  isInvalid: false,
  isValid: false,
  size: undefined,
};

export default FormGroup;
