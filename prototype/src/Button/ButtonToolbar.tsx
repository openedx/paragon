import React from 'react';
import clsx from 'clsx';

import '../styles/button.css';

export interface ButtonToolbarProps {
  /** Specifies element type for this component (default: `div`). */
  as?: React.ElementType;
  /** An ARIA role describing the toolbar (default: `toolbar`). */
  role?: React.AriaRole;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

/** A flex container that lays out one or more ButtonGroups. */
export const ButtonToolbar = React.forwardRef<HTMLElement, ButtonToolbarProps>((
  {
    as, role = 'toolbar', className, children, ...rest
  },
  ref,
) => {
  const ElementType: React.ElementType = as ?? 'div';
  return (
    <ElementType
      {...rest}
      ref={ref}
      role={role}
      className={clsx('btn-toolbar', className)}
    >
      {children}
    </ElementType>
  );
});

ButtonToolbar.displayName = 'ButtonToolbar';

export default ButtonToolbar;
