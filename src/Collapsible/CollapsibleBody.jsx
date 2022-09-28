import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Collapse from '../Collapse';
import { CollapsibleContext } from './CollapsibleAdvanced';

function CollapsibleBody({
  children, transitionWrapper, tag, ...props
}) {
  const { isOpen, unmountOnExit, transitionTime } = useContext(CollapsibleContext);

  // Keys are added to these elements so that TransitionReplace
  // will recognize them as unique components and perform the
  // transition properly.
  const content = React.createElement(tag, { key: 'body', ...props }, children);
  const transitionBody = isOpen ? content : <div key="empty" />;

  if (transitionWrapper) {
    return React.cloneElement(transitionWrapper, {}, transitionBody);
  }

  return (
    <Collapse
      className={classNames(`pgn__collapsible-time${transitionTime}`)}
      unmountOnExit={unmountOnExit}
      in={isOpen}
    >
      {content}
    </Collapse>
  );
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
