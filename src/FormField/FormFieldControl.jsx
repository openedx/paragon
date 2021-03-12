import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormFieldContext } from './FormFieldContext';
import { FormControl } from '..';
import { useHasValue, callAllHandlers } from './fieldUtils';

const FormFieldControl = React.forwardRef(({ className, ...props }, ref) => {
  const {
    size,
    id,
    isInvalid,
    isValid,
    onFocus,
    onBlur,
    placeholder,
    'aria-describedby': ariaDescribedBy,
  } = useFormFieldContext(props);

  const [hasValue, checkInputEventValue] = useHasValue(props.defaultValue, props.value);

  return (
    <FormControl
      {...props}
      ref={ref}
      size={size}
      id={id}
      isInvalid={isInvalid}
      isValid={isValid}
      className={classNames(className, {
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
  );
});

export default FormFieldControl;
