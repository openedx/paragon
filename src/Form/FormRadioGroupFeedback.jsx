import React from 'react';
import classNames from 'classnames';
import FormText, { resolveTextType } from './FormText';
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

};

FormRadioGroupFeedback.defaultProps = {

};

export default FormRadioGroupFeedback;
