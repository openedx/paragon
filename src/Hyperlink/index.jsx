import React from 'react';
import classNames from 'classnames';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

function Hyperlink(props) {
  const {
    destination,
    content,
    target,
    onClick,
    externalLinkAlternativeText,
    externalLinkTitle,
    ...other
  } = props;

  let externalLinkIcon;

  if (target === '_blank') {
    externalLinkIcon = (
      // Space between content and icon
      <span>{' '}
        <span
          className={classNames(FontAwesomeStyles.fa, FontAwesomeStyles['fa-external-link'])}
          aria-hidden={false}
          aria-label={externalLinkAlternativeText}
          title={externalLinkTitle}
        />
      </span>
    );
  }

  return (
    <a
      href={destination}
      target={target}
      onClick={onClick}
      {...other}
    >{content}{externalLinkIcon}
    </a>
  );
}

Hyperlink.defaultProps = {
  target: '_self',
  onClick: () => {},
  externalLinkAlternativeText: 'Opens in a new window',
  externalLinkTitle: 'Opens in a new window',
};

Hyperlink.propTypes = {
  destination: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func,
  externalLinkAlternativeText: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
  externalLinkTitle: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
};

export default Hyperlink;
