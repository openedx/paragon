import React from 'react';
import BaseTabs from 'react-bootstrap/Tabs';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TabsDeprecated from './deprecated';
import Bubble from '../Bubble';

const Tabs = ({
  children,
  className,
  ...props
}) => (
  <BaseTabs {...props} className={classNames(className, 'pgn__tabs')}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }
      const { title, notification, ...rest } = child.props;
      let newTitle;
      if (notification) {
        newTitle = (
          <>
            {title}
            <Bubble variant="error" className="pgn__tab-notification">{notification}</Bubble>
          </>
        );
      } else {
        newTitle = title;
      }
      const modifiedTab = React.cloneElement(child, { ...rest, title: newTitle });
      return modifiedTab;
    })}
  </BaseTabs>
);

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
