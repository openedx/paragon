import React from 'react';
import { Input } from 'reactstrap';

import asInput from './utils/asInput';

function TextField(props) {
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
      required={props.required}
      state={props.inputState}
    />
  );
}

const TextInput = asInput(TextField);

export default TextInput;
