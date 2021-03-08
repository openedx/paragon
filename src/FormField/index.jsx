import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl, ValidationFormGroup } from '..';


const InputBoxIcon = ({ position, children }) => (
  <div
    className={classNames(
      'pgn__input-box-icon',
      `pgn__input-box-icon-${position}`,
    )}
  >
    {children}
  </div>
);

InputBoxIcon.defaultProps = {
  position: 'leading',
};
InputBoxIcon.propTypes = {
  position: PropTypes.oneOf(['leading', 'trailing']),
};

const FloatingLabel = ({ children, withLeadingIcon, isFloating }) => (
  <div className={classNames('pgn__input-floating-label', {
    'with-leading-icon': withLeadingIcon,
    'is-floating': isFloating,
  })}>
    <div aria-hidden className="pgn__input-floating-label-content">
      <div className="pgn__input-floating-label-text">
        {children}
      </div>
    </div>
  </div>
);

const InputBox = ({ children, hasValue, label, leadingIcon, trailingIcon, size, ...props }) => (
  <div
    {...props}
    className={classNames(
      'pgn__input-box',
      {
        'with-leading-icon': !!leadingIcon,
        'with-trailing-icon': !!trailingIcon,
        'has-value': hasValue,
        'pgn__input-box-lg': size === 'lg',
        'pgn__input-box-sm': size === 'sm',
      },
      props.className,
    )}
  >
    <InputBoxIcon position="leading">{leadingIcon}</InputBoxIcon>
    {children}
    <InputBoxIcon position="trailing" src={trailingIcon}>{trailingIcon}</InputBoxIcon>
    <FloatingLabel isFloating={hasValue} withLeadingIcon={!!leadingIcon}>{label}</FloatingLabel>
  </div>
);

const FormField = ({
  label,
  name,
  value,
  onChange,
  trailingIcon,
  leadingIcon,
  size,
  type,
  ...props
}) => (
  <div
    className={classNames('pgn__form-field', {
      'pgn__form-field-sm': size === 'sm',
      'pgn__form-field-lg': size === 'lg',
    })}
  >
    <InputBox
      label={label}
      hasValue={!!value}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      size={size}
    >
      <FormControl
        {...props}
        size={size}
        onChange={onChange}
        as={type}
        aria-label={label}
        value={value}
        className="pgn__input"
      />
    </InputBox>
  </div>
);

FormField.defaultProps = {
  size: 'lg',
  as: 'input',
};

export default FormField;

