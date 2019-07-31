import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


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
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Text.defaultProps = {
  className: undefined,
  inputRef: undefined,
};


const TextArea = asInput(withDeprecatedProps(Text, 'TextArea', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));

export default TextArea;
