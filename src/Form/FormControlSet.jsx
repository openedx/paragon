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
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether the component should be displayed with inline styling. */
  isInline: PropTypes.bool,
  /** Specifies contents of the component. */
  children: PropTypes.node,
};

FormControlSet.defaultProps = {
  as: 'div',
  className: undefined,
  isInline: false,
  children: null,
};

export default FormControlSet;
