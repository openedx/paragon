import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, Input, FormControl, IconButton } from '..';
import { Add } from '../../icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

const InputBoxOutline = ({ label, withLeadingIcon }) => (
  <div className="pgn__input-box-outline">
    <div className="pgn__input-box-outline-start" />
    <div className="pgn__input-box-outline-label-container">
      <div
        className={classNames('pgn__input-box-outline-label', {
          'with-leading-icon': withLeadingIcon,
        })}
        aria-hidden
      >
        {label}
      </div>
    </div>
    <div className="pgn__input-box-outline-end" />
  </div>
);

const InputBox = ({ children, hasValue, label, leadingIcon, trailingIcon, ...props }) => (
  <div
    {...props}
    className={classNames(
      'pgn__input-box',
      {
        'with-leading-icon': !!leadingIcon,
        'with-trailing-icon': !!trailingIcon,
        'has-value': hasValue,
      },
      props.className,
    )}
  >

    <InputBoxIcon position="leading">
      <Icon src={leadingIcon} />
    </InputBoxIcon>

    {children}

    <InputBoxIcon position="trailing" src={trailingIcon}>
      <IconButton icon={faTimes} alt='Close' onClick={() => {}} variant="primary" />
    </InputBoxIcon>

    <InputBoxOutline label={label} withLeadingIcon={!!leadingIcon} />
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
  ...props
}) => (
  <div className={classNames('pgn__form-field', {
    'pgn__form-field-sm': size === 'sm',
    'pgn__form-field-lg': size === 'lg',
  })}>
    <InputBox
      label={label}
      hasValue={!!value}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
    >
      <FormControl
        className="pgn__input"
        size={size}
        onChange={onChange}
        value={value}
        type="text"
        aria-label={label}
      />
    </InputBox>
  </div>
);

FormField.defaultProps = {
  size: 'lg',
}

export default FormField;


// <div {...props} className={classNames('pgn__form-field has-start-icon', { 'has-value': !!value })}>
// <div className=""
// <Icon src={Add} />
// <input onChange={onChange} value={value} type="text" aria-label={label} />
// <div className="pgn__form-field-rect" />
// <div className="pgn__form-field-label" aria-hidden>{label}</div>
// </div>