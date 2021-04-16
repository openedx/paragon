import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';

const StandardModal = ({
  children,
  footerNode,
  beforeBodyNode,
  afterBodyNode,
  ...props
}) => (
  <ModalDialog {...props}>
    <ModalDialog.Header>
      <ModalDialog.Title>{props.title}</ModalDialog.Title>
    </ModalDialog.Header>
    {beforeBodyNode}
    <ModalDialog.Body>{children}</ModalDialog.Body>
    {afterBodyNode}
    {footerNode && <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>}
  </ModalDialog>
);

StandardModal.propTypes = {
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
  beforeBodyNode: PropTypes.node,
  afterBodyNode: PropTypes.node,
};

StandardModal.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
  closeLabel: 'Close',
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null,
};

export default StandardModal;
