import { useMemo, Children, cloneElement } from 'react';
import classNames from 'classnames';
import { OVERFLOW_SCROLL_ITEM_CLASS } from './constants';

/**
 * Adds the `OVERFLOW_SCROLL_ITEM_CLASS` class to each child element in the given `children`.
 *
 * @param {JSX.Element} children The children representing the items in the overflow container.
 * @returns A copy of the passed children, with a class name added to each child.
 */
const useOverflowScrollItems = (children) => {
  const childrenWithOverflowScrollClassName = useMemo(
    () => Children.map(Children.toArray(children), child => cloneElement(child, {
      className: classNames(OVERFLOW_SCROLL_ITEM_CLASS, child.props.className),
    })),
    [children],
  );
  return childrenWithOverflowScrollClassName;
};

export default useOverflowScrollItems;
