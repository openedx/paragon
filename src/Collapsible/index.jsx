import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import CollapsibleAdvanced from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';

const styleIcons = {
  basic: {
    iconWhenClosed: <FontAwesomeIcon icon={faPlusCircle} />,
    iconWhenOpen: <FontAwesomeIcon icon={faMinusCircle} />,
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

  const icons = Object.assign({ iconWhenClosed, iconWhenOpen }, styleIcons[styling]);
  const titleElement = React.isValidElement(title) ? title : <span>{title}</span>;

  return (
    <Collapsible.Advanced
      {...other}
      className={classNames(className, `collapsible-${styling}`)}
      ref={ref}
    >
      <Collapsible.Trigger className="collapsible-trigger">
        {titleElement}
        <span className="ml-2">
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
  iconWhenClosed: <FontAwesomeIcon icon={faPlus} />,
  iconWhenOpen: <FontAwesomeIcon icon={faMinus} />,

};

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;

export default Collapsible;
