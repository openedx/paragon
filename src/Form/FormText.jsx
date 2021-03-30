import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';
import {
  Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled,
} from '../../icons';

const FORM_TEXT_TYPES = {
  DEFAULT: 'default',
  VALID: 'valid',
  INVALID: 'invalid',
  WARNING: 'warning',
  CRITERIA_EMPTY: 'criteria-empty',
  CRITERIA_VALID: 'criteria-valid',
  CRITERIA_INVALID: 'criteria-invalid',
};

const FORM_TEXT_ICONS = {
  [FORM_TEXT_TYPES.DEFAULT]: null,
  [FORM_TEXT_TYPES.VALID]: Check,
  [FORM_TEXT_TYPES.INVALID]: Close,
  [FORM_TEXT_TYPES.WARNING]: WarningFilled,
  [FORM_TEXT_TYPES.CRITERIA_EMPTY]: RadioButtonUnchecked,
  [FORM_TEXT_TYPES.CRITERIA_VALID]: CheckCircle,
  [FORM_TEXT_TYPES.CRITERIA_INVALID]: Cancel,
};

const resolveTextType = ({ isInvalid, isValid }) => {
  if (isValid) {
    return FORM_TEXT_TYPES.VALID;
  }
  if (isInvalid) {
    return FORM_TEXT_TYPES.INVALID;
  }
  return FORM_TEXT_TYPES.DEFAULT;
};

const FormTextIcon = ({ type, customIcon }) => {
  if (customIcon) {
    return customIcon;
  }

  const typeIcon = FORM_TEXT_ICONS[type];
  if (typeIcon) {
    return <Icon src={typeIcon} />;
  }

  return null;
};

FormTextIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  customIcon: PropTypes.node,
};

FormTextIcon.defaultProps = {
  type: undefined,
  customIcon: undefined,
};

const FormText = ({
  children, type, icon, muted, hasIcon, ...props
}) => {
  const className = classNames(
    props.className,
    'pgn__form-text',
    `pgn__form-text-${type}`,
    {
      'text-muted': muted,
    },
  );

  return (
    <div {...props} className={className}>
      {hasIcon && <FormTextIcon customIcon={icon} type={type} />}
      {children}
    </div>
  );
};

FormText.propTypes = {
  hasIcon: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  muted: PropTypes.bool,
};

FormText.defaultProps = {
  hasIcon: true,
  type: FORM_TEXT_TYPES.DEFAULT,
  icon: undefined,
  className: undefined,
  muted: false,
};

export default FormText;
export {
  FORM_TEXT_TYPES,
  FORM_TEXT_ICONS,
  FormTextIcon,
  resolveTextType,
};
