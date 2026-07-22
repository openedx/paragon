import React, { useContext } from 'react';
import {
  useButton, useFocusRing, useObjectRef, mergeProps,
} from 'react-aria';
import clsx from 'clsx';

import type { ButtonProps } from './types';
import { ButtonGroupContext } from './ButtonGroupContext';
import styles from './Button.module.css';

const SIZE_CLASS = {
  sm: styles.sm,
  md: undefined,
  lg: styles.lg,
  inline: styles.inline,
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

  const isLink = variant === 'link';

  return (
    <ElementType
      {...mergeProps(buttonProps, focusProps, { onClick })}
      // Passthrough DOM attributes (href/target/rel/data-*) win over React Aria's
      // defaults. Aria behaviour props (role, tabIndex, key handlers) are not in
      // `rest`, so they are preserved. React Aria echoes `href: undefined` for
      // link elements, which is why `rest` must be spread last.
      {...rest}
      ref={ref}
      // Styling is entirely token-driven CSS: `data-variant` selects the
      // `.btn[data-variant="…"]` block in Button.module.css, which re-points the
      // generic `--pgn-btn-*` custom properties. No inline styles.
      data-variant={variant}
      data-pressed={isPressed || undefined}
      data-focus-visible={isFocusVisible || undefined}
      className={clsx(
        styles.btn,
        isLink && styles.link,
        SIZE_CLASS[resolvedSize],
        block && styles.block,
        className,
      )}
    >
      {IconBefore && (
        <span className={styles.iconBefore} aria-hidden>
          <IconBefore />
        </span>
      )}
      {children}
      {IconAfter && (
        <span className={styles.iconAfter} aria-hidden>
          <IconAfter />
        </span>
      )}
    </ElementType>
  );
});

Button.displayName = 'Button';

export default Button;
