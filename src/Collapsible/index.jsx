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

const styles = {
  basic: {
    iconWhenClosed: <FontAwesomeIcon icon={faPlusCircle} />,
    iconWhenOpen: <FontAwesomeIcon icon={faMinusCircle} />,
    renderTitle: title => <span className="mr-2">{title}</span>,
  },
  card: {
    iconWhenClosed: <FontAwesomeIcon icon={faPlus} />,
    iconWhenOpen: <FontAwesomeIcon icon={faMinus} />,
    renderTitle: title => <p><strong>{title}</strong></p>,
  },
  'card-lg': {
    iconWhenClosed: <FontAwesomeIcon icon={faPlus} />,
    iconWhenOpen: <FontAwesomeIcon icon={faMinus} />,
    renderTitle: title => <h5>{title}</h5>,
  },
};

const Collapsible = React.forwardRef((props, ref) => {
  const {
    children, className, title, styling, ...other
  } = props;

  const style = styles[styling] || styles.card;

  return (
    <Collapsible.Advanced
      {...other}
      className={classNames(className, `collapsible-${styling}`)}
      ref={ref}
    >
      <Collapsible.Trigger className="collapsible-trigger">
        { style.renderTitle(title) }
        <Collapsible.Visible whenClosed>{style.iconWhenClosed}</Collapsible.Visible>
        <Collapsible.Visible whenOpen>{style.iconWhenOpen}</Collapsible.Visible>
      </Collapsible.Trigger>

      <Collapsible.Body className="collapsible-body">{children}</Collapsible.Body>
    </Collapsible.Advanced>
  );
});

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  styling: PropTypes.oneOf(['basic', 'card', 'card-lg']),
};
Collapsible.defaultProps = {
  className: undefined,
  styling: 'card',
};

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;

export default Collapsible;
