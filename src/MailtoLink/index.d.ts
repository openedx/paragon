import { FC, MouseEventHandler, ReactNode } from 'react';

export interface IMailtoLink {
  children: ReactNode;
  className?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  subject?: string;
  body?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  externalLink?: {
    alternativeText: string;
    title: string;
  };
}

declare const MailtoLink: FC<IMailtoLink>;

export default MailtoLink;
