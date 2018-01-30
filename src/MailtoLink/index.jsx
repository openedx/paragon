import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
import isRequiredIf from 'react-proptype-conditional-require';
import mailtoLink from 'mailto-link';

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

  const externalLinkAlternativeText = externalLink.alternativeLink;
  const externalLinkTitle = externalLink.title;
  const destination = mailtoLink({
    to, cc, bcc, subject, body,
  });

  return Hyperlink({
    destination,
    content,
    target,
    onClick,
    externalLinkAlternativeText,
    externalLinkTitle,
    ...other,
  });
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
};

MailtoLink.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
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
