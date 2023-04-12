import React from 'react';

declare const HYPER_LINK_EXTERNAL_LINK_ALT_TEXT: string;
declare const HYPER_LINK_EXTERNAL_LINK_TITLE: string;

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

export {
    HYPER_LINK_EXTERNAL_LINK_ALT_TEXT,
    HYPER_LINK_EXTERNAL_LINK_TITLE,
    Hyperlink,
    HyperlinkProps,
};
