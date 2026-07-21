import React from 'react';
import clsx from 'clsx';

import type { ButtonSize } from './types';
import { ButtonGroupContext } from './ButtonGroupContext';
import styles from './Button.module.css';

export interface ButtonGroupProps {
  /** Specifies element type for this component (default: `div`). */
  as?: React.ElementType;
  /** An ARIA role describing the button group (default: `group`). */
  role?: React.AriaRole;
  /** Sets the size for all Buttons in the group (default: `md`). */
  size?: ButtonSize;
  /** Stack the Buttons vertically (default: `false`). */
  vertical?: boolean;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

/**
 * Groups related Buttons and propagates a shared `size` to them via context,
 * replacing Bootstrap's `.btn-group-*` global-class mechanism.
 */
export const ButtonGroup = React.forwardRef<HTMLElement, ButtonGroupProps>((
  {
    as,
    role = 'group',
    size = 'md',
    vertical = false,
    className,
    children,
    ...rest
  },
  ref,
) => {
  const ElementType: React.ElementType = as ?? 'div';
  return (
    <ButtonGroupContext.Provider value={size}>
      <ElementType
        {...rest}
        ref={ref}
        role={role}
        className={clsx(styles.btnGroup, vertical && styles.btnGroupVertical, className)}
      >
        {children}
      </ElementType>
    </ButtonGroupContext.Provider>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
