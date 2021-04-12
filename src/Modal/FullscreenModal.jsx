import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';

const FullscreenModal = ({ children, footerNode, ...props }) => (
  <ModalDialog {...props}>
    <ModalDialog.Header>
      <ModalDialog.Title>{props.title}</ModalDialog.Title>
    </ModalDialog.Header>
    <ModalDialog.Body>{children}</ModalDialog.Body>
    {footerNode && <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>}
  </ModalDialog>
);

FullscreenModal.propTypes = {
  ...ModalDialog.propTypes,
  footerNode: PropTypes.node,
};

FullscreenModal.defaultProps = {
  variant: 'dark', // eslint-disable-line react/default-props-match-prop-types
  size: 'fullscreen', // eslint-disable-line react/default-props-match-prop-types
  footerNode: null,
};

export default FullscreenModal;
