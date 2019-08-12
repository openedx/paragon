import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleContext } from './CollapsibleAdvanced';
import TransitionReplace from '../TransitionReplace';

function CollapsibleBody({
  children, transitionWrapper, tag, ...props
}) {
  const { isOpen } = useContext(CollapsibleContext);

  const content = isOpen ?
    React.createElement(tag, { key: 'body', ...props }, children) :
    <div key="empty" />;

  if (transitionWrapper) {
    return React.cloneElement(transitionWrapper, {}, content);
  }

  /* istanbul ignore next */
  return <TransitionReplace>{content}</TransitionReplace>;
}

CollapsibleBody.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  transitionWrapper: PropTypes.element,
};
CollapsibleBody.defaultProps = {
  children: undefined,
  tag: 'div',
  transitionWrapper: undefined,
};

export default CollapsibleBody;
