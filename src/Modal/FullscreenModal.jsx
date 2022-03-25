import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';

export const FULLSCREEN_MODAL_CLOSE_LABEL = 'Close';

const FullscreenModal = ({
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
    <ModalDialog.Body className={props.modalBodyClassName}>{children}</ModalDialog.Body>
    {afterBodyNode}
    {footerNode && <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>}
  </ModalDialog>
);

FullscreenModal.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies the aria-label of the dialog. */
  title: PropTypes.string.isRequired,
  /** Specifies a callback to close the modal dialog. */
  onClose: PropTypes.func.isRequired,
  /** Specifies whether the modal is open. */
  isOpen: PropTypes.bool,
  /** Specifies whether the model hase close 'x' icon button in the top right of the dialog box. */
  hasCloseButton: PropTypes.bool,
  /** Specifies size of the dialog box. */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** Specifies visual style of the dialog box. */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
  /** The label supplied to the close icon button if one is rendered */
  closeLabel: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies footer for the dialog box. */
  footerNode: PropTypes.node,
  /** Specifies content that should be rendered before modal's body. */
  beforeBodyNode: PropTypes.node,
  /** Specifies content that should be rendered after modal's body. */
  afterBodyNode: PropTypes.node,
  /** Specifies class name for modal's body component. */
  modalBodyClassName: PropTypes.string,
};

FullscreenModal.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'fullscreen',
  variant: 'dark',
  closeLabel: FULLSCREEN_MODAL_CLOSE_LABEL,
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null,
  modalBodyClassName: '',
};

export default FullscreenModal;
