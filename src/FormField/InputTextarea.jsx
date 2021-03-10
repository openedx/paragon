import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getInputTextareaClassName = (size, hasValue, ...others) => classNames(
  'form-control',
  {
    'has-value': hasValue,
    'form-control-lg': size === 'lg',
    'form-control-sm': size === 'sm',
  },
  ...others,
);

const InputTextarea = React.forwardRef(({ size, className, ...props }, ref) => {
  const [hasValue, setHasValue] = React.useState(!!props.value && !!props.defaultValue);
  return (
    <textarea
      ref={ref}
      className={getInputTextareaClassName(size, hasValue, className)}
      onBlur={(e) => {
        setHasValue(!!e.target.value);
        props.onBlur && props.onBlur(e);
      }}
      {...props}
    />
  );
});

export default InputTextarea;
