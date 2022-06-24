import { useContext } from 'react';
import PropTypes from 'prop-types';

import { CollapsibleContext } from './CollapsibleAdvanced';

function CollapsibleVisible({
  children,
  whenOpen: visibleWhenOpen,
  whenClosed: visibleWhenClosed,
}) {
  const { isOpen } = useContext(CollapsibleContext);
  const isVisible = (isOpen && visibleWhenOpen) || (!isOpen && visibleWhenClosed);

  if (isVisible) {
    return children;
  }
  return null;
}

CollapsibleVisible.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen: PropTypes.bool,
  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed: PropTypes.bool,
};

CollapsibleVisible.defaultProps = {
  children: undefined,
  whenOpen: false,
  whenClosed: false,
};

export default CollapsibleVisible;
