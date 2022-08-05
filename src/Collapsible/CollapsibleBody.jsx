import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Collapse from '../Collapse';
import { CollapsibleContext } from './CollapsibleAdvanced';
import TransitionReplace from '../TransitionReplace';

function CollapsibleBody({
  children, transitionWrapper, tag, ...props
}) {
  const { isOpen, unmountOnExit } = useContext(CollapsibleContext);

  // Keys are added to these elements so that TransitionReplace
  // will recognize them as unique components and perform the
  // transition properly.
  const content = React.createElement(tag, { key: 'body', ...props }, children);
  const transitionBody = isOpen ? content : <div key="empty" />;

  if (transitionWrapper) {
    return React.cloneElement(transitionWrapper, {}, transitionBody);
  }
  /* istanbul ignore next */
  return unmountOnExit
    ? <TransitionReplace>{transitionBody}</TransitionReplace>
    : <Collapse in={isOpen}>{content}</Collapse>;
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
