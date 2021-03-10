import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getInputTextClassName = (size, hasValue, ...others) => classNames(
  'form-control',
  {
    'has-value': hasValue,
    'form-control-lg': size === 'lg',
    'form-control-sm': size === 'sm',
  },
  ...others,
);

const InputText = React.forwardRef(({ size, className, ...props }, ref) => {
  const [hasValue, setHasValue] = React.useState(!!props.value && !!props.defaultValue);
  return (
    <input
      ref={ref}
      className={getInputTextClassName(size, hasValue, className)}
      onBlur={(e) => {
        setHasValue(!!e.target.value);
        props.onBlur && props.onBlur(e);
      }}
      {...props}
    />
  );
});

export default InputText;
