import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';

const StandardModal = ({
  children,
  footerNode,
  ...props
}) => (
  <ModalDialog {...props}>
    <ModalDialog.Header>
      <ModalDialog.Title>{props.title}</ModalDialog.Title>
    </ModalDialog.Header>
    <ModalDialog.Body>{children}</ModalDialog.Body>
    {footerNode && <ModalDialog.Footer>{footerNode}</ModalDialog.Footer>}
  </ModalDialog>
);

StandardModal.propTypes = {
  ...ModalDialog.propTypes,
  footerNode: PropTypes.node,
};

StandardModal.defaultProps = {
  ...ModalDialog.defaultProps,
  footerNode: null,
};

export default StandardModal;
