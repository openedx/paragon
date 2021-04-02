import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormControlContext } from './FormControlContext';
import { FORM_CONTROL_SIZES } from './constants';

const FormLabel = ({ children, isInline, ...props }) => {
  const { size, controlIsGroup, getLabelProps } = useFormControlContext();
  const className = classNames(
    'pgn__form-label',
    {
      'pgn__form-label-inline': isInline,
      'pgn__form-label-lg': size === FORM_CONTROL_SIZES.LARGE,
      'pgn__form-label-sm': size === FORM_CONTROL_SIZES.SMALL,
    },
    props.className,
  );
  const labelProps = getLabelProps({ ...props, className });
  const componentType = controlIsGroup ? 'p' : 'label';
  return React.createElement(componentType, labelProps, children);
};

FormLabel.propTypes = {
  isInline: PropTypes.bool,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FormLabel.defaultProps = {
  isInline: false,
  size: undefined,
  className: undefined,
};

export default FormLabel;
