import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getInputSelectClassName = (size, hasValue, ...others) => classNames(
  'form-control',
  {
    'has-value': hasValue,
    'form-control-lg': size === 'lg',
    'form-control-sm': size === 'sm',
  },
  ...others,
);


const InputSelect = React.forwardRef(({ size, children, className, ...props }, ref) => {
  const [hasValue, setHasValue] = React.useState(!!props.value && !!props.defaultValue);
  return (
    <select
      ref={ref}
      className={getInputSelectClassName(size, hasValue, className)}
      onBlur={(e) => {
        setHasValue(!!e.target.value);
        props.onBlur && props.onBlur(e);
      }}
      {...props}
    >
      {children}
    </select>
  );
});

export default InputSelect;
