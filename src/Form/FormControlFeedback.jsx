import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { Icon } from '..';
import {
  Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled,
} from '../../icons';

const FEEDBACK_TYPES = {
  VALID: 'valid',
  INVALID: 'invalid',
  WARNING: 'warning',
  CRITERIA_EMPTY: 'criteria-empty',
  CRITERIA_VALID: 'criteria-valid',
  CRITERIA_INVALID: 'criteria-invalid',
};

const FEEDBACK_ICONS = {
  [FEEDBACK_TYPES.VALID]: Check,
  [FEEDBACK_TYPES.INVALID]: Close,
  [FEEDBACK_TYPES.WARNING]: WarningFilled,
  [FEEDBACK_TYPES.CRITERIA_EMPTY]: RadioButtonUnchecked,
  [FEEDBACK_TYPES.CRITERIA_VALID]: CheckCircle,
  [FEEDBACK_TYPES.CRITERIA_INVALID]: Cancel,
};

const FeedbackIcon = ({ type, customIcon }) => {
  if (customIcon) {
    return customIcon;
  }

  const typeIcon = FEEDBACK_ICONS[type];
  if (typeIcon) {
    return <Icon src={typeIcon} />;
  }

  return null;
};

FeedbackIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(FEEDBACK_TYPES)),
  customIcon: PropTypes.node,
};

FeedbackIcon.defaultProps = {
  type: undefined,
  customIcon: undefined,
};

const FormControlFeedback = ({
  children, type, icon, className, muted, ...props
}) => {
  const { controlId, getNewDescriptorId } = useFormGroupContext();
  const [id, setId] = useState();
  useEffect(() => setId(getNewDescriptorId()), [controlId]);
  return (
    <div
      id={id}
      className={classNames(
        'pgn__form-control-description',
        type && `pgn__form-control-description-${type}`,
        className,
        {
          'text-muted': muted,
        },
      )}
      {...props}
    >
      <FeedbackIcon customIcon={icon} type={type} />
      {children}
    </div>
  );
};

FormControlFeedback.propTypes = {
  type: PropTypes.oneOf(Object.values(FEEDBACK_TYPES)),
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  muted: PropTypes.bool,
};

FormControlFeedback.defaultProps = {
  type: undefined,
  icon: undefined,
  className: undefined,
  muted: false,
};

export default FormControlFeedback;
export {
  FEEDBACK_TYPES,
  FEEDBACK_ICONS,
  FeedbackIcon,
};
