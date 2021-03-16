import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormFieldContext } from './FormFieldContext';
import { Icon } from '..';
import {
  Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled,
} from '../../icons';

const VARIANTS = {
  VALID: 'valid',
  INVALID: 'invalid',
  WARNING: 'warning',
  CRITERIA_EMPTY: 'criteria-empty',
  CRITERIA_VALID: 'criteria-valid',
  CRITERIA_INVALID: 'criteria-invalid',
};

const VARIANT_ICONS = {
  [VARIANTS.VALID]: Check,
  [VARIANTS.INVALID]: Close,
  [VARIANTS.WARNING]: WarningFilled,
  [VARIANTS.CRITERIA_EMPTY]: RadioButtonUnchecked,
  [VARIANTS.CRITERIA_VALID]: CheckCircle,
  [VARIANTS.CRITERIA_INVALID]: Cancel,
};

const DescriptionIcon = ({ type, customIcon }) => {
  if (customIcon) {
    return customIcon;
  }

  const variantIcon = VARIANT_ICONS[type];
  if (variantIcon) {
    return <Icon src={variantIcon} />;
  }

  return null;
};

DescriptionIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(VARIANTS)),
  customIcon: PropTypes.node,
};

DescriptionIcon.defaultProps = {
  type: undefined,
  customIcon: undefined,
};

const FormControlDescription = ({
  children, type, icon, className, muted, ...props
}) => {
  const { id: fieldId, getNewDescriptorId } = useFormFieldContext();
  const [id, setId] = useState();
  useEffect(() => setId(getNewDescriptorId()), [fieldId]);
  return (
    <div
      id={id}
      className={classNames(
        'pgn__field-description',
        type && `pgn__field-description-${type}`,
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
  type: PropTypes.oneOf(Object.values(VARIANTS)),
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
  VARIANTS,
  VARIANT_ICONS,
  DescriptionIcon,
};
