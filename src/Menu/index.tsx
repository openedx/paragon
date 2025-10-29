import React, {
  createElement,
  type ElementType,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react';
import classNames from 'classnames';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigationHook';

interface MenuProps<As extends ElementType> {
  /** Specifies class name to append to the base element */
  className?: string;
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
   */
  arrowKeyNavigationSelector?: string;
  /** Specifies the base element */
  as?: As;
  /** Specifies the content of the menu */
  children?: ReactNode;
}

function Menu<As extends ElementType = 'div'>({
  as = 'div' as As,
  arrowKeyNavigationSelector = 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  children,
  ...props
}: MenuProps<As> & ComponentPropsWithoutRef<As>) {
  const parentRef = useArrowKeyNavigation({ selectors: arrowKeyNavigationSelector });
  const className = classNames(props.className, 'pgn__menu');

  return createElement(
    as,
    {
      ...props,
      ref: parentRef,
      className,
    },
    (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {children}
      </>
    ),
  );
}

export default Menu;
