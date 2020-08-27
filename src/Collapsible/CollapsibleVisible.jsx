import React, { useContext } from 'react';
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
    return <>{children}</>;
  }
  return null;
}

CollapsibleVisible.propTypes = {
  children: PropTypes.node,
  whenOpen: PropTypes.bool,
  whenClosed: PropTypes.bool,
};

CollapsibleVisible.defaultProps = {
  children: undefined,
  whenOpen: false,
  whenClosed: false,
};

export default CollapsibleVisible;
