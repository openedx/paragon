import React from 'react';
import { Options } from 'mailto-link';

export interface MailtoLinkProps extends Options {
    children: React.ReactNode;
    className?: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    externalLink?: {
        alternativeText: string;
        title: string;
    };
}

declare const MailtoLink: React.ForwardRefExoticComponent<MailtoLinkProps>;

export default MailtoLink;
