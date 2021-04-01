import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormControlContext } from './FormControlContext';
import { FORM_TEXT_TYPES } from './constants';
import FormText, { resolveTextType } from './FormText';

const FormControlFeedback = ({ children, ...props }) => {
  const { getDescriptorProps, isInvalid, isValid } = useFormControlContext();
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
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  muted: PropTypes.bool,
  id: PropTypes.string,
};

FormControlFeedback.defaultProps = {
  type: undefined,
  icon: undefined,
  className: undefined,
  muted: false,
  id: undefined,
};

export default FormControlFeedback;
