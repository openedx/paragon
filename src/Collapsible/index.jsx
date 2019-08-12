import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CollapsibleAdvanced from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';

function Collapsible({
  children, className, title, ...other
}) {
  return (
    <CollapsibleAdvanced {...other} className={classNames('collapsible-card', className)}>
      <CollapsibleTrigger className="collapsible-card-header">{title}</CollapsibleTrigger>
      <CollapsibleBody className="collapsible-card-body">{children}</CollapsibleBody>
    </CollapsibleAdvanced>
  );
}

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};
Collapsible.defaultProps = {
  className: 'collapsible',
};

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;

export default Collapsible;
