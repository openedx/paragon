import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalDialog from './ModalDialog';

const AlertModal = ({ children, footerNode, ...props }) => (
  <ModalDialog
    {...props}
    className={classNames('pgn__alert-modal', props.className)}
  >
    <ModalDialog.Header>
      <ModalDialog.Title>{props.title}</ModalDialog.Title>
    </ModalDialog.Header>
    <ModalDialog.Body>{children}</ModalDialog.Body>
    {footerNode && <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>}
  </ModalDialog>
);

AlertModal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
  closeLabel: PropTypes.string,
  className: PropTypes.string,
  isFullscreenScroll: PropTypes.bool,
  footerNode: PropTypes.node,
};

AlertModal.defaultProps = {
  isOpen: false,
  hasCloseButton: false,
  size: 'md',
  variant: 'default',
  closeLabel: 'Close',
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
};

export default AlertModal;
