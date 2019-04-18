import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


import asInput, { inputProps, defaultProps } from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


function Text(props) {
  const {
    className,
    describedBy,
    inputRef,
    isValid,
    type,
    // Pull these out from props so html attrs can be passed through
    // eslint-disable no-unused-vars
    validator,
    themes,
    inline,
    inputGroupPrepend,
    inputGroupAppend,
    label,
    dangerIconDescription,
    description,
    validationMessage,
    errorId,
    descriptionId,
    // eslint-enable no-unused-vars
    ...others
  } = props;

  return (
    <input
      {...others}
      className={classNames(className)}
      type={type || 'text'}
      aria-describedby={describedBy}
      aria-invalid={!isValid}
      ref={inputRef}
    />
  );
}

const textPropTypes = {
  type: PropTypes.string,
  describedBy: PropTypes.string,
  isValid: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputRef: PropTypes.func,
  readOnly: PropTypes.bool,
};

const textDefaultProps = {
  type: 'text',
  describedBy: '',
  isValid: true,
  autoComplete: 'on',
  inputRef: () => {},
  readOnly: false,
};

Text.propTypes = { ...textPropTypes, ...inputProps };
Text.defaultProps = { ...textDefaultProps, ...defaultProps };

const InputText = asInput(withDeprecatedProps(Text, 'InputText', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));

export default InputText;
