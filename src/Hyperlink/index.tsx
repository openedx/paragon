import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  type BsPrefixRefForwardingComponent as ComponentWithAsProp,
  type BsPrefixProps,
} from 'react-bootstrap/esm/helpers';
import { defineMessages, useIntl } from 'react-intl';
import { Launch } from '../../icons';
import Icon from '../Icon';
// @ts-ignore
import { customPropTypeRequirement } from '../utils/propTypes/utils';

export interface HyperlinkProps extends BsPrefixProps, Omit<React.ComponentPropsWithRef<'a'>, 'href' | 'target'> {
  /** specifies the URL */
  destination?: string;
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
  /** specifies where the link should open. The default behavior is `_self`, which means that the URL will be
   * loaded into the same browsing context as the current one.
   * If the target is `_blank` (opening a new window) `rel='noopener'` will be added to the anchor tag to prevent
   * any potential [reverse tabnabbing attack](https://www.owasp.org/index.php/Reverse_Tabnabbing).
   */
  target?: '_blank' | '_self';
}

export type HyperlinkType = ComponentWithAsProp<'a', HyperlinkProps>;

const messages = defineMessages({
  externalLinkAltText: {
    id: 'Hyperlink.externalLinkAltText',
    defaultMessage: 'in a new tab',
  },
  externalLinkTitle: {
    id: 'Hyperlink.externalLinkTitle',
    defaultMessage: 'Opens in a new tab',
  },
});

const Hyperlink = forwardRef<HTMLAnchorElement, HyperlinkProps>(({
  as: Component = 'a',
  className,
  destination,
  children,
  target = '_self',
  onClick,
  externalLinkAlternativeText,
  externalLinkTitle,
  variant = 'default',
  isInline = false,
  showLaunchIcon = true,
  ...attrs
}, ref) => {
  const intl = useIntl();
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
          title={externalLinkTitle || intl.formatMessage(messages.externalLinkTitle)}
        >
          <Icon
            src={Launch}
            screenReaderText={externalLinkAlternativeText || intl.formatMessage(messages.externalLinkAltText)}
            style={{ height: '1em', width: '1em' }}
            data-testid="hyperlink-icon"
          />
        </span>
      );
    }
  }

  const additionalProps: Record<string, any> = { ...attrs };
  if (destination) {
    additionalProps.href = destination;
  }

  return (
    <Component
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
      target={target}
      onClick={onClick}
      {...additionalProps}
    >
      {children}
      {externalLinkIcon}
    </Component>
  );
});

Hyperlink.propTypes = {
  /** specifies the component element type to render for the hyperlink */
  // @ts-ignore
  as: PropTypes.elementType,
  /** specifies the URL; required iff `as` prop is a standard anchor tag */
  destination: customPropTypeRequirement(
    PropTypes.string,
    ({ as }: { as: React.ElementType }) => as && as === 'a',
    // "[`destination` is required when]..."
    'the `as` prop is a standard anchor element (i.e., "a")',
  ),
  /** Content of the hyperlink */
  // @ts-ignore
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

Hyperlink.defaultProps = {
  as: 'a',
  className: undefined,
  destination: undefined,
  externalLinkAlternativeText: undefined,
  externalLinkTitle: undefined,
  isInline: false,
  onClick: undefined,
  showLaunchIcon: true,
  target: '_self',
  variant: 'default',
};

Hyperlink.displayName = 'Hyperlink';

export default Hyperlink;
