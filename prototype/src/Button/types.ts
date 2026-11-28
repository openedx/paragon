import type React from 'react';
import type { PressEvent } from 'react-aria';

/**
 * The eleven base button variants Paragon ships. Preserved exactly from the
 * current `@openedx/paragon` Button API.
 */
export type BaseVariant = (
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'brand'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'link'
);

/**
 * Every valid `variant` value: each base variant plus its `outline-`,
 * `inverse-` and `inverse-outline-` forms. This is the same union the current
 * TypeScript Button exposes, so consumers see no change.
 */
export type ButtonVariant =
  | BaseVariant
  | `inverse-${BaseVariant}`
  | `outline-${BaseVariant}`
  | `inverse-outline-${BaseVariant}`;

export type ButtonSize = 'sm' | 'md' | 'lg' | 'inline';

export interface ButtonProps {
  /** Set a custom element for this component (default: `button`, with `type="button"`). */
  as?: React.ElementType;
  /** Specifies variant to use (default: `primary`). */
  variant?: ButtonVariant;
  /** Button size. Note `md` and `inline` are Paragon extensions over Bootstrap. */
  size?: ButtonSize;
  /**
   * An icon component to render before the label. Example:
   * ```
   * import { Close } from '@openedx/paragon/icons';
   * <Button iconBefore={Close}>Close</Button>
   * ```
   */
  iconBefore?: React.ComponentType;
  /** An icon component to render after the label. */
  iconAfter?: React.ComponentType;
  /** Disables the Button, even when rendered as a non-`<button>` element via `as`. */
  disabled?: boolean;
  /** Additional class name(s) to apply to the button. */
  className?: string;
  /** Contents of the button. */
  children: React.ReactNode;
  /**
   * Legacy click handler, preserved for API compatibility with the current
   * Paragon Button. Fires for mouse, keyboard and touch activation.
   */
  onClick?: React.MouseEventHandler;
  /**
   * React Aria's device-agnostic press handler. Prefer this in new code; it
   * fires consistently across mouse, touch, keyboard and pen.
   */
  onPress?: (e: PressEvent) => void;
  /** Native button type when rendered as a `<button>` (default: `button`). */
  type?: 'button' | 'submit' | 'reset';
  /** Full-width block button. */
  block?: boolean;
  id?: string;
  'aria-label'?: string;
  /**
   * Passthrough for element-specific attributes (e.g. `href`/`target` when
   * `as="a"`). A fully-typed polymorphic signature is deferred; the current
   * Paragon Button similarly relays extra props to the underlying element.
   */
  [prop: `data-${string}`]: unknown;
  href?: string;
  target?: string;
  rel?: string;
}
