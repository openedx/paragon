import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleContext } from './CollapsibleAdvanced';

function CollapsibleVisible({
  children,
  whenOpen: visibleWhenOpen,
  whenClosed: visibleWhenClosed,
}) {
  const { isOpen } = useContext(CollapsibleContext);

  if ((visibleWhenOpen && isOpen) || (visibleWhenClosed && !isOpen)) {
    return <React.Fragment>{children}</React.Fragment>;
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
