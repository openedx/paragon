/** @jsx jsx */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { jsx, useTheme } from '@emotion/react';
import { formControlSetStyle } from './style';

const FormControlSet = ({
  as,
  className,
  isInline,
  children,
  ...props
}) => {
  const style = formControlSetStyle(useTheme());
  return jsx(as, {
    className: classNames(className, 'pgn__form-control-set'),
    css: isInline ? style.inline : style.base,
    ...props,
  }, children);
};

FormControlSet.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  isInline: PropTypes.bool,
  children: PropTypes.node,
};

FormControlSet.defaultProps = {
  as: 'div',
  className: undefined,
  isInline: false,
  children: null,
};

export default FormControlSet;
