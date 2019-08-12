import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleContext } from './CollapsibleAdvanced';


function CollapsibleTrigger({
  tag, children, openOnly, closeOnly, ...props
}) {
  const { isOpen, toggle } = useContext(CollapsibleContext);

  const handleClick = useCallback((e) => {
    if (props.onClick) props.onClick(e);
    if ((isOpen && openOnly) || (!isOpen && closeOnly)) return; // No-op
    toggle(e);
  });

  const handleKeyDown = useCallback((e) => {
    if (props.onKeyDown) props.onKeyDown(e);
    if ((isOpen && openOnly) || (!isOpen && closeOnly)) return; // No-op
    if (e.key === 'Enter') toggle(e);
  });

  return React.createElement(tag, {
    ...props,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role: 'button',
    tabIndex: 0,
    'aria-expanded': isOpen,
  }, children);
}

CollapsibleTrigger.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  openOnly: PropTypes.bool,
  closeOnly: PropTypes.bool,
  onClick: PropTypes.func,
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
