import React from 'react';
import BaseTabs from 'react-bootstrap/Tabs';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TabsDeprecated from './deprecated';
import Bubble from '../Bubble';

const Tabs = ({
  children,
  className,
  ...props
}) => {
  const newChildren = [];
  React.Children.forEach(children, (child) => {
    if (!child) { return; }

    const { title, notification, ...rest } = child.props;

    const newTitle = notification ? (
      <>
        {title}
        <Bubble variant="error" className="pgn__tab-notification">{notification}</Bubble>
      </>
    ) : title;
    const modifiedTab = React.createElement(child.type, { ...rest, title: newTitle, key: uuidv4() });
    newChildren.push(modifiedTab);
  });

  return (
    <BaseTabs {...props} className={classNames(className, 'pgn__tabs')}>
      {newChildren}
    </BaseTabs>
  );
};

Tabs.propTypes = {
  /** Specifies elements that is processed to create tabs. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

Tabs.defaultProps = {
  className: undefined,
};

Tabs.Deprecated = TabsDeprecated;

export default Tabs;
export { default as Tab } from './Tab';
export { default as TabContainer } from 'react-bootstrap/TabContainer';
export { default as TabContent } from 'react-bootstrap/TabContent';
export { default as TabPane } from 'react-bootstrap/TabPane';
