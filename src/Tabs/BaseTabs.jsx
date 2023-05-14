import React from 'react';
import PropTypes from 'prop-types';
import { useUncontrolled } from 'uncontrollable';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import { forEach, map } from 'react-bootstrap/ElementChildren';
import Nav, { NavLink, NavItem } from '../Nav';

function getDefaultActiveKey(children) {
  let defaultActiveKey;

  forEach(children, (child) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

function renderTab(child) {
  const {
    title, eventKey, disabled, tabClassName, id,
  } = child.props;

  if (title == null) {
    return null;
  }

  return (
    <NavLink
      as="li"
      eventKey={eventKey}
      disabled={disabled}
      id={id}
      className={tabClassName}
    >
      {title}
    </NavLink>
  );
}

function BaseTabs(props) {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect',
  });

  return (
    <TabContainer
      id={id}
      activeKey={activeKey}
      onSelect={onSelect}
      transition={transition}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
    >
      <Nav {...controlledProps} role="tablist" as="ul">
        {map(children, renderTab)}
      </Nav>

      <TabContent>
        {map(children, (child) => {
          const childProps = { ...child.props };

          delete childProps.title;
          delete childProps.disabled;
          delete childProps.tabClassName;

          return <TabPane {...childProps} />;
        })}
      </TabContent>
    </TabContainer>
  );
}

BaseTabs.propTypes = {
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  variant: PropTypes.string,
  transition: PropTypes.oneOfType([
    PropTypes.oneOf([false]),
    PropTypes.elementType,
  ]),
  id: PropTypes.string,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
};

BaseTabs.defaultProps = {
  activeKey: undefined,
  defaultActiveKey: undefined,
  onSelect: undefined,
  transition: undefined,
  variant: 'tabs',
  id: undefined,
  mountOnEnter: false,
  unmountOnExit: false,
};

BaseTabs.displayName = 'Tabs';

export default BaseTabs;
