import React from 'react';
import { Input } from 'reactstrap';

import asInput, { inputProps } from '../asInput';

function Text(props) {
  return (
    <Input
      id={props.id}
      type="text"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      aria-describedby={props.describedBy}
      onChange={props.onChange}
      onBlur={props.onBlur}
      aria-invalid={!props.isValid}
      disabled={props.disabled}
      required={props.required}
      state={props.inputState}
    />
  );
}

Text.propTypes = inputProps;

const InputText = asInput(Text);

export default InputText;
