import * as React from 'react';

export interface MailtoLinkProps {
  children: React.ReactNode;
  className?: string;
  to?: string[] | string;
  cc?: string[] | string;
  bcc?: string[] | string;
  subject?: string;
  body?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  externalLink?: {
    alternativeText: string;
    title: string;
  };
}

declare const MailtoLink: React.ForwardRefExoticComponent<MailtoLinkProps & React.RefAttributes<HTMLAnchorElement>>;

export default MailtoLink;
