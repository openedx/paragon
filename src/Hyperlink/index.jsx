import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isRequiredIf from 'react-proptype-conditional-require';
import Icon from '../Icon';
import { Launch } from '../../icons';

import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

function Hyperlink(props) {
  const {
    destination,
    children,
    target,
    onClick,
    externalLinkAlternativeText,
    externalLinkTitle,
    variant,
    isInline,
    showLaunchIcon,
    ...other
  } = props;

  let externalLinkIcon;

  if (target === '_blank') {
    // Add this rel attribute to prevent Reverse Tabnabbing
    other.rel = other.rel ? `noopener ${other.rel}` : 'noopener';
    if (showLaunchIcon) {
      externalLinkIcon = (
        // Space between content and icon
        <span className="d-inline-block align-middle ml-2">
          <Icon src={Launch} style={{ height: '1em', width: '1em' }} />
        </span>
      );
    }
  }

  return (
    <a
      className={classNames(
        `${variant}-link`,
        {
          'standalone-link': !isInline,
          'inline-link': isInline,
        },
      )}
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
  variant: 'default',
  isInline: false,
  showLaunchIcon: true,
};

Hyperlink.propTypes = {
  /** specifies the URL */
  destination: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  /** specifies where the link should open. The default behavior is `_self`, which means that the URL will be loaded into the same browsing context as the current one. If the target is `_blank` (opening a new window) `rel='noopener'` will be added to the anchor tag to prevent any potential [reverse tabnabbing attack](https://www.owasp.org/index.php/Reverse_Tabnabbing).
   */
  target: PropTypes.string,
  /** specifies the callback function when the link is clicked */
  onClick: PropTypes.func,
  // eslint-disable-next-line max-len
  /** specifies the text for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkAlternativeText: isRequiredIf(
    PropTypes.string,
    props => props.target === '_blank',
  ),
  // eslint-disable-next-line max-len
  /** specifies the title for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkTitle: isRequiredIf(
    PropTypes.string,
    props => props.target === '_blank',
  ),
  /** type of hyperlink */
  variant: PropTypes.oneOf(['default', 'muted', 'brand']),
  /** specify the link style. By default it will be underlined. */
  isInline: PropTypes.bool,
  /** specify if we need to show launch Icon. By default it will be visible. */
  showLaunchIcon: PropTypes.bool,
};

export default withDeprecatedProps(Hyperlink, 'Hyperlink', {
  /** specifies the text or element that a URL should be associated with */
  content: {
    deprType: DEPR_TYPES.MOVED,
    newName: 'children',
  },
});
