import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
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

const FEEDBACK_TYPES = [
  'default',
  'valid',
  'invalid',
  'warning',
  'criteria-empty',
  'criteria-valid',
  'criteria-invalid',
];

FormControlFeedback.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: PropTypes.bool,
  /** Specifies feedback type, this affects styling. */
  type: PropTypes.oneOf(FEEDBACK_TYPES),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: PropTypes.node,
  /** Specifies whether to show feedback with muted styling. */
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
