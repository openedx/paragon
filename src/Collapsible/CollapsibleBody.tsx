import React, { useContext } from 'react';

import Collapse from '../Collapse';
import { CollapsibleContext } from './CollapsibleAdvanced';
import TransitionReplace from '../TransitionReplace';

export interface CollapsibleBodyProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Specifies contents of the component. */
  children?: React.ReactNode;
  /** Specifies content's base element. */
  tag?: string;
  /** Specifies transition element. */
  transitionWrapper?: React.ReactElement;
}

function CollapsibleBody({
  children, transitionWrapper, tag = 'div', ...props
}: CollapsibleBodyProps) {
  const context = useContext(CollapsibleContext);
  const { isOpen, unmountOnExit } = context || { isOpen: false, unmountOnExit: true };

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

export default CollapsibleBody;
