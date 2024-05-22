import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Launch } from '../../icons';
import Icon from '../Icon';

export const HYPER_LINK_EXTERNAL_LINK_ALT_TEXT = 'in a new tab';
export const HYPER_LINK_EXTERNAL_LINK_TITLE = 'Opens in a new tab';

interface Props extends Omit<React.ComponentPropsWithRef<'a'>, 'href' | 'target'> {
  /** specifies the URL */
  destination: string;
  /** Content of the hyperlink */
  children: React.ReactNode;
  /** Custom class names for the hyperlink */
  className?: string;
  /** Alt text for the icon indicating that this link opens in a new tab, if target="_blank". e.g. _("in a new tab") */
  externalLinkAlternativeText?: string;
  /** Tooltip text for the "opens in new tab" icon, if target="_blank". e.g. _("Opens in a new tab"). */
  externalLinkTitle?: string;
  /** type of hyperlink */
  variant?: 'default' | 'muted' | 'brand';
  /** Display the link with an underline. By default, it is only underlined on hover. */
  isInline?: boolean;
  /** specify if we need to show launch Icon. By default, it will be visible. */
  showLaunchIcon?: boolean;
  target?: '_blank' | '_self';
}

const Hyperlink = React.forwardRef<HTMLAnchorElement, Props>(({
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
}, ref) => {
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
  target: PropTypes.oneOf(['_blank', '_self']),
  /** specifies the callback function when the link is clicked */
  onClick: PropTypes.func,
  /** Alt text for the icon indicating that this link opens in a new tab, if target="_blank". e.g. _("in a new tab") */
  externalLinkAlternativeText: PropTypes.string,
  /** Tooltip text for the "opens in new tab" icon, if target="_blank". e.g. _("Opens in a new tab"). */
  externalLinkTitle: PropTypes.string,
  /** type of hyperlink */
  variant: PropTypes.oneOf(['default', 'muted', 'brand']),
  /** Display the link with an underline. By default, it is only underlined on hover. */
  isInline: PropTypes.bool,
  /** specify if we need to show launch Icon. By default, it will be visible. */
  showLaunchIcon: PropTypes.bool,
};

export default Hyperlink;
