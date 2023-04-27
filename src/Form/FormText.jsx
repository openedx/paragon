import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import {
  Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled,
} from '../../icons';

import { FORM_TEXT_TYPES } from './constants';

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

function FormTextIcon({ type, customIcon }) {
  if (customIcon) {
    return customIcon;
  }

  const typeIcon = FORM_TEXT_ICONS[type];
  if (typeIcon) {
    return <Icon src={typeIcon} />;
  }

  return null;
}

FormTextIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  customIcon: PropTypes.node,
};

FormTextIcon.defaultProps = {
  type: undefined,
  customIcon: undefined,
};

function FormText({
  children, type, icon, muted, hasIcon, ...props
}) {
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
      <div>
        {children}
      </div>
    </div>
  );
}

const FORM_TEXT_TYPE_CHOICES = [
  'default',
  'valid',
  'invalid',
  'warning',
  'criteria-empty',
  'criteria-valid',
  'criteria-invalid',
];

FormText.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: PropTypes.bool,
  /** Specifies text type, this affects styling. */
  type: PropTypes.oneOf(FORM_TEXT_TYPE_CHOICES),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: PropTypes.node,
  /** Specifies whether to show text with muted styling. */
  muted: PropTypes.bool,
};

FormText.defaultProps = {
  hasIcon: true,
  type: 'default',
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
