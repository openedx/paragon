import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Icons from '../Icons';
import CollapsibleAdvanced from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';

const Collapsible = React.forwardRef((props, ref) => {
  const {
    children, className, title, ...other
  } = props;

  return (
    <Collapsible.Advanced
      {...other}
      className={classNames('collapsible-card', className)}
      forwardedRef={ref}
    >
      <Collapsible.Trigger className="collapsible-card-header">
        { typeof title === 'string' ? <p><strong>{title}</strong></p> : title }
        <span className="collapsible-card-header-icon" aria-hidden>
          <Collapsible.Visible whenClosed>
            <Icons.ChevronDown width="2rem" height="2rem" />
          </Collapsible.Visible>

          <Collapsible.Visible whenOpen>
            <Icons.ChevronUp width="2rem" height="2rem" />
          </Collapsible.Visible>
        </span>
      </Collapsible.Trigger>
      <Collapsible.Body className="collapsible-card-body">{children}</Collapsible.Body>
    </Collapsible.Advanced>
  );
});

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
};
Collapsible.defaultProps = {
  className: 'collapsible',
};

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;

export default Collapsible;
