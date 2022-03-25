import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';

export const STANDARD_MODAL_CLOSE_LABEL = 'Close';

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
  /** Specifies the content of the `Modal` */
  children: PropTypes.node.isRequired,
  /** The title for the `Modal` */
  title: PropTypes.string.isRequired,
  /** Optional callback function for when the modal it dismissed. */
  onClose: PropTypes.func.isRequired,
  /** Is the modal open or closed */
  isOpen: PropTypes.bool,
  /** The close 'x' icon button in the top right corner */
  hasCloseButton: PropTypes.bool,
  /** The modal size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** The modal style variant to use */
  variant: PropTypes.oneOf(['default', 'warning', 'danger', 'success', 'dark']),
  /** Specifies the `aria-label` attribute for the close button */
  closeLabel: PropTypes.string,
  /** A class name to append to the modal */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies what should be displayed in the footer of the nodal */
  footerNode: PropTypes.node,
  /** Specifies what should be displayed before the body block */
  beforeBodyNode: PropTypes.node,
  /** Specifies what should be displayed after the body block */
  afterBodyNode: PropTypes.node,
};

StandardModal.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
  closeLabel: STANDARD_MODAL_CLOSE_LABEL,
  className: undefined,
  isFullscreenScroll: false,
  footerNode: null,
  beforeBodyNode: null,
  afterBodyNode: null,
};

export default StandardModal;
