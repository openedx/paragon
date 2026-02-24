import React, { useContext } from 'react';

import { CollapsibleContext } from './CollapsibleAdvanced';

export interface CollapsibleVisibleProps {
  children?: React.ReactNode;
  whenOpen?: boolean;
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
