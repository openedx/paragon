import React, {
  type ReactElement,
  type ReactNode,
  type ElementType,
  createElement,
  type ComponentType,
  type ComponentPropsWithoutRef,
} from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

interface MenuItemProps<As extends ElementType> {
  /** Specifies that this `MenuItem` is selected inside the `SelectMenu` */
  defaultSelected?: boolean;
  /** Specifies class name to append to the base element */
  className?: string;
  /** Specifies the content of the `MenuItem` */
  children: ReactNode;
  /** Specifies the base element */
  as?: As;
  /** Specifies the jsx before the content of the `MenuItem` */
  iconBefore?: ReactElement | ElementType;
  /** Specifies the jsx after the content of the `MenuItem` */
  iconAfter?: ReactElement | ElementType;
}

function MenuItem<As extends ElementType = 'button'>({
  as = 'button' as As,
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultSelected = false,
  iconAfter,
  iconBefore,
  ...props
}: MenuItemProps<As> & ComponentPropsWithoutRef<As>) {
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
