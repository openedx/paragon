import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormText, { FORM_TEXT_TYPES, resolveTextType } from './FormText';
import { useRadioGroupContext } from './FormRadioGroupContext';

const FormRadioGroupFeedback = ({ children, ...props }) => {
  const { isInvalid, isValid } = useRadioGroupContext();
  const type = props.type || resolveTextType({ isInvalid, isValid });
  const className = classNames('pgn__form-radio-group-text', props.className);
  return (
    <FormText {...props} className={className} type={type}>
      {children}
    </FormText>
  );
};

FormRadioGroupFeedback.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  className: PropTypes.string,
};

FormRadioGroupFeedback.defaultProps = {
  type: FORM_TEXT_TYPES.DEFAULT,
  className: undefined,
};

export default FormRadioGroupFeedback;
