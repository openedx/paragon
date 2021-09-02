import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';

const MenuItem = ({
  as,
  children,
  defaultSelected,
  iconAfter,
  iconBefore,
  ...props
}) => {
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
};

MenuItem.propTypes = {
  defaultSelected: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
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
