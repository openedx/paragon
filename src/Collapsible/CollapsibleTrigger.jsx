import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CollapsibleContext } from './CollapsibleAdvanced';

function CollapsibleTrigger({
  tag, children, openOnly, closeOnly, onClick, onKeyDown, ...props
}) {
  const {
    isOpen, open, close, toggle,
  } = useContext(CollapsibleContext);

  const handleToggle = useCallback((e) => {
    if (openOnly) {
      open(e);
    } else if (closeOnly) {
      close(e);
    } else {
      toggle(e);
    }
  }, [openOnly, open, closeOnly, close, toggle]);

  const handleClick = useCallback((e) => {
    if (onClick) {
      onClick(e);
    }
    handleToggle(e);
  }, [onClick, handleToggle]);

  const handleKeyDown = useCallback((e) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
    if (e.key === 'Enter') {
      handleToggle(e);
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

CollapsibleTrigger.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies base element. */
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /** Specifies whether toggling `Collapsible's` state will always trigger only open action. */
  openOnly: PropTypes.bool,
  /** Specifies whether toggling `Collapsible's` state will always trigger only close action. */
  closeOnly: PropTypes.bool,
  /** Callback fired when element gets clicked. */
  onClick: PropTypes.func,
  /** Callback fired when a key is pressed. */
  onKeyDown: PropTypes.func,
};

CollapsibleTrigger.defaultProps = {
  children: undefined,
  tag: 'div',
  openOnly: false,
  closeOnly: false,
  onClick: undefined,
  onKeyDown: undefined,
};

export default CollapsibleTrigger;
