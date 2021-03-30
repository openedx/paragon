import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FORM_TEXT_TYPES } from './constants';
import FormText from './FormText';

const FormControlFeedback = ({ children, ...props }) => {
  const { controlId, getNewDescriptorId } = useFormGroupContext();
  const [id, setId] = useState();
  useEffect(() => setId(getNewDescriptorId()), [controlId]);
  const className = classNames('pgn__form-control-description', props.className);
  return (
    <FormText
      {...props}
      id={id}
      className={className}
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
};

FormControlFeedback.defaultProps = {
  type: FORM_TEXT_TYPES.DEFAULT,
  icon: undefined,
  className: undefined,
  muted: false,
};

export default FormControlFeedback;

