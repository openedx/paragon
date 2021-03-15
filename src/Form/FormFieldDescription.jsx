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

const DescriptionIcon = ({ variant, customIcon }) => {
  if (customIcon) {
    return customIcon;
  }

  const variantIcon = VARIANT_ICONS[variant];
  if (variantIcon) {
    return <Icon src={variantIcon} />;
  }

  return null;
};

DescriptionIcon.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  customIcon: PropTypes.node,
};

DescriptionIcon.defaultProps = {
  variant: undefined,
  customIcon: undefined,
};

const FormFieldDescription = ({
  children, variant, icon, className, ...props
}) => {
  const { id: fieldId, getNewDescriptorId } = useFormFieldContext();
  const [id, setId] = useState();
  useEffect(() => setId(getNewDescriptorId()), [fieldId]);
  return (
    <div
      id={id}
      className={classNames(
        'pgn__field-description',
        variant && `pgn__field-description-${variant}`,
        className,
      )}
      {...props}
    >
      <DescriptionIcon customIcon={icon} variant={variant} />
      {children}
    </div>
  );
};

FormFieldDescription.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FormFieldDescription.defaultProps = {
  variant: undefined,
  icon: undefined,
  className: undefined,
};

export default FormFieldDescription;
export {
  VARIANTS,
  VARIANT_ICONS,
  DescriptionIcon,
};
