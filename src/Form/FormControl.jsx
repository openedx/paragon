import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RBFormControl from 'react-bootstrap/FormControl';
import { useFormGroupContext } from './FormGroupContext';
import FormControlFeedback from './FormControlFeedback';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';

import { useHasValue, callAllHandlers } from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const FormControl = React.forwardRef(({
  className,
  controlClassName,
  leadingElement,
  trailingElement,
  floatingLabel,
  id,
  ...props
}, ref) => {
  const {
    as,
    size,
    controlId,
    isInvalid,
    isValid,
    onFocus,
    onBlur,
    placeholder,
    'aria-describedby': ariaDescribedBy,
  } = useFormGroupContext({ ...props, controlId: id });

  const [hasValue, checkInputEventValue] = useHasValue({ defaultValue: props.defaultValue, value: props.value });

  return (
    <FormControlDecoratorGroup
      size={size}
      leadingElement={leadingElement}
      trailingElement={trailingElement}
      floatingLabel={floatingLabel}
      className={className}
    >
      <RBFormControl
        {...props}
        as={as}
        ref={ref}
        size={size}
        id={controlId}
        isInvalid={isInvalid}
        isValid={isValid}
        className={classNames(controlClassName, {
          'has-value': hasValue,
        })}
        onFocus={onFocus}
        /*
          Force a whitespace string for a placeholder if none is defined so we can
          use the :placeholder-shown pseudo-class when styling floating labels
        */
        placeholder={placeholder || ' '}
        onBlur={callAllHandlers(checkInputEventValue, onBlur)}
        aria-describedby={ariaDescribedBy}
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
