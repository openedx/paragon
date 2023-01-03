import { useMemo, Children, cloneElement } from 'react';
import classNames from 'classnames';
import { OVERFLOW_SCROLL_ITEM_CLASS } from './constants';

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
