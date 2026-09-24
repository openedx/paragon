import React from 'react';

import { useCollapsibleContext } from './CollapsibleAdvanced';

export interface CollapsibleVisibleProps {
  /** Specifies contents of the component. */
  children?: React.ReactNode;
  /** Render the content only while the `Collapsible` is open. */
  whenOpen?: boolean;
  /** Render the content only while the `Collapsible` is closed. */
  whenClosed?: boolean;
}

/**
 * Renders its children only in the matching state — e.g. a `+` glyph
 * `whenClosed` and a `−` glyph `whenOpen`. A 1:1 port of Paragon's
 * `CollapsibleVisible`.
 */
export const CollapsibleVisible = ({
  children,
  whenOpen = false,
  whenClosed = false,
}: CollapsibleVisibleProps) => {
  const { isOpen } = useCollapsibleContext();
  const isVisible = (isOpen && whenOpen) || (!isOpen && whenClosed);

  return isVisible ? <>{children}</> : null;
};

CollapsibleVisible.displayName = 'CollapsibleVisible';

export default CollapsibleVisible;
