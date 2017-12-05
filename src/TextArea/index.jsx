import React from 'react';
import classNames from 'classnames';

import asInput, { inputProps } from '../asInput';

function Text(props) {
  return (
    <textarea
      id={props.id}
      className={classNames(props.className)}
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
      themes={['danger']}
    />
  );
}

Text.propTypes = inputProps;

const TextArea = asInput(Text);

export default TextArea;
