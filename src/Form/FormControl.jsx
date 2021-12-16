import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RBFormControl from 'react-bootstrap/FormControl';
import { useFormGroupContext } from './FormGroupContext';
import FormControlFeedback from './FormControlFeedback';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';

import { callAllHandlers, useHasValue } from './fieldUtils';

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
    isInvalid,
    isValid,
    getControlProps,
    ...formGroupContext
  } = useFormGroupContext();
  const size = props.size || formGroupContext.size;

  const [hasValue, checkInputEventValue] = useHasValue({
    defaultValue: props.defaultValue,
    value: props.value,
  });

  const controlProps = getControlProps({
    ...props,
    // eslint-disable-next-line react/prop-types
    onBlur: callAllHandlers(checkInputEventValue, props.onBlur),
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

const SIZE_CHOICES = ['sm', 'lg'];

FormControl.Feedback = FormControlFeedback;
FormControl.Description = FormControlFeedback;

FormControl.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies base element for the control component. */
  as: PropTypes.elementType,
  /** Specifies default value of the input component. */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Specifies current value of the input component. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Specifies id of the control component. */
  id: PropTypes.string,
  /** Specifies class name for the control component. */
  controlClassName: PropTypes.string,
  /** Specifies size for the control component. */
  size: PropTypes.oneOf(SIZE_CHOICES),
  /** Specifies leading element to display for the input component. */
  leadingElement: PropTypes.node,
  /** Specifies trailing element to display for the input component. */
  trailingElement: PropTypes.node,
  /** Specifies floating label to display for the input component. */
  floatingLabel: PropTypes.node,
  /** Specifies whether to render input as plain text. */
  plaintext: PropTypes.bool,
  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: PropTypes.bool,
  /** Specifies whether to display control in invalid state, this affects styling. */
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
