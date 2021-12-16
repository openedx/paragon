import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CollapsibleContext } from './CollapsibleAdvanced';
import TransitionReplace from '../TransitionReplace';

function CollapsibleBody({
  children, transitionWrapper, tag, ...props
}) {
  const { isOpen } = useContext(CollapsibleContext);

  // Keys are added to these elements so that TransitionReplace
  // will recognize them as unique components and perform the
  // transition properly.
  const content = isOpen
    ? React.createElement(tag, { key: 'body', ...props }, children)
    : <div key="empty" />;

  if (transitionWrapper) {
    return React.cloneElement(transitionWrapper, {}, content);
  }
  /* istanbul ignore next */
  return <TransitionReplace>{content}</TransitionReplace>;
}

CollapsibleBody.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies content's base element. */
  tag: PropTypes.string,
  /** Specifies transition element. */
  transitionWrapper: PropTypes.element,
};

CollapsibleBody.defaultProps = {
  children: undefined,
  tag: 'div',
  transitionWrapper: undefined,
};

export default CollapsibleBody;
