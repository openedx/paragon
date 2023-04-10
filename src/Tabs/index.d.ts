import React from 'react';

export interface TabsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  moreTabText?: string;
  defaultActiveKey?: string;
  activeKey?: string;
}

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: React.ReactNode;
  notification?: React.ReactNode;
  disabled?: boolean;
  eventKey?: string | number;
  tabClassName?: string;
}

declare const Tabs: React.FC<TabsProps>;
declare const Tab: React.FC<TabProps>;


export { Tab };
export default Tabs;
