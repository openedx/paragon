import React from 'react';
import classNames from 'classnames';
import BaseButton, { type ButtonProps as BaseButtonProps } from 'react-bootstrap/Button';
import BaseButtonGroup, { type ButtonGroupProps as BaseButtonGroupProps } from 'react-bootstrap/ButtonGroup';
import BaseButtonToolbar, { type ButtonToolbarProps as BaseButtonToolbarProps } from 'react-bootstrap/ButtonToolbar';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';

import Icon from '../Icon';

type BaseVariant = (
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
 * This was added so these types could be added as a non-breaking change.
 * @deprecated - remove in Paragon 24
 */
type OtherDeprecatedValue = string & {}; // Allow any other string value for now, even though it's invalid

export interface ButtonProps extends Omit<BaseButtonProps, 'size'> {
  /** Set a custom element for this component (default: `button`, with `type="button"`). */
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'inline';
  /**
   * An icon component to render. Example:
   * ```
   * import { Close } from '@openedx/paragon/icons';
   * <Button iconBefore={Close}>Close</Button>
   * ```
   */
  iconBefore?: React.ComponentType;
  /**
   * An icon component to render. Example:
   * ```
   * import { Close } from '@openedx/paragon/icons';
   * <Button iconAfter={Close}>Close</Button>
   * ```
   */
  iconAfter?: React.ComponentType;

  // The following are the same as in BaseButtonProps, but we re-define them to add documentation.
  // The upstream type defintions do not have any comments/docs.

  /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled?: boolean;
  /** Optional: Specify additional class name(s) to apply to the button */
  className?: string;
  /** Specifies the text that is displayed within the button. */
  children: React.ReactNode;
  /** Specifies variant to use.
   * Can be one of the base variants: `primary`, `secondary`, `tertiary`, `brand`, `success`, `danger`, `warning`,
   * `info`, `dark`, `light`, `link`,
   * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
   * or `inverse-outline-`)
   * */
  variant?: BaseVariant | `inverse-${BaseVariant}` | `outline-${BaseVariant}` | `inverse-outline-${BaseVariant}` | OtherDeprecatedValue;
}

const Button: ComponentWithAsProp<'button', ButtonProps> = React.forwardRef(({
  children,
  iconAfter,
  iconBefore,
  size,
  ...props
}: ButtonProps, ref: React.ForwardedRef<HTMLDivElement>) => (
  <BaseButton
    size={size as 'sm' | 'lg' | undefined} // Bootstrap's <Button> types do not allow 'md' or 'inline', but we do.
    {...props}
    className={classNames(props.className)}
    ref={ref}
  >
    {iconBefore && <Icon className="btn-icon-before" size={size} src={iconBefore} />}
    {children}
    {iconAfter && <Icon className="btn-icon-after" size={size} src={iconAfter} />}
  </BaseButton>
));

// We could just re-export 'ButtonGroup', but we currently override it to
// force ButtonGroup's 'size' prop to accept our custom values of 'md' and
// 'inline' which are used in Paragon but not used in the base Bootstrap classes.

interface ButtonGroupProps extends Omit<BaseButtonGroupProps, 'size'> {
  /** Specifies element type for this component. */
  as?: React.ElementType;
  /** An ARIA role describing the button group (default: `group`). */
  role?: React.AriaRole;
  /** Specifies the size for all Buttons in the group (default: `md`). */
  size?: 'sm' | 'md' | 'lg' | 'inline';
  /** Display as a button toggle group (default: `false`). */
  toggle?: boolean;
  /** Specifies if the set of Buttons should appear vertically stacked (default: `false`). */
  vertical?: boolean;
  /** Overrides underlying component base CSS class name (default: `btn-group`). */
  bsPrefix?: string;
}

const ButtonGroup: ComponentWithAsProp<'div', ButtonGroupProps> = (
  React.forwardRef(({ size = 'md', ...props }: ButtonGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <BaseButtonGroup size={size as 'sm' | 'lg'} {...props} ref={ref} />
  ))
);

// We could just re-export 'ButtonToolbar', but we currently override it to
// narrow the type of 'role' to valid roles and to document its properties.

interface ButtonToolbarProps extends BaseButtonToolbarProps {
  /** An ARIA role describing the button group (default: `toolbar`). */
  role?: React.AriaRole;
  /** Overrides underlying component base CSS class name (default: `btn-toolbar`) */
  bsPrefix?: string;
}

const ButtonToolbar: ComponentWithAsProp<'div', ButtonToolbarProps> = (
  React.forwardRef((props: ButtonToolbarProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <BaseButtonToolbar {...props} ref={ref} />
  ))
);

export default Button;
export { ButtonGroup, ButtonToolbar };
