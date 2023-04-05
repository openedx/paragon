import * as React from 'react';

export interface TabsProps {
  children: React.ReactNode;
  className?: string;
  moreTabText?: string;
  defaultActiveKey?: string;
  activeKey?: string;
}

export interface TabProps {
  title: React.ReactNode;
  notification?: React.ReactNode;
  disabled?: boolean;
  eventKey?: string | number;
  tabClassName?: string;
}

declare const Tabs: React.FC<TabsProps>;
declare const Tab: React.FC<TabProps>;

export default Tabs;
export { Tab };
