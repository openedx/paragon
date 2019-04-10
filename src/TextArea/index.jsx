import React from 'react';
import classNames from 'classnames';

import asInput, { inputProps } from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

function Text(props) {
  const {
    className,
    describedBy,
    inputRef,
    isValid,
    ...others
  } = props;

  return (
    <textarea
      {...others}
      className={classNames(className)}
      aria-describedby={describedBy}
      aria-invalid={!isValid}
      ref={inputRef}
      themes={['danger']}
    />
  );
}

Text.propTypes = inputProps;

const TextArea = asInput(withDeprecatedProps(Text, 'TextArea', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));

export default TextArea;
