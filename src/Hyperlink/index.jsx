import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


function Hyperlink(props) {
  const {
    destination,
    children,
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
          className={classNames('fa', 'fa-external-link')}
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
    >{children}{externalLinkIcon}
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
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func,
  externalLinkAlternativeText: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
  externalLinkTitle: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
};

export default withDeprecatedProps(Hyperlink, {
  content: {
    deprType: DEPR_TYPES.MOVED,
    newName: 'children',
  },
});
