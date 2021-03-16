import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RBFormControl from 'react-bootstrap/FormControl';
import { useFormGroupContext } from './FormGroupContext';
import FormControlDescription from './FormControlDescription';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';

import { useHasValue, callAllHandlers } from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const FormControl = React.forwardRef(({
  className,
  controlClassName,
  leadingElement,
  trailingElement,
  floatingLabel,
  ...props
}, ref) => {
  const {
    size,
    id,
    isInvalid,
    isValid,
    onFocus,
    onBlur,
    placeholder,
    'aria-describedby': ariaDescribedBy,
  } = useFormGroupContext(props);

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
        ref={ref}
        size={size}
        id={id}
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

FormControl.Feedback = FormControlDescription;
FormControl.Description = FormControlDescription;

FormControl.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  controlClassName: PropTypes.string,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
  leadingElement: PropTypes.node,
  trailingElement: PropTypes.node,
  floatingLabel: PropTypes.node,
};

FormControl.defaultProps = {
  className: undefined,
  controlClassName: undefined,
  defaultValue: undefined,
  value: undefined,
  size: undefined,
  leadingElement: undefined,
  trailingElement: undefined,
  floatingLabel: undefined,
};

export default FormControl;
