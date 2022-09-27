import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormControlSet({
  as,
  className,
  isInline,
  children,
  ...props
}) {
  return React.createElement(as, {
    className: classNames(
      className,
      {
        'pgn__form-control-set': !isInline,
        'pgn__form-control-set-inline': isInline,
      },
    ),
    ...props,
  }, children);
}

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
