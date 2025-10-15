import React, { ReactNode } from 'react';
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
} as const;

interface PageBannerProps {
  /** An element rendered inside the `Page Banner`. */
  children: ReactNode;
  /** Boolean used to control whether `Page Banner` is dismissible. */
  dismissible: boolean;
  /** An element to be set as the dismiss button's alt text (preferably a translated string). */
  dismissAltText: string;
  /** A function to be called on dismiss of the `Page Banner`. */
  onDismiss: () => void;
  /** Boolean used to control whether the Page Banner shows. */
  show: boolean;
  /** A string designating which color variant of the `Page Banner` to display.
   * The full list of variants can be seen [here.](https://github.com/openedx/paragon/blob/release-23.x/src/PageBanner/index.tsx)
   */
  variant: keyof typeof VARIANTS;
}

function PageBanner({
  children,
  dismissible = false,
  dismissAltText = PAGE_BANNER_DISMISS_ALT_TEXT,
  onDismiss = () => {},
  show = true,
  variant = VARIANTS.accentA,
  ...rest
}: PageBannerProps) {
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

export default PageBanner;
