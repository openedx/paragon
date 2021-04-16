import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';

const MarketingModal = ({
  children,
  footerNode,
  heroNode,
  heroIsDark,
  beforeBodyNode,
  afterBodyNode,
  ...props
}) => (
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

MarketingModal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fullscreen']),
  closeLabel: PropTypes.string,
  className: PropTypes.string,
  isFullscreenScroll: PropTypes.bool,
  footerNode: PropTypes.node,
  heroIsDark: PropTypes.bool,
  heroNode: PropTypes.node,
  beforeBodyNode: PropTypes.node,
  afterBodyNode: PropTypes.node,
};

MarketingModal.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
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
