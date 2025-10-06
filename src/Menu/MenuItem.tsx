import React, {
  ReactElement, ReactNode, ElementType, createElement, ComponentType,
} from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

interface MenuItemProps {
  /** Specifies that this `MenuItem` is selected inside the `SelectMenu` */
  defaultSelected?: boolean;
  /** Specifies class name to append to the base element */
  className?: string;
  /** Specifies the content of the `MenuItem` */
  children: ReactNode;
  /** Specifies the base element */
  as?: ElementType;
  /** Specifies the jsx before the content of the `MenuItem` */
  iconBefore?: ReactElement | ElementType;
  /** Specifies the jsx after the content of the `MenuItem` */
  iconAfter?: ReactElement | ElementType;
}
function MenuItem({
  as = 'button',
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected = false,
  iconAfter,
  iconBefore,
  ...props
}: MenuItemProps) {
  const className = classNames(props.className, 'pgn__menu-item');

  return createElement(
    as,
    {
      ...props,
      className,
    },
    (
      <>
        {iconBefore && <Icon className="btn-icon-before" src={iconBefore as ComponentType} />}
        <span className="pgn__menu-item-text">{children}</span>
        <span className="pgn__menu-item-content-spacer" />
        {iconAfter && <Icon className="btn-icon-after" src={iconAfter as ComponentType} />}
      </>
    ),
  );
}

export default MenuItem;
