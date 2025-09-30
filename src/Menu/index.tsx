import { ElementType, ReactNode, createElement } from 'react';
import classNames from 'classnames';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigationHook';

interface MenuProps {
  /** Specifies class name to append to the base element */
  className?: string;
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
   */
  arrowKeyNavigationSelector?: string;
  /** Specifies the base element */
  as?: ElementType;
  /** Specifies the content of the menu */
  children?: ReactNode;
}
function Menu({
  as = 'div',
  arrowKeyNavigationSelector = 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  children,
  ...props
}: MenuProps) {
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
