import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

function MenuItem({
  as,
  children,
  defaultSelected,
  iconAfter,
  iconBefore,
  ...props
}) {
  const className = classNames(props.className, 'pgn__menu-item');

  return React.createElement(
    as,
    {
      ...props,
      className,
    },
    (
      <>
        {iconBefore && <Icon className="btn-icon-before" src={iconBefore} />}
        {children}
        <span className="pgn__menu-item-content-spacer" />
        {iconAfter && <Icon className="btn-icon-after" src={iconAfter} />}
      </>
    ),
  );
}

MenuItem.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: PropTypes.bool,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Specifies the content of the ``MenuItem`` */
  children: PropTypes.node,
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

MenuItem.defaultProps = {
  defaultSelected: false,
  as: 'button',
  className: undefined,
  children: null,
  iconBefore: undefined,
  iconAfter: undefined,
};

export default MenuItem;
