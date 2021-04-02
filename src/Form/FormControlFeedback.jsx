import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FORM_TEXT_TYPES } from './constants';
import FormText, { resolveTextType } from './FormText';

const FormControlFeedback = ({ children, ...props }) => {
  const { getDescriptorProps, isInvalid, isValid } = useFormGroupContext();
  const descriptorProps = getDescriptorProps(props);
  const className = classNames('pgn__form-control-description', props.className);
  const textType = props.type || resolveTextType({ isInvalid, isValid });
  return (
    <FormText
      {...descriptorProps}
      className={className}
      type={textType}
    >
      {children}
    </FormText>
  );
};

FormControlFeedback.propTypes = {
  hasIcon: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  muted: PropTypes.bool,
};

FormControlFeedback.defaultProps = {
  hasIcon: true,
  type: undefined,
  icon: undefined,
  className: undefined,
  muted: false,
};

export default FormControlFeedback;
