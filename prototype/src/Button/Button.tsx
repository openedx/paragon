import React, { useContext } from 'react';
import {
  useButton, useFocusRing, useObjectRef, mergeProps,
} from 'react-aria';
import clsx from 'clsx';

import type { ButtonProps } from './types';
import { ButtonGroupContext } from './ButtonGroupContext';
import '../styles/button.css';

const SIZE_CLASS = {
  sm: 'btn-sm',
  md: undefined,
  lg: 'btn-lg',
  inline: 'btn-inline',
} as const;

/**
 * Accessible, themeable Button.
 *
 * Behaviour comes from React Aria's `useButton` (cross-device press handling,
 * correct `disabled` semantics even when rendered as an `<a>` via `as`, and
 * focus-ring state) rather than Bootstrap. The public prop API is unchanged
 * from `@openedx/paragon`'s Button, and all styling is driven by the existing
 * `--pgn-*` design tokens.
 */
export const Button = React.forwardRef<HTMLElement, ButtonProps>((
  {
    as,
    variant = 'primary',
    size,
    iconBefore: IconBefore,
    iconAfter: IconAfter,
    disabled = false,
    block = false,
    className,
    children,
    onClick,
    onPress,
    type = 'button',
    ...rest
  },
  forwardedRef,
) => {
  const ref = useObjectRef(forwardedRef as React.ForwardedRef<HTMLElement>);
  const ElementType: React.ElementType = as ?? 'button';
  const groupSize = useContext(ButtonGroupContext);
  const resolvedSize = size ?? groupSize ?? 'md';

  const { buttonProps, isPressed } = useButton(
    {
      elementType: ElementType,
      isDisabled: disabled,
      onPress,
      type,
      'aria-label': rest['aria-label'],
    },
    ref,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <ElementType
      {...mergeProps(buttonProps, focusProps, { onClick })}
      // Passthrough DOM attributes (href/target/rel/data-*) win over React Aria's
      // defaults. Aria behaviour props (role, tabIndex, key handlers) are not in
      // `rest`, so they are preserved. React Aria echoes `href: undefined` for
      // link elements, which is why `rest` must be spread last.
      {...rest}
      ref={ref}
      data-pressed={isPressed || undefined}
      data-focus-visible={isFocusVisible || undefined}
      // Styling comes from the global, public `btn` class layer (src/styles/
      // button.css): `btn` + `btn-<variant>` (+ size/block). These are the same
      // Bootstrap-compatible class names Paragon has always shipped, so a raw
      // `<a class="btn btn-primary">` renders identically to this component.
      className={clsx(
        'btn',
        `btn-${variant}`,
        SIZE_CLASS[resolvedSize],
        block && 'btn-block',
        className,
      )}
    >
      {IconBefore && (
        <span className="btn-icon-before" aria-hidden>
          <IconBefore />
        </span>
      )}
      {children}
      {IconAfter && (
        <span className="btn-icon-after" aria-hidden>
          <IconAfter />
        </span>
      )}
    </ElementType>
  );
});

Button.displayName = 'Button';

export default Button;
