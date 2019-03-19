import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
import isRequiredIf from 'react-proptype-conditional-require';
import mailtoLink from 'mailto-link';

import propShim from '../propShim';
import Hyperlink from '../Hyperlink';

const MailtoLink = (props) => {
  const {
    to,
    cc,
    bcc,
    subject,
    body,
    content,
    target,
    onClick,
    externalLink,
    ...other
  } = props;

  const destination = mailtoLink({
    to, cc, bcc, subject, body,
  });

  const linkProps = {
    target,
    onClick,
    destination,
    externalLinkAlternativeText: externalLink.alternativeLink,
    externalLinkTitle: externalLink.title,
    children: propShim(props, 'children', 'content', 'MailtoLink'),
    ...other,
  };

  return Hyperlink(linkProps);
};

MailtoLink.defaultProps = {
  to: [],
  cc: [],
  bcc: [],
  subject: '',
  body: '',
  target: '_self',
  onClick: null,
  externalLink: {
    alternativeText: 'Opens in a new window',
    title: 'Opens in a new window',
  },
  content: undefined,
  children: undefined,
};

MailtoLink.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // Children should be marked required after removing content
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  to: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  cc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  bcc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  subject: PropTypes.string,
  body: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  externalLink: PropTypes.shape({
    alternativeText: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
    title: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
  }),
};

export default MailtoLink;
