import React, { useContext } from 'react';

import { CollapsibleContext } from './CollapsibleAdvanced';

export interface CollapsibleVisibleProps {
  /** Specifies contents of the component. */
  children?: React.ReactNode;
  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen?: boolean;
  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed?: boolean;
}

function CollapsibleVisible({
  children,
  whenOpen: visibleWhenOpen = false,
  whenClosed: visibleWhenClosed = false,
}: CollapsibleVisibleProps) {
  const context = useContext(CollapsibleContext);
  const { isOpen } = context || { isOpen: false };
  const isVisible = (isOpen && visibleWhenOpen) || (!isOpen && visibleWhenClosed);

  if (isVisible) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
  return null;
}

export default CollapsibleVisible;
