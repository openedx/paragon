import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
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
import { Close } from '../../icons';

export const MODAL_DIALOG_CLOSE_LABEL = 'Close';

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
  /** Specifies whether overflow is visible in the modal */
  isOverflowVisible?: boolean;
}

function ModalDialog({
  children,
  title,
  isOpen = false,
  onClose,
  size = 'md',
  variant = 'default',
  hasCloseButton = true,
  closeLabel = MODAL_DIALOG_CLOSE_LABEL,
  isFullscreenScroll = false,
  className,
  isFullscreenOnMobile = false,
  isBlocking = false,
  zIndex,
  isOverflowVisible = true,
}: Props) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const showFullScreen = (isFullscreenOnMobile && isMobile);
  return (
    <ModalLayer isOpen={isOpen} onClose={onClose} isBlocking={isBlocking} zIndex={zIndex}>
      <div
        role="dialog"
        aria-label={title}
        className={classNames(
          'pgn__modal',
          {
            [`pgn__modal-${showFullScreen ? 'fullscreen' : size}`]: size,
            [`pgn__modal-${variant}`]: variant,
            'pgn__modal-scroll-fullscreen': isFullscreenScroll,
            'pgn__modal-visible-overflow': isOverflowVisible,
          },
          className,
        )}
      >
        {hasCloseButton && (
          <div className="pgn__modal-close-container">
            <ModalCloseButton
              as={IconButton}
              iconAs={Icon}
              invertColors={variant === 'dark'}
              src={Close}
              alt={closeLabel}
            />
          </div>
        )}
        {children}
      </div>
    </ModalLayer>
  );
}

ModalDialog.propTypes = {
  /**
   *  Specifies the content of the dialog
   */
  children: PropTypes.node.isRequired,
  /**
   * The aria-label of the dialog
   */
  title: PropTypes.string.isRequired,
  /**
   * A callback to close the modal dialog
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Is the modal dialog open or closed
   */
  isOpen: PropTypes.bool,
  /**
   * The close 'x' icon button in the top right of the dialog box
   */
  hasCloseButton: PropTypes.bool,
  /**
   * Sizes determine the maximum width of the dialog box
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /**
   * The visual style of the dialog box
   */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
  /**
   * The label supplied to the close icon button if one is rendered
   */
  closeLabel: PropTypes.string,
  /**
   *  Specifies class name to append to the base element
   */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ``ModalDialog``. Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /**
   * To show full screen view on mobile screens
   */
  isFullscreenOnMobile: PropTypes.bool,
  /**
   * Prevent clicking on the backdrop or pressing Esc to close the modal
   */
  isBlocking: PropTypes.bool,
  /**
   * Specifies the z-index of the modal
   */
  zIndex: PropTypes.number,
  /**
   * Specifies whether overflow content inside the modal should be visible.
   * - `true` - content that exceeds the modal boundaries will remain visible outside the modal's main viewport,
   * rather than being clipped or hidden.
   * - `false` - any overflow content will be clipped to fit within the modal's dimensions.
   */
  isOverflowVisible: PropTypes.bool.isRequired,
};

ModalDialog.Header = ModalDialogHeader;
ModalDialog.Title = ModalDialogTitle;
ModalDialog.Footer = ModalDialogFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalDialogBody;
ModalDialog.Hero = ModalDialogHero;

export default ModalDialog;
