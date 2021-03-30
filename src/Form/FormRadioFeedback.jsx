import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormText from './FormText';

const FormRadioFeedback = ({ children, ...props }) => {
  const className = classNames('pgn__form-radio-text', props.className);
  return (
    <FormText {...props} className={className}>
      {children}
    </FormText>
  );
};

FormRadioFeedback.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FormRadioFeedback.defaultProps = {
  className: undefined,
};

export default FormRadioFeedback;
