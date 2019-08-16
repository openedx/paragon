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
    children, className, title, styling, ...other
  } = props;

  const isBasic = styling === 'basic';
  const isCard = styling === 'card';
  const isCardWithHeading = styling === 'card-large';

  const renderTitle = () => {
    switch (styling) {
      case 'basic':
        return <span>{title}</span>;
      case 'card':
        return <p><strong>{title}</strong></p>;
      case 'card-large':
        return <h5>{title}</h5>;
      default:
        return null;
    }
  };

  return (
    <Collapsible.Advanced
      {...other}
      className={classNames({ 'collapsible-card': !isBasic }, className)}
      forwardedRef={ref}
    >
      <Collapsible.Trigger
        className={classNames({
          'collapsible-card-header': !isBasic, 'collapsible-card-basic': isCard, 'collapsible-card-large': isCardWithHeading, 'collapsible-basic': isBasic,
        })}
      >
        { renderTitle(styling) }
        <Collapsible.Visible whenClosed>
          { isBasic ? <Icons.PlusCircle height="1rem" width="1rem" className="icon-basic" /> : <Icons.Plus className="collapsible-card-header-icon" /> }
        </Collapsible.Visible>
        <Collapsible.Visible whenOpen>
          { isBasic ? <Icons.MinusCircle height="1rem" width="1rem" className="icon-basic" /> : <Icons.Minus className="collapsible-card-header-icon" /> }
        </Collapsible.Visible>
      </Collapsible.Trigger>

      <Collapsible.Body className={classNames({ 'collapsible-card-body': isCard, 'collapsible-card-body-large': isCardWithHeading })}>{children}</Collapsible.Body>
    </Collapsible.Advanced>
  );
});

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  styling: PropTypes.string,
};
Collapsible.defaultProps = {
  className: 'collapsible',
  styling: 'card',
};

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;

export default Collapsible;
