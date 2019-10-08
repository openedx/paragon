import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';

import ModalContext from './ModalContext';

/*
  make and use portal here.
*/
const ModalDialog = ({
  children, tag, onClick, className, ...props
}) => {
  const { open, close, isOpen, modalLabelId } = useContext(ModalContext);

  if (!isOpen) return null;

  return (
    <FocusOn
      enabled={isOpen}
      autoFocus={true}
      onClickOutside={close}
      onEscapeKey={close}
    >
      <div
        className="modal fade show"
        tabindex="-1"
        role="dialog"
        aria-labelledby={modalLabelId}
        aria-hidden="false"
        style={{
          display: 'block',
        }}
      >
        <div
          className="modal-backdrop fade show"
          onClick={close}
        />
        <div className={classNames('modal-dialog', className)}>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    </FocusOn>
  );
}

// modal-lg modal-dialog-centered

ModalDialog.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.elementType,
  handleClick: PropTypes.func,
};

ModalDialog.defaultProps = {
  children: undefined,
  tag: 'button',
  handleClick: undefined,
};

export default ModalDialog;
