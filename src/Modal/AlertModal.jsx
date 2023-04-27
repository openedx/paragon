import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { requiredWhenNot } from '../utils/propTypes';
import { Icon } from '..';
import ModalDialog from './ModalDialog';

function AlertModal({
  children,
  footerNode,
  icon,
  ...props
}) {
  return (
    <ModalDialog
      {...props}
      className={classNames('pgn__alert-modal', props.className)}
    >
      <ModalDialog.Header>
        <ModalDialog.Title>
          {icon && <Icon src={icon} className={classNames('pgn__alert-modal__title_icon')} />}
          {props.title}
        </ModalDialog.Title>
      </ModalDialog.Header>
      <ModalDialog.Body>{children}</ModalDialog.Body>
      {footerNode && <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>}
    </ModalDialog>
  );
}

AlertModal.propTypes = {
  children: PropTypes.node.isRequired,
  /** The aria-label of the dialog */
  title: PropTypes.string.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool,
  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,
  /** Specifies whether the dialog box should contain 'x' icon button in the top right */
  hasCloseButton: PropTypes.bool,
  /** A callback to close the modal dialog */
  onClose: requiredWhenNot(PropTypes.func, 'isBlocking'),
  /** Sizes determine the maximum width of the dialog box */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** The visual style of the dialog box */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success']),
  /** The label supplied to the close icon button if one is rendered */
  closeLabel: PropTypes.string,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies what should be displayed in the footer of the dialog box */
  footerNode: PropTypes.node,
  /** Icon that will be shown in the header of modal */
  icon: PropTypes.elementType,
};

AlertModal.defaultProps = {
  isOpen: false,
  isBlocking: false,
  hasCloseButton: false,
  onClose: () => {},
  size: 'md',
  variant: 'default',
  closeLabel: 'Close',
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
  icon: undefined,
};

export default AlertModal;
