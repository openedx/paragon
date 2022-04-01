import React from 'react';
import PropTypes from 'prop-types';
import BaseTab from 'react-bootstrap/Tab';

const Tab = (props) => <BaseTab {...props} />;

Tab.propTypes = {
  /** Specifies the `Tab` navigation title. */
  title: PropTypes.node.isRequired,
  /** Specifies notification bubble content. It appears on the top right of the `Tab`. */
  notification: PropTypes.node,
  /** Specifies whether `Tab` is disabled. */
  disabled: PropTypes.bool,
  /**
   * A unique identifier for the Component, the `eventKey` makes it distinguishable
   * from others in a set. Similar to React's `key` prop, in that it only needs to be
   * unique amongst the Components siblings, not globally.
   */
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Specifies class name to append to the base element. */
  tabClassName: PropTypes.string,
};

Tab.defaultProps = {
  notification: undefined,
  disabled: undefined,
  eventKey: undefined,
  tabClassName: undefined,
};

export default Tab;
