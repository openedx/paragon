import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CollapsibleAdvanced, { CollapsibleContext } from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';
import Icon from '../Icon';
import { ExpandLess, ExpandMore } from '../../icons';

const styleIcons = {
  basic: {
    iconWhenClosed: <Icon src={ExpandMore} />,
    iconWhenOpen: <Icon src={ExpandLess} />,
  },
  // card and card-lg use the defaults specified in defaultProps
};

const Collapsible = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    title,
    styling,
    iconWhenClosed,
    iconWhenOpen,
    ...other
  } = props;

  const icons = { iconWhenClosed, iconWhenOpen, ...styleIcons[styling] };
  const titleElement = React.isValidElement(title) ? title : <span>{title}</span>;

  return (
    <Collapsible.Advanced
      {...other}
      className={classNames(className, `collapsible-${styling}`)}
      ref={ref}
    >
      <Collapsible.Trigger className="collapsible-trigger">
        {titleElement}
        <span className="collapsible-icon">
          <Collapsible.Visible whenClosed>{icons.iconWhenClosed}</Collapsible.Visible>
          <Collapsible.Visible whenOpen>{icons.iconWhenOpen}</Collapsible.Visible>
        </span>
      </Collapsible.Trigger>

      <Collapsible.Body className="collapsible-body">{children}</Collapsible.Body>
    </Collapsible.Advanced>
  );
});

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  iconWhenClosed: PropTypes.element,
  iconWhenOpen: PropTypes.element,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  styling: PropTypes.oneOf(['basic', 'card', 'card-lg']),
  title: PropTypes.node.isRequired,
};
Collapsible.defaultProps = {
  className: undefined,
  defaultOpen: false,
  iconWhenClosed: <Icon src={ExpandMore} />,
  iconWhenOpen: <Icon src={ExpandLess} />,
  onClose: undefined,
  onOpen: undefined,
  onToggle: undefined,
  open: undefined,
  styling: 'card',
};

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;
Collapsible.Context = CollapsibleContext;

export default Collapsible;
