import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormControlContext } from './FormControlContext';
import { FormRadioSetContextProvider } from './FormRadioSetContext';

const FormRadioSet = ({
  children,
  name,
  value,
  defaultValue,
  isInline,
  ...props
}) => {
  const { getControlProps, setControlIsGroup } = useFormControlContext();
  setControlIsGroup(true);
  const {
    onChange,
    onBlur,
    onFocus,
    ...controlProps
  } = getControlProps(props);
  const className = classNames(
    'pgn__form-radio-group',
    props.className,
    { 'pgn__form-radio-group-inline': isInline },
  );
  return (
    <FormRadioSetContextProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    >
      <div
        role="radiogroup"
        className={className}
        {...controlProps}
      >
        {children}
      </div>
    </FormRadioSetContextProvider>
  );
};

FormRadioSet.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-describedby': PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  isInline: PropTypes.bool,
};

FormRadioSet.defaultProps = {
  className: undefined,
  'aria-describedby': undefined,
  value: undefined,
  defaultValue: undefined,
  isInline: false,
};

export default FormRadioSet;
