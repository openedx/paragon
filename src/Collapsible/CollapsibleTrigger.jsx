import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CollapsibleContext } from './CollapsibleAdvanced';

function CollapsibleTrigger({
  tag, children, openOnly, closeOnly, ...props
}) {
  const {
    isOpen, open, close, toggle,
  } = useContext(CollapsibleContext);

  const handleToggle = (e) => {
    if (openOnly) {
      open(e);
    } else if (closeOnly) {
      close(e);
    } else {
      toggle(e);
    }
  };

  const handleClick = useCallback((e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    handleToggle(e);
  });

  const handleKeyDown = useCallback((e) => {
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
    if (e.key === 'Enter') {
      handleToggle(e);
    }
  });

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
  tag: PropTypes.string,
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
