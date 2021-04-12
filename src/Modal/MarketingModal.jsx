import React from 'react';
import ModalDialog from './ModalDialog';

const MarketingModal = ({
  children,
  footerNode,
  heroNode,
  heroIsDark,
  ...props
}) => (
  <ModalDialog
    {...props}
    variant={heroIsDark ? 'dark' : 'default'}
  >
    {heroNode}
    <ModalDialog.Body>{children}</ModalDialog.Body>
    {footerNode && (
      <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>
    )}
  </ModalDialog>
);

MarketingModal.propTypes = {
  ...ModalDialog.propTypes,
};

MarketingModal.defaultProps = {
  ...ModalDialog.defaultProps,
  isFullscreenScroll: true,
  size: 'md',
};

export default MarketingModal;
