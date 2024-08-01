import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Close } from '../../icons';
import Icon from '../Icon';
import IconButton from '../IconButton';

export const PAGE_BANNER_DISMISS_ALT_TEXT = 'Dismiss';

export const VARIANTS = {
  light: 'light',
  dark: 'dark',
  warning: 'warning',
  accentA: 'accentA',
  accentB: 'accentB',
};

function PageBanner({
  children, dismissible, dismissAltText, onDismiss, show, variant, ...rest
}) {
  if (!show) {
    return null;
  }
  return (
    <div
      className={classNames(
        'pgn__pageBanner-component',
        `pgn__pageBanner__${variant}`,
      )}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      {...rest}
    >
      <div className="pgn__pageBanner-content">
        { children }
      </div>
      {dismissible && (
        <span className="pgn__pageBanner-dismissButtonContainer">
          <IconButton
            onClick={onDismiss}
            iconAs={Icon}
            alt={dismissAltText}
            src={Close}
            size="inline"
            invertColors={variant === 'dark'}
            variant={variant === 'dark' ? 'dark' : 'black'}
          />
        </span>
      )}
    </div>
  );
}

PageBanner.propTypes = {
  /** An element rendered inside the `Page Banner`. */
  children: PropTypes.node,
  /** Boolean used to control whether `Page Banner` is dismissible. */
  dismissible: PropTypes.bool,
  /** An element to be set as the dismiss button's alt text (preferably a translated string). */
  dismissAltText: PropTypes.node,
  /** A function to be called on dismiss of the `Page Banner`. */
  onDismiss: PropTypes.func,
  /** Boolean used to control whether the Page Banner shows. */
  show: PropTypes.bool,
  /** A string designating which color variant of the `Page Banner` to display */
  variant: PropTypes.oneOf([VARIANTS.light, VARIANTS.dark, VARIANTS.warning, VARIANTS.accentA, VARIANTS.accentB]),
};

PageBanner.defaultProps = {
  children: undefined,
  dismissible: false,
  dismissAltText: PAGE_BANNER_DISMISS_ALT_TEXT,
  onDismiss: () => {},
  show: true,
  variant: VARIANTS.accentA,
};

export default PageBanner;
