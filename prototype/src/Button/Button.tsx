import React, { useContext } from 'react';
import {
  useButton, useFocusRing, useObjectRef, mergeProps,
} from 'react-aria';
import clsx from 'clsx';

import type { ButtonProps, ButtonVariant } from './types';
import { ButtonGroupContext } from './ButtonGroupContext';
import styles from './Button.module.css';

/**
 * Maps the generic `--pgn-btn-*` custom properties consumed by the base `.btn`
 * rule to the variant-specific token variables. This is a 1:1 port of the SCSS
 * `button-variant` mixin — the mixin only ever re-pointed these variables, so
 * doing it inline keeps the styling token-driven while avoiding 44 near-identical
 * CSS blocks. (A static-class alternative is noted in the prototype README.)
 */
function variantVars(variant: ButtonVariant): React.CSSProperties {
  const v = variant;
  return {
    '--pgn-btn-color': `var(--pgn-color-btn-text-${v})`,
    '--pgn-btn-bg': `var(--pgn-color-btn-bg-${v})`,
    '--pgn-btn-border-color': `var(--pgn-color-btn-border-${v})`,
    '--pgn-btn-hover-color': `var(--pgn-color-btn-hover-text-${v})`,
    '--pgn-btn-hover-bg': `var(--pgn-color-btn-hover-bg-${v})`,
    '--pgn-btn-hover-border-color': `var(--pgn-color-btn-hover-border-${v})`,
    '--pgn-btn-disabled-color': `var(--pgn-color-btn-disabled-text-${v})`,
    '--pgn-btn-disabled-bg': `var(--pgn-color-btn-disabled-bg-${v})`,
    '--pgn-btn-disabled-border-color': `var(--pgn-color-btn-disabled-border-${v})`,
    '--pgn-btn-active-color': `var(--pgn-color-btn-active-text-${v})`,
    '--pgn-btn-active-bg': `var(--pgn-color-btn-active-bg-${v})`,
    '--pgn-btn-active-border-color': `var(--pgn-color-btn-active-border-${v})`,
    '--pgn-btn-focus-outline-color': `var(--pgn-color-btn-focus-outline-${v})`,
    '--pgn-btn-focus-color': `var(--pgn-color-btn-focus-text-${v})`,
    '--pgn-btn-focus-border-color': `var(--pgn-color-btn-focus-border-${v})`,
    '--pgn-btn-focus-bg': `var(--pgn-color-btn-focus-bg-${v})`,
  } as React.CSSProperties;
}

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
      style={isLink ? undefined : variantVars(variant)}
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
