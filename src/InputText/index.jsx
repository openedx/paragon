import React from 'react';
import classNames from 'classnames';

import asInput, { inputProps } from '../asInput';

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
      disabled={props.disabled}
      required={props.required}
      ref={props.inputRef}
      themes={props.themes}
    />
  );
}

Text.propTypes = inputProps;

const InputText = asInput(Text);

export default InputText;
