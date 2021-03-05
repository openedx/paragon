import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, Input, FormControl, IconButton } from '..';
import { Add } from '../../icons';

const InputBoxTrailingIconButton = ({ src, label, onClick, ...props }) => (
  <button
    type="button"
    onClick={onClick}
    className="pgn__input-box-trailing-icon-button"
    aria-label={label}
    {...props}
  >
    <Icon src={src} />
  </button>
);

const InputBoxLeadingIcon = ({ src }) => (
  <Icon
    src={src}
    className="pgn__input-box-leading-icon"
  />
);

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
  <div {...props}
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
    {leadingIcon && <InputBoxLeadingIcon src={leadingIcon} />}
    {children}
    {trailingIcon && <InputBoxTrailingIconButton src={trailingIcon} alt='Close' onClick={() => {}} variant="primary" />}
    {false && <Icon src={trailingIcon} className="pgn__input-box-trailing-icon" />}
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
  ...props
}) => (
  <div className="pgn__form-field">
    <InputBox
      label={label}
      hasValue={!!value}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
    >
      <Input
        className="pgn__input"
        onChange={onChange}
        value={value}
        type="text"
        aria-label={label}
      />
    </InputBox>
  </div>
);

export default FormField;


// <div {...props} className={classNames('pgn__form-field has-start-icon', { 'has-value': !!value })}>
// <div className=""
// <Icon src={Add} />
// <input onChange={onChange} value={value} type="text" aria-label={label} />
// <div className="pgn__form-field-rect" />
// <div className="pgn__form-field-label" aria-hidden>{label}</div>
// </div>