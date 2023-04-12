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

export default function Tabs(props: TabsProps): JSX.Element;

export declare function Tab(props: TabProps): JSX.Element;
