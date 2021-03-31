import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormText, { resolveTextType } from './FormText';
import { FORM_TEXT_TYPES } from './constants';
import { useRadioGroupContext } from './FormRadioGroupContext';

const FormRadioGroupFeedback = ({ children, ...props }) => {
  const {
    isInvalid,
    isValid,
    getNewDescriptorId,
    addNewDescriptorId,
    removeDescriptorId,
  } = useRadioGroupContext();
  const [id, setId] = useState(props.id);
  useEffect(() => {
    if (props.id) {
      addNewDescriptorId(props.id);
    } else {
      setId(getNewDescriptorId());
    }
    return () => removeDescriptorId(id);
  }, []);
  const type = props.type || resolveTextType({ isInvalid, isValid });
  const className = classNames('pgn__form-radio-group-text', props.className);
  return (
    <FormText {...props} id={id} className={className} type={type}>
      {children}
    </FormText>
  );
};

FormRadioGroupFeedback.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  className: PropTypes.string,
  id: PropTypes.string,
};

FormRadioGroupFeedback.defaultProps = {
  type: undefined,
  className: undefined,
  id: undefined,
};

export default FormRadioGroupFeedback;
