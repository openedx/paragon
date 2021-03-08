import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CollapsibleAdvanced, { CollapsibleContext } from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';
import Icon from '../Icon';
import { Add, Remove } from '../../icons';

const styleIcons = {
  basic: {
    iconWhenClosed: <Icon src={Add} />,
    iconWhenOpen: <Icon src={Remove} />,
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
  title: PropTypes.node.isRequired,
  styling: PropTypes.oneOf(['basic', 'card', 'card-lg']),
  iconWhenClosed: PropTypes.element,
  iconWhenOpen: PropTypes.element,
};
Collapsible.defaultProps = {
  className: undefined,
  styling: 'card',
  iconWhenClosed: <Icon src={Add} />,
  iconWhenOpen: <Icon src={Remove} />,

};

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;
Collapsible.Context = CollapsibleContext;

export default Collapsible;
