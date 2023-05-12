import React from 'react';
import PropTypes from 'prop-types';

import { useUncontrolled } from 'uncontrollable';

import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav, { NavLink, NavItem } from '../Nav';

function bootstrapForEach(
  children,
  func,
) {
  let index = 0;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      func(child, index++);
    }
  });
}

function bootstrapMap(
  children,
  func,
) {
  let index = 0;

  return React.Children.map(children, (child) => (React.isValidElement(child) ? func(child, index++) : child));
}

function getDefaultActiveKey(children) {
  let defaultActiveKey;
  bootstrapForEach(children, (child) => {
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
    <NavItem
      as={NavLink}
      eventKey={eventKey}
      disabled={disabled}
      id={id}
      className={tabClassName}
    >
      {title}
    </NavItem>
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
      <Nav {...controlledProps} role="tablist" as="nav">
        {bootstrapMap(children, renderTab)}
      </Nav>

      <TabContent>
        {bootstrapMap(children, (child) => {
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
  variant: PropTypes.string,
  transition: PropTypes.oneOfType([
    PropTypes.oneOf([false]),
    PropTypes.elementType,
  ]),
  id: PropTypes.string,
  onSelect: PropTypes.func,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
};

BaseTabs.defaultProps = {
  activeKey: undefined,
  defaultActiveKey: undefined,
  transition: undefined,
  id: undefined,
  onSelect: undefined,
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false,
};

BaseTabs.displayName = 'Tabs';

export default BaseTabs;
