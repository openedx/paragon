import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isRequiredIf from 'react-proptype-conditional-require';
import { Launch } from '../../icons';
import Icon from '../Icon';

import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

export const HYPER_LINK_EXTERNAL_LINK_ALT_TEXT = 'in a new tab';
export const HYPER_LINK_EXTERNAL_LINK_TITLE = 'Opens in a new tab';

const Hyperlink = React.forwardRef((props, ref) => {
  const {
    className,
    destination,
    children,
    target,
    onClick,
    externalLinkAlternativeText,
    externalLinkTitle,
    variant,
    isInline,
    showLaunchIcon,
    ...attrs
  } = props;
  let externalLinkIcon;

  if (target === '_blank') {
    const generateRel = () => {
      let { rel } = attrs;
      if (!rel) {
        return 'noopener noreferrer';
      }
      if (!rel.includes('noopener')) {
        rel += ' noopener';
      }
      if (!rel.includes('noreferrer')) {
        rel += ' noreferrer';
      }
      return rel;
    };

    // Add this rel attribute to prevent Reverse Tabnabbing
    attrs.rel = generateRel();
    if (showLaunchIcon) {
      externalLinkIcon = (
        <span
          className="pgn__hyperlink__external-icon"
          title={externalLinkTitle}
        >
          <Icon
            src={Launch}
            screenReaderText={externalLinkAlternativeText}
            style={{ height: '1em', width: '1em' }}
            data-testid="hyperlink-icon"
          />
        </span>
      );
    }
  }

  return (
    <a
      ref={ref}
      className={classNames(
        'pgn__hyperlink',
        `${variant}-link`,
        {
          'standalone-link': !isInline,
          'inline-link': isInline,
        },
        className,
      )}
      href={destination}
      target={target}
      onClick={onClick}
      {...attrs}
    >
      {children}
      {externalLinkIcon}
    </a>
  );
});

Hyperlink.defaultProps = {
  className: undefined,
  target: '_self',
  onClick: () => {},
  externalLinkAlternativeText: HYPER_LINK_EXTERNAL_LINK_ALT_TEXT,
  externalLinkTitle: HYPER_LINK_EXTERNAL_LINK_TITLE,
  variant: 'default',
  isInline: false,
  showLaunchIcon: true,
};

Hyperlink.propTypes = {
  /** specifies the URL */
  destination: PropTypes.string.isRequired,
  /** Content of the hyperlink */
  children: PropTypes.node.isRequired,
  /** Custom class names for the hyperlink */
  className: PropTypes.string,
  /** specifies where the link should open. The default behavior is `_self`, which means that the URL will be
   * loaded into the same browsing context as the current one.
   * If the target is `_blank` (opening a new window) `rel='noopener'` will be added to the anchor tag to prevent
   * any potential [reverse tabnabbing attack](https://www.owasp.org/index.php/Reverse_Tabnabbing).
  */
  target: PropTypes.string,
  /** specifies the callback function when the link is clicked */
  onClick: PropTypes.func,
  /** specifies the text for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkAlternativeText: isRequiredIf(
    PropTypes.string,
    props => props.target === '_blank',
  ),
  /** specifies the title for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkTitle: isRequiredIf(
    PropTypes.string,
    props => props.target === '_blank',
  ),
  /** type of hyperlink */
  variant: PropTypes.oneOf(['default', 'muted', 'brand']),
  /** specify the link style. By default, it will be underlined. */
  isInline: PropTypes.bool,
  /** specify if we need to show launch Icon. By default, it will be visible. */
  showLaunchIcon: PropTypes.bool,
};

export default withDeprecatedProps(Hyperlink, 'Hyperlink', {
  /** specifies the text or element that a URL should be associated with */
  content: {
    deprType: DeprTypes.MOVED,
    newName: 'children',
  },
});
