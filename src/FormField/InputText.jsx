import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormFieldContext } from './FormFieldContext';
import { FormControl } from '..';

const getInputTextClassName = (size, ...others) => classNames(
  'form-control',
  {
    'form-control-lg': size === 'lg',
    'form-control-sm': size === 'sm',
  },
  ...others,
);

const InputText = React.forwardRef(({ size, className, ...props }, ref) => {
  const mergedContextAndProps = useFormFieldContext(props);
  // const allClassNames = getInputTextClassName(
  //   size,
  //   className,
  //   mergedContextAndProps.isInvalid,
  //   mergedContextAndProps.isValid,
  // );
  return (
    <FormControl
      ref={ref}
      size={size}
      className={className}
      {...mergedContextAndProps}
    />
  );
});

export default InputText;
