import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import ModalDialog from './ModalDialog';

type ModalDialogProps = React.ComponentProps<typeof ModalDialog>;

// Extends all ModalDialog props, but omits certain props to re-declare them:
// - onClose: ModalDialog requires it, but AlertModal defaults it to () => {}
// - isOverflowVisible: required in ModalDialog but was absent from AlertModal's propTypes;
//   undefined is falsy so defaulting to false matches the previous behavior
// - variant: ModalDialog allows 'dark' but AlertModal intentionally excludes it
// footerNode and icon are AlertModal-specific props not present on ModalDialog
interface AlertModalProps extends Omit<ModalDialogProps, 'onClose' | 'isOverflowVisible' | 'variant'> {
  /** A callback to close the modal dialog */
  onClose?: () => void;
  /** Specifies whether overflow content inside the modal should be visible */
  isOverflowVisible?: boolean;
  /** The visual style of the dialog box */
  variant?: 'default' | 'warning' | 'danger' | 'success';
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
  hasCloseButton = false,
  onClose = () => {},
  isOverflowVisible = false,
  className,
  ...props
}: AlertModalProps) {
  return (
    <ModalDialog
      {...props}
      title={title}
      hasCloseButton={hasCloseButton}
      onClose={onClose}
      isOverflowVisible={isOverflowVisible}
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
