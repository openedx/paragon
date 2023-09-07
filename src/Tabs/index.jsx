import React, { useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BaseTabs from 'react-bootstrap/Tabs';
import TabsDeprecated from './deprecated';
import Bubble from '../Bubble';
import Dropdown from '../Dropdown';
import useIndexOfLastVisibleChild from '../hooks/useIndexOfLastVisibleChild';
import Tab from './Tab';

export const MORE_TAB_TEXT = 'More...';

function Tabs({
  children,
  className,
  moreTabText = MORE_TAB_TEXT,
  defaultActiveKey,
  activeKey,
  ...props
}) {
  const containerElementRef = useRef(null);
  const overflowElementRef = useRef(null);
  const indexOfLastVisibleChild = useIndexOfLastVisibleChild(
    containerElementRef.current?.children[0],
    overflowElementRef.current?.parentNode,
  );

  useEffect(() => {
    if (containerElementRef.current) {
      const observer = new MutationObserver((mutations => {
        mutations.forEach(mutation => {
          // React-Bootstrap attribute 'data-rb-event-key' is responsible for the tab identification
          const eventKey = mutation.target.getAttribute('data-rb-event-key');
          // React-Bootstrap attribute 'aria-selected' is responsible for selected/unselected state
          const isActive = mutation.target.getAttribute('aria-selected') === 'true';
          // datakey attribute is added manually to the dropdown
          // elements so that they correspond to the native tabs' eventKey
          const element = containerElementRef.current.querySelector(`[datakey='${eventKey}']`);
          const moreTab = containerElementRef.current.querySelector('.pgn__tab_more');
          if (isActive) {
            element?.classList.add('active');
            // Here we add active class to the 'More Tab' if element exists in the dropdown
            if (element) {
              moreTab.classList.add('active');
            } else {
              moreTab.classList.remove('active');
            }
          } else {
            element?.classList.remove('active');
          }
        });
      }));
      observer.observe(containerElementRef.current, {
        attributes: true, subtree: true, attributeFilter: ['aria-selected'],
      });
      return () => observer.disconnect();
    }
    return undefined;
  }, []);

  useEffect(() => {
    if (overflowElementRef.current?.parentNode) {
      overflowElementRef.current.parentNode.tabIndex = -1;
    }
  }, [overflowElementRef.current?.parentNode]);

  const handleDropdownTabClick = (eventKey) => {
    const hiddenTab = containerElementRef.current.querySelector(`[data-rb-event-key='${eventKey}']`);
    hiddenTab.click();
  };

  const tabsChildren = useMemo(() => {
    const indexOfOverflowStart = indexOfLastVisibleChild + 1;
    const handleDropdownKeyPress = (e, eventKey) => {
      if (e.key === 'Enter') {
        handleDropdownTabClick(eventKey);
      }
    };
    const childrenList = React.Children.map(children, (child, index) => {
      if (child?.type?.name !== 'Tab' && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(
          `Tabs children can only be of type Tab. ${children[index]} was passed instead.`,
        );
      }
      if (!React.isValidElement(child)) {
        return child;
      }
      const {
        title, notification, tabClassName, ...rest
      } = child.props;
      let newTitle;
      if (notification) {
        newTitle = (
          <>
            {title}
            <Bubble
              variant="error"
              role="status"
              className="pgn__tab-notification"
              aria-live="polite"
              expandable
            >
              {notification}
            </Bubble>
          </>
        );
      } else {
        newTitle = title;
      }
      const tabClass = index > indexOfLastVisibleChild ? 'pgn__tab_invisible' : '';
      const modifiedTab = React.cloneElement(child, {
        ...rest,
        title: newTitle,
        tabClassName: classNames(tabClass, tabClassName),
      });
      return modifiedTab;
    });
    let moreTabHasNotification = false;
    const overflowChildren = childrenList.slice(indexOfOverflowStart)
      .map(overflowChild => {
        if (!moreTabHasNotification && overflowChild.props.notification) {
          moreTabHasNotification = true;
        }
        return (
          <Dropdown.Item
            as="li"
            tabIndex="0"
            key={`${overflowChild.props.eventKey}overflow`}
            onClick={() => handleDropdownTabClick(overflowChild.props.eventKey)}
            onKeyPress={(e) => handleDropdownKeyPress(e, overflowChild.props.eventKey)}
            disabled={overflowChild.props.disabled}
            datakey={overflowChild.props.eventKey}
            className={classNames({
              active: overflowChild.props.eventKey === defaultActiveKey || overflowChild.props.eventKey === activeKey,
            }, 'pgn__tabs__dropdown-item')}
          >
            {overflowChild.props.title}
          </Dropdown.Item>
        );
      });

    childrenList.splice(indexOfOverflowStart, 0, (<Tab
      key="moreTabKey"
      tabClassName={classNames(!overflowChildren.length && 'pgn__tab_invisible', 'pgn__tab_more')}
      title={(
        <Dropdown ref={overflowElementRef}>
          <Dropdown.Toggle
            variant="link"
            className="nav-link"
            id="pgn__tab-toggle"
          >
            {moreTabText}
            {moreTabHasNotification && (
              <Bubble
                variant="error"
                role="status"
                className="pgn__tab-notification"
              />
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul" className="dropdown-menu-right">{overflowChildren}</Dropdown.Menu>
        </Dropdown>
      )}
    />
    ));
    return childrenList;
  }, [activeKey, children, defaultActiveKey, indexOfLastVisibleChild, moreTabText]);

  return (
    <div ref={containerElementRef}>
      <BaseTabs
        defaultActiveKey={defaultActiveKey}
        activeKey={activeKey}
        {...props}
        className={classNames(className, 'pgn__tabs')}
      >
        {tabsChildren}
      </BaseTabs>
    </div>
  );
}

Tabs.propTypes = {
  /** Specifies variant to use. */
  variant: PropTypes.oneOf(['tabs', 'pills', 'inverse-tabs', 'inverse-pills', 'button-group']),
  /** Specifies elements that is processed to create tabs. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies text for the 'More' tab. */
  moreTabText: PropTypes.string,
  /** Specifies default active tab (uncontrolled usage). */
  defaultActiveKey: PropTypes.string,
  /** Specifies active tab (controlled usage). */
  activeKey: PropTypes.string,
};

Tabs.defaultProps = {
  variant: 'tabs',
  className: undefined,
  moreTabText: MORE_TAB_TEXT,
  defaultActiveKey: undefined,
  activeKey: undefined,
};

Tabs.Deprecated = TabsDeprecated;

export default Tabs;
export { Tab };
export { default as TabContainer } from 'react-bootstrap/TabContainer';
export { default as TabContent } from 'react-bootstrap/TabContent';
export { default as TabPane } from 'react-bootstrap/TabPane';
