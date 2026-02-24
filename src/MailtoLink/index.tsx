import React from 'react';
import mailtoLink from 'mailto-link';
import classNames from 'classnames';

import Hyperlink from '../Hyperlink';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

export const MAIL_TO_LINK_EXTERNAL_LINK_ALTERNATIVE_TEXT = 'Dismiss';
export const MAIL_TO_LINK_EXTERNAL_LINK_TITLE = 'Opens in a new tab';

interface MailtoLinkProps {
  /** Content of the MailtoLink */
  children: React.ReactNode;
  /** Custom class names for the MailtoLink */
  className?: string;
  /** Specifies the email's recipients */
  to?: string | string[];
  /** Specifies the email's carbon copy recipients */
  cc?: string | string[];
  /** Specifies the email's blind carbon copy recipients */
  bcc?: string | string[];
  /** Specifies the email's subject */
  subject?: string;
  /** Specifies the email's body */
  body?: string;
  /** Specifies where the link should open. The default behavior is `_self`,
   * which means that the URL will be loaded into the same browsing context as the current one */
  target?: '_self' | '_blank';
  /** Specifies the callback function when the link is clicked */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** The object that contains the `alternativeText` and `title` fields which specify
   * the text and title for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLink?: {
    alternativeText?: string;
    title?: string;
  };
}

const MailtoLink = React.forwardRef<HTMLAnchorElement, MailtoLinkProps>(({
  children,
  className,
  to = [],
  cc = [],
  bcc = [],
  subject = '',
  body = '',
  target = '_self',
  onClick,
  externalLink = {
    alternativeText: MAIL_TO_LINK_EXTERNAL_LINK_ALTERNATIVE_TEXT,
    title: MAIL_TO_LINK_EXTERNAL_LINK_TITLE,
  },
  ...attrs
}, ref) => {
  const externalLinkAlternativeText = externalLink.alternativeText;
  const externalLinkTitle = externalLink.title;
  const destination = mailtoLink({
    to, cc, bcc, subject, body,
  });

  const hyperlinkProps = {
    destination,
    target,
    onClick,
    externalLinkAlternativeText,
    externalLinkTitle,
    ...attrs,
  };

  return (
    <Hyperlink
      ref={ref}
      className={classNames('pgn__mailtolink', className)}
      {...hyperlinkProps}
    >
      {children}
    </Hyperlink>
  );
});

export default withDeprecatedProps(MailtoLink, 'MailtoLink', {
  content: {
    deprType: DeprTypes.MOVED,
    newName: 'children',
  },
});
