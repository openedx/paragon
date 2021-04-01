import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RBFormControl from 'react-bootstrap/FormControl';
import { useFormControlContext } from './FormControlContext';
import FormControlFeedback from './FormControlFeedback';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';

import { useHasValue } from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const FormControl = React.forwardRef(({
  as,
  className,
  controlClassName,
  leadingElement,
  trailingElement,
  floatingLabel,
  ...props
}, ref) => {
  const {
    size,
    isInvalid,
    isValid,
    getControlProps,
  } = useFormControlContext();

  const [hasValue, checkInputEventValue] = useHasValue({
    defaultValue: props.defaultValue,
    value: props.value,
  });

  const controlProps = getControlProps({
    ...props,
    onBlur: checkInputEventValue,
  });

  return (
    <FormControlDecoratorGroup
      size={size}
      leadingElement={leadingElement}
      trailingElement={trailingElement}
      floatingLabel={floatingLabel}
      className={className}
    >
      <RBFormControl
        as={as}
        ref={ref}
        size={size}
        isInvalid={isInvalid}
        isValid={isValid}
        className={classNames(controlClassName, {
          'has-value': hasValue,
        })}
        {...controlProps}
      />
    </FormControlDecoratorGroup>
  );
});

FormControl.Feedback = FormControlFeedback;
FormControl.Description = FormControlFeedback;

FormControl.propTypes = {
  as: PropTypes.elementType,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  id: PropTypes.string,
  controlClassName: PropTypes.string,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
  leadingElement: PropTypes.node,
  trailingElement: PropTypes.node,
  floatingLabel: PropTypes.node,
  plaintext: PropTypes.bool,
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
};

FormControl.defaultProps = {
  as: 'input',
  className: undefined,
  id: undefined,
  controlClassName: undefined,
  defaultValue: undefined,
  value: undefined,
  size: undefined,
  leadingElement: undefined,
  trailingElement: undefined,
  floatingLabel: undefined,
  plaintext: false,
  isValid: undefined,
  isInvalid: undefined,
};

export default FormControl;
