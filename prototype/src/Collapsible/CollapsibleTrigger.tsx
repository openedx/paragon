import React from 'react';
import {
  useButton, useFocusRing, useObjectRef, mergeProps,
} from 'react-aria';
import clsx from 'clsx';

import { useCollapsibleContext } from './CollapsibleAdvanced';
import styles from './Collapsible.module.css';

export interface CollapsibleTriggerProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Specifies contents of the component. */
  children?: React.ReactNode;
  /** Specifies the base element (default: `div`). */
  tag?: React.ElementType;
  /** Same as `tag`; provided for parity with the other prototype components. */
  as?: React.ElementType;
  /** When set, activating the trigger only ever opens the `Collapsible`. */
  openOnly?: boolean;
  /** When set, activating the trigger only ever closes the `Collapsible`. */
  closeOnly?: boolean;
}

/**
 * The clickable element that toggles a `Collapsible`. Rendered as a `div` with
 * `role="button"` by default (override with `tag`/`as`); pass `openOnly` or
 * `closeOnly` for a secondary control — e.g. a "Close" button inside the body.
 *
 * Behaviour comes from React Aria's `useButton`, so keyboard activation
 * (<kbd>Enter</kbd>/<kbd>Space</kbd>), `role`/`tabIndex` on non-native elements,
 * and the keyboard-only focus ring all work the same way they do on `Button`.
 * The primary trigger also carries the disclosure's `aria-expanded` /
 * `aria-controls` linkage from context.
 */
export const CollapsibleTrigger = React.forwardRef<HTMLElement, CollapsibleTriggerProps>((
  {
    tag = 'div',
    as,
    children,
    openOnly = false,
    closeOnly = false,
    onClick,
    onKeyDown,
    className,
    ...rest
  },
  forwardedRef,
) => {
  const ctx = useCollapsibleContext();
  const ElementType: React.ElementType = as ?? tag;
  const ref = useObjectRef(forwardedRef as React.ForwardedRef<HTMLElement>);
  const isSecondary = openOnly || closeOnly;

  // The disclosure's button props include DOM ids/aria plus React Aria press
  // handlers (`onPress*`, `isDisabled`). Split them: the press handlers feed
  // `useButton`; the ids/aria are applied to the element directly. Secondary
  // (open/close-only) triggers are not the disclosure's button, so they omit the
  // aria-expanded/controls linkage and just push the state one way.
  const {
    id, 'aria-expanded': ariaExpanded, 'aria-controls': ariaControls, ...pressProps
  } = ctx.triggerProps;

  const { buttonProps } = useButton(
    {
      elementType: ElementType,
      ...(isSecondary
        ? { onPress: () => (openOnly ? ctx.open() : ctx.close()) }
        : pressProps),
    },
    ref,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  const ariaLinkage = isSecondary
    ? {}
    : { id, 'aria-expanded': ariaExpanded, 'aria-controls': ariaControls };

  return (
    <ElementType
      {...mergeProps(buttonProps, focusProps, { onClick, onKeyDown })}
      {...ariaLinkage}
      {...rest}
      ref={ref}
      data-focus-visible={isFocusVisible || undefined}
      className={clsx(styles.focusRing, className)}
    >
      {children}
    </ElementType>
  );
});

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

export default CollapsibleTrigger;
