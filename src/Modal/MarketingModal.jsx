import React from 'react';
import PropTypes from 'prop-types';

import { requiredWhenNot } from '../utils/propTypes';
import ModalDialog from './ModalDialog';

function MarketingModal({
  children,
  footerNode,
  heroNode,
  heroIsDark,
  beforeBodyNode,
  afterBodyNode,
  ...props
}) {
  return (
    <ModalDialog
      {...props}
      variant={heroIsDark ? 'dark' : 'default'}
    >
      {heroNode}
      {beforeBodyNode}
      <ModalDialog.Body>{children}</ModalDialog.Body>
      {afterBodyNode}
      {footerNode && (
      <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>
      )}
    </ModalDialog>
  );
}

MarketingModal.propTypes = {
  /** Specifies the content of the modal */
  children: PropTypes.node.isRequired,
  /** Title of the modal */
  title: PropTypes.string.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool,
  /** Prevent clicking on the backdrop or pressing Esc to close the modal */
  isBlocking: PropTypes.bool,
  /** The close 'x' icon button in the top right corner */
  hasCloseButton: PropTypes.bool,
  /** Callback function for when the modal is dismissed */
  onClose: requiredWhenNot(PropTypes.func, 'isBlocking'),
  /** Size of the modal window */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  /** Specifies the ``aria-label`` attribute for the close button */
  closeLabel: PropTypes.string,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * Determines where a scrollbar should appear if a modal is too large for the
   * viewport. When false, the ModalDialog.Body receives a scrollbar, when true
   * the browser window itself receives the scrollbar.
   */
  isFullscreenScroll: PropTypes.bool,
  /** Specifies what should be displayed in the footer of the nodal */
  footerNode: PropTypes.node,
  /** Enables dark theme for the modal */
  heroIsDark: PropTypes.bool,
  /** Specifies what should be displayed in the header of the modal */
  heroNode: PropTypes.node,
  /** Specifies what should be displayed before the body block */
  beforeBodyNode: PropTypes.node,
  /** Specifies what should be displayed after the body block */
  afterBodyNode: PropTypes.node,
};

MarketingModal.defaultProps = {
  isOpen: false,
  isBlocking: false,
  hasCloseButton: true,
  onClose: () => {},
  size: 'md',
  closeLabel: 'Close',
  className: undefined,
  isFullscreenScroll: true,
  footerNode: null,
  heroIsDark: true,
  heroNode: null,
  beforeBodyNode: null,
  afterBodyNode: null,
};

export default MarketingModal;
