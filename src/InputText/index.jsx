import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


import asInput, { inputProps, defaultProps } from '../asInput';

function Text(props) {
  return (
    <input
      id={props.id}
      className={classNames(props.className)}
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      aria-describedby={props.describedBy}
      onChange={props.onChange}
      onBlur={props.onBlur}
      aria-invalid={!props.isValid}
      autoComplete={props.autoComplete}
      disabled={props.disabled}
      required={props.required}
      ref={props.inputRef}
      themes={props.themes}
    />
  );
}

const textPropTypes = {
  type: PropTypes.string,
  describedBy: PropTypes.string,
  isValid: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputRef: PropTypes.func,
};

const textDefaultProps = {
  type: 'text',
  describedBy: '',
  isValid: true,
  autoComplete: 'on',
  inputRef: () => {},
};

Text.propTypes = { ...textPropTypes, ...inputProps };
Text.defaultProps = { ...textDefaultProps, ...defaultProps };

const InputText = asInput(Text);

export default InputText;
