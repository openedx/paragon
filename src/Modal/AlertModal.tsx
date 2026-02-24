import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import ModalDialog from './ModalDialog';

interface AlertModalProps {
  /** Specifies the content of the dialog */
  children: React.ReactNode;
  /** The aria-label of the dialog */
  title: string;
  /** Is the modal dialog open or closed */
  isOpen?: boolean;
  /** Prevent clicking on the backdrop or pressing Esc to close the modal */
  isBlocking?: boolean;
  /** Specifies whether the dialog box should contain 'x' icon button in the top right */
  hasCloseButton?: boolean;
  /** A callback to close the modal dialog */
  onClose?: () => void;
  /** Sizes determine the maximum width of the dialog box */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  /** The visual style of the dialog box */
  variant?: 'default' | 'warning' | 'danger' | 'success';
  /** The label supplied to the close icon button if one is rendered */
  closeLabel?: string;
  /** Specifies class name to append to the base element */
  className?: string;
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll?: boolean;
  /** To show full screen view on mobile screens */
  isFullscreenOnMobile?: boolean;
  /** Specifies whether overflow content inside the modal should be visible */
  isOverflowVisible?: boolean;
  /** Specifies the z-index of the modal */
  zIndex?: number;
  /** Specifies what should be displayed in the footer of the dialog box */
  footerNode?: React.ReactNode;
  /** Icon that will be shown in the header of modal */
  icon?: React.ComponentType;
}

function AlertModal({
  children,
  footerNode = null,
  icon,
  title,
  isOpen = false,
  isBlocking = false,
  hasCloseButton = false,
  onClose = () => {},
  size = 'md',
  variant = 'default',
  closeLabel = 'Close',
  className,
  isFullscreenScroll = false,
  isFullscreenOnMobile,
  isOverflowVisible = false,
  zIndex,
}: AlertModalProps) {
  return (
    <ModalDialog
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      variant={variant}
      hasCloseButton={hasCloseButton}
      closeLabel={closeLabel}
      isFullscreenScroll={isFullscreenScroll}
      isFullscreenOnMobile={isFullscreenOnMobile}
      isBlocking={isBlocking}
      isOverflowVisible={isOverflowVisible}
      zIndex={zIndex}
      className={classNames('pgn__alert-modal', className)}
    >
      <ModalDialog.Header>
        <ModalDialog.Title>
          {icon && (
            <Icon
              data-testid="title-icon"
              src={icon}
              className={classNames('pgn__alert-modal__title_icon')}
            />
          )}
          {title}
        </ModalDialog.Title>
      </ModalDialog.Header>
      <ModalDialog.Body>{children}</ModalDialog.Body>
      {footerNode && <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>}
    </ModalDialog>
  );
}

export default AlertModal;
