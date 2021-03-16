import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { Icon } from '..';
import {
  Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled,
} from '../../icons';

const DESCRIPTION_TYPES = {
  VALID: 'valid',
  INVALID: 'invalid',
  WARNING: 'warning',
  CRITERIA_EMPTY: 'criteria-empty',
  CRITERIA_VALID: 'criteria-valid',
  CRITERIA_INVALID: 'criteria-invalid',
};

const DESCRIPTION_TYPE_ICONS = {
  [DESCRIPTION_TYPES.VALID]: Check,
  [DESCRIPTION_TYPES.INVALID]: Close,
  [DESCRIPTION_TYPES.WARNING]: WarningFilled,
  [DESCRIPTION_TYPES.CRITERIA_EMPTY]: RadioButtonUnchecked,
  [DESCRIPTION_TYPES.CRITERIA_VALID]: CheckCircle,
  [DESCRIPTION_TYPES.CRITERIA_INVALID]: Cancel,
};

const DescriptionIcon = ({ type, customIcon }) => {
  if (customIcon) {
    return customIcon;
  }

  const typeIcon = DESCRIPTION_TYPE_ICONS[type];
  if (typeIcon) {
    return <Icon src={typeIcon} />;
  }

  return null;
};

DescriptionIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(DESCRIPTION_TYPES)),
  customIcon: PropTypes.node,
};

DescriptionIcon.defaultProps = {
  type: undefined,
  customIcon: undefined,
};

const FormControlDescription = ({
  children, type, icon, className, muted, ...props
}) => {
  const { id: fieldId, getNewDescriptorId } = useFormGroupContext();
  const [id, setId] = useState();
  useEffect(() => setId(getNewDescriptorId()), [fieldId]);
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
      <DescriptionIcon customIcon={icon} type={type} />
      {children}
    </div>
  );
};

FormControlDescription.propTypes = {
  type: PropTypes.oneOf(Object.values(DESCRIPTION_TYPES)),
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  muted: PropTypes.bool,
};

FormControlDescription.defaultProps = {
  type: undefined,
  icon: undefined,
  className: undefined,
  muted: false,
};

export default FormControlDescription;
export {
  DESCRIPTION_TYPES,
  DESCRIPTION_TYPE_ICONS,
  DescriptionIcon,
};
