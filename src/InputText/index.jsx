import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

function Text(props) {
  const {
    className,
    inputRef,
    type,
    ...others
  } = props;

  return (
    <input
      {...others}
      className={className}
      type={type || 'text'}
      ref={inputRef}
    />
  );
}

Text.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  type: PropTypes.string,
};

Text.defaultProps = {
  className: undefined,
  inputRef: undefined,
  type: 'text',
};

const InputText = asInput(withDeprecatedProps(Text, 'InputText', {
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));

export default InputText;
