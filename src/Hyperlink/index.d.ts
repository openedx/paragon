import React from 'react';

export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    destination: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    externalLinkAlternativeText?: string;
    externalLinkTitle?: string;
    variant?: 'default' | 'muted' | 'brand';
    isInline?: boolean;
    showLaunchIcon?: boolean;
}

declare const Hyperlink: React.ForwardRefExoticComponent<HyperlinkProps & React.RefAttributes<HTMLAnchorElement>>;

export { Hyperlink };
