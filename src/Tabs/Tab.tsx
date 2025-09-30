import React from 'react';
import BaseTab from 'react-bootstrap/Tab';

interface TabProps {
  /** Specifies the `Tab` navigation title. */
  title: React.ReactNode;
  /** Specifies notification bubble content. It appears on the top right of the `Tab`. */
  notification?: React.ReactNode;
  /** Specifies whether `Tab` is disabled. */
  disabled?: boolean;
  /**
   * A unique identifier for the Component, the `eventKey` makes it distinguishable
   * from others in a set. Similar to React's `key` prop, in that it only needs to be
   * unique amongst the Components siblings, not globally.
   */
  eventKey?: string | number;
  /** Specifies class name to append to the base element. */
  tabClassName?: string;
}

function Tab(props: TabProps) {
  return <BaseTab {...props} />;
}

export default Tab;
