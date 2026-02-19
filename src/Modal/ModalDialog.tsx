import React from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useIntl } from 'react-intl';
import ModalLayer from './ModalLayer';

// @ts-ignore for now - this needs to be converted to TypeScript
import ModalCloseButton from './ModalCloseButton';
import ModalDialogHeader from './ModalDialogHeader';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogTitle from './ModalDialogTitle';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogFooter from './ModalDialogFooter';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogBody from './ModalDialogBody';
// @ts-ignore for now - this needs to be converted to TypeScript
import ModalDialogHero from './ModalDialogHero';

import Icon from '../Icon';
import IconButton from '../IconButton';
import useToggle from '../hooks/useToggleHook';
import { Close, FullscreenExit, Fullscreen } from '../../icons';
import messages from './messages';

interface Props {
  /** Specifies the content of the dialog */
  children: React.ReactNode;
  /** The aria-label of the dialog */
  title: string;
  /** A callback to close the modal dialog, e.g. when Escape is pressed */
  onClose: () => void;
  /** Is the modal dialog open or closed? */
  isOpen?: boolean;
  /** The close 'x' icon button in the top right of the dialog box */
  hasCloseButton?: boolean;
  /** Size determines the maximum width of the dialog box */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  /** The visual style of the dialog box */
  variant?: 'default' | 'warning' | 'danger' | 'success' | 'dark';
  /** The label supplied to the close icon button if one is rendered */
  closeLabel?: string;
  /** Specifies class name to append to the base element */
  className?: string;
  /** Renders the fullscreen icon button in the top right of the dialog box. It will not be rendered (even if set to
   * true) if the dialog is fullscreen for another reason (e.g. isFullscreenOnMobile is true and the viewport is
   * mobile, or the dialog size is already set to fullscreen) */
  hasFullscreenButton?: boolean;
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ``ModalDialog``. Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll?: boolean;
  /** To show full screen view on mobile screens */
  isFullscreenOnMobile?: boolean;
  /** Prevent clicking on the backdrop or pressing Esc to close the modal */
  isBlocking?: boolean;
  /** Specifies the z-index of the modal */
  zIndex?: number;
  /**
   * Specifies whether overflow content inside the modal should be visible.
   * - `true` - content that exceeds the modal boundaries will remain visible outside the modal's main viewport,
   * rather than being clipped or hidden.
   * - `false` - any overflow content will be clipped to fit within the modal's dimensions.
   */
  isOverflowVisible: boolean;
}

function ModalDialog({
  children,
  title,
  isOpen = false,
  onClose,
  size = 'md',
  variant = 'default',
  hasCloseButton = true,
  closeLabel,
  hasFullscreenButton = false,
  isFullscreenScroll = false,
  className,
  isFullscreenOnMobile = false,
  isBlocking = false,
  zIndex,
  isOverflowVisible,
}: Props) {
  const intl = useIntl();
  const closeButtonText = closeLabel || intl.formatMessage(messages.closeButtonText);
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const alwaysFullscreen = (isFullscreenOnMobile && isMobile) || size === 'fullscreen';

  const [isFullscreen, , , toggleFullscreen] = useToggle(alwaysFullscreen);

  return (
    <ModalLayer isOpen={isOpen} onClose={onClose} isBlocking={isBlocking} zIndex={zIndex}>
      <div
        role="dialog"
        aria-label={title}
        className={classNames(
          'pgn__modal',
          {
            [`pgn__modal-${isFullscreen ? 'fullscreen' : size}`]: size,
            [`pgn__modal-${variant}`]: variant,
            'pgn__modal-scroll-fullscreen': isFullscreenScroll,
            'pgn__modal-visible-overflow': isOverflowVisible,
          },
          className,
        )}
      >
        {(hasCloseButton || hasFullscreenButton) && (
          <div className="pgn__modal-title-buttons-container">
            {hasFullscreenButton && !alwaysFullscreen && (
              <IconButton
                src={isFullscreen ? FullscreenExit : Fullscreen}
                iconAs={Icon}
                invertColors={variant === 'dark'}
                onClick={toggleFullscreen}
                alt={intl.formatMessage(messages.fullscreenButtonText)}
              />
            )}
            {hasCloseButton && (
              <ModalCloseButton
                as={IconButton}
                iconAs={Icon}
                invertColors={variant === 'dark'}
                src={Close}
                alt={closeButtonText}
              />
            )}
          </div>
        )}
        {children}
      </div>
    </ModalLayer>
  );
}

ModalDialog.Header = ModalDialogHeader;
ModalDialog.Title = ModalDialogTitle;
ModalDialog.Footer = ModalDialogFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalDialogBody;
ModalDialog.Hero = ModalDialogHero;

export default ModalDialog;
