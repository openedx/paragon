/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

function Text(props) {
  const {
    className,
    inputRef,
    ...others
  } = props;

  return (
    <textarea
      {...others}
      className={className}
      ref={inputRef}
    />
  );
}

Text.propTypes = {
  className: PropTypes.string,
  /** specifies all of the properties that are necessary from the included `asInput` component.  Please see details for input requirements within that component.
  */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
};

Text.defaultProps = {
  className: undefined,
  inputRef: undefined,
};

const TextArea = asInput(withDeprecatedProps(Text, 'TextArea', {
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));

export default TextArea;
