import React, { useContext, useCallback } from 'react';

import { CollapsibleContext } from './CollapsibleAdvanced';

export interface CollapsibleTriggerProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  tag?: string | React.ElementType;
  openOnly?: boolean;
  closeOnly?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

function CollapsibleTrigger({
  tag = 'div', children, openOnly = false, closeOnly = false, onClick, onKeyDown, ...props
}: CollapsibleTriggerProps) {
  const context = useContext(CollapsibleContext);
  const {
    isOpen, open, close, toggle,
  } = context || {
    isOpen: false, open: () => {}, close: () => {}, toggle: () => {},
  };

  const handleToggle = useCallback(() => {
    if (openOnly) {
      open();
    } else if (closeOnly) {
      close();
    } else {
      toggle();
    }
  }, [openOnly, open, closeOnly, close, toggle]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
    handleToggle();
  }, [onClick, handleToggle]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
    if (e.key === 'Enter') {
      handleToggle();
    }
  }, [onKeyDown, handleToggle]);

  return React.createElement(
    tag,
    {
      ...props,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      role: 'button',
      tabIndex: 0,
      'aria-expanded': isOpen,
    },
    children,
  );
}

export default CollapsibleTrigger;
