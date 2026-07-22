import React from 'react';
import { mergeProps } from 'react-aria';
import clsx from 'clsx';

import { useCollapsibleContext } from './CollapsibleAdvanced';
import styles from './Collapsible.module.css';

export interface CollapsibleBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Specifies contents of the component. */
  children?: React.ReactNode;
  /** Specifies the content's base element (default: `div`). */
  tag?: React.ElementType;
}

/**
 * The collapsible region toggled by `Collapsible.Trigger`.
 *
 * The panel stays mounted; React Aria's `useDisclosure` drives its
 * expand/collapse by setting `--disclosure-panel-height` on this element and,
 * once fully collapsed, applying `hidden="until-found"` (so the content is still
 * findable via browser find-in-page). The CSS Module animates `height` from that
 * custom property. This replaces the old `Collapse` / `TransitionReplace`
 * JavaScript transitions.
 */
// The panel ref is owned by CollapsibleAdvanced (React Aria needs it to drive the
// animation), so — like Paragon's original — this component does not forward a ref.
export const CollapsibleBody = ({
  children, tag = 'div', className, ...rest
}: CollapsibleBodyProps) => {
  const { panelProps, panelRef } = useCollapsibleContext();
  const ElementType: React.ElementType = tag;

  return (
    <ElementType
      {...mergeProps(panelProps, rest)}
      ref={panelRef}
      className={clsx(styles.panel, className)}
    >
      {children}
    </ElementType>
  );
};

CollapsibleBody.displayName = 'CollapsibleBody';

export default CollapsibleBody;
