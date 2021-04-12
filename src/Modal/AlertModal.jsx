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
  ...ModalDialog.propTypes,
  footerNode: PropTypes.node,
};

AlertModal.defaultProps = {
  variant: 'default', // eslint-disable-line react/default-props-match-prop-types
  hasCloseButton: false, // eslint-disable-line react/default-props-match-prop-types
  footerNode: null,
};

export default AlertModal;
