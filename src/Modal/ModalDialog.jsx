import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import ModalLayer from './ModalLayer';
import ModalCloseButton from './ModalCloseButton';
import ModalDialogHeader from './ModalDialogHeader';
import ModalDialogTitle from './ModalDialogTitle';
import ModalDialogFooter from './ModalDialogFooter';
import ModalDialogBody from './ModalDialogBody';
import ModalDialogHero from './ModalDialogHero';

import Icon from '../Icon';
import IconButton from '../IconButton';
import { Close } from '../../icons';

export const MODAL_DIALOG_CLOSE_LABEL = 'Close';

function ModalDialog({
  children,
  title,
  isOpen,
  onClose,
  size,
  variant,
  hasCloseButton,
  closeLabel,
  isFullscreenScroll,
  className,
  isFullscreenOnMobile,
  isBlocking,
  zIndex,
}) {
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
   * Prevent clicking on the backdrop to close the modal
   */
  isBlocking: PropTypes.bool,
  zIndex: PropTypes.number,
};

ModalDialog.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
  closeLabel: MODAL_DIALOG_CLOSE_LABEL,
  className: undefined,
  isFullscreenScroll: false,
  isFullscreenOnMobile: false,
  isBlocking: false,
  zIndex: undefined,
};

ModalDialog.Header = ModalDialogHeader;
ModalDialog.Title = ModalDialogTitle;
ModalDialog.Footer = ModalDialogFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalDialogBody;
ModalDialog.Hero = ModalDialogHero;

export default ModalDialog;
