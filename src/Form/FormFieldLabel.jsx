import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormFieldContext } from './FormFieldContext';
import { FORM_CONTROL_SIZES } from './constants';

const FieldLabel = ({ children, isInline, ...props }) => {
  const {
    id: fieldId,
    size,
  } = useFormFieldContext({ size: props.size });
  const className = classNames(
    'pgn__field-label',
    {
      'pgn__field-label-inline': isInline,
      'pgn__field-label-lg': size === FORM_CONTROL_SIZES.LARGE,
      'pgn__field-label-sm': size === FORM_CONTROL_SIZES.SMALL,
    },
    props.className,
  );

  return (
    <label
      {...props}
      className={className}
      htmlFor={fieldId}
    >
      {children}
    </label>
  );
};

FieldLabel.propTypes = {
  isInline: PropTypes.bool,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FieldLabel.defaultProps = {
  isInline: false,
  size: undefined,
  className: undefined,
};

export default FieldLabel;
