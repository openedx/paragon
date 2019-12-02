/* eslint-disable max-len */
import React, { useContext, useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const open = useCallback(setIsOpen.bind(null, true), [setIsOpen]);
  const close = useCallback(setIsOpen.bind(null, false), [setIsOpen]);
  const contextValue = {
    isOpen, setIsOpen, open, close,
  };

  return ReactDOM.createPortal(
    (
      <Modal.Context.Provider value={contextValue}>
        {children}
      </Modal.Context.Provider>
    ),
    document.body,
  );
};

Modal.Context = React.createContext();


/**
 * The modal backdrop
 */
Modal.Backdrop = ({ tag, children, ...props }) => {
  const { close, isOpen } = useContext(Modal.Context);
  const { className, onClick, ...attrs } = props;
  attrs.className = classNames('modal-backdrop', className);
  attrs.onClick = useCallback((e) => {
    close();
    if (onClick) {
      onClick(e);
    }
  }, [close, onClick]);
  if (!isOpen) {
    return null;
  }
  return React.createElement(tag, attrs, children);
};

Modal.Backdrop.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.func,
};

Modal.Backdrop.defaultProps = {
  tag: 'div',
  children: null,
  onClick: undefined,
  className: undefined,
};


/**
 * The modal close button
 */
Modal.CloseButton = ({ tag, children, ...props }) => {
  const { close } = useContext(Modal.Context);
  const { className, onClick, ...attrs } = props;
  attrs.className = classNames('modal-close-button', className);
  attrs.onClick = useCallback((e) => {
    close();
    if (onClick) {
      onClick(e);
    }
  }, [close, onClick]);
  return React.createElement(tag, attrs, children);
};

Modal.CloseButton.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.func,
};

Modal.CloseButton.defaultProps = {
  tag: 'button',
  children: null,
  onClick: undefined,
  className: undefined,
};


Modal.Dialog = (props) => {
  const {
    tag, children, className, ...attrs
  } = props;
  const combinedProps = {
    className: classNames('modal-dialog', className),
    ...attrs,
  };
  const { close, isOpen } = useContext(Modal.Context);
  const wrappedChildren = (
    <div className="modal-content">
      <FocusOn onClickOutside={close} onEscapeKey={close}>
        {children}
      </FocusOn>
    </div>
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal d-block" role="dialog">
      {React.createElement(tag, combinedProps, wrappedChildren)}
    </div>
  );
};

Modal.Dialog.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.func,
};

Modal.Dialog.defaultProps = {
  tag: 'div',
  children: null,
  className: undefined,
};


/**
 * The modal header
 */
Modal.Header = ({ tag, children, ...props }) => {
  const { className, ...attrs } = props;
  attrs.className = classNames('modal-header', className);
  return React.createElement(tag, attrs, children);
};

Modal.Header.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.func,
};

Modal.Header.defaultProps = {
  tag: 'div',
  children: null,
  className: undefined,
};


/**
 * The modal title
 */
Modal.Title = ({ tag, children, ...props }) => {
  const { className, ...attrs } = props;
  attrs.className = classNames('modal-title', className);
  return React.createElement(tag, attrs, children);
};

Modal.Title.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.func,
};

Modal.Title.defaultProps = {
  tag: 'h5',
  children: null,
  className: undefined,
};


/**
 * The modal body
 */
Modal.Body = ({ tag, children, ...props }) => {
  const { className, ...attrs } = props;
  attrs.className = classNames('modal-body', className);
  return React.createElement(tag, attrs, children);
};

Modal.Body.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.func,
};

Modal.Body.defaultProps = {
  tag: 'div',
  children: null,
  className: undefined,
};


/**
 * The modal footer
 */
Modal.Footer = ({ tag, children, ...props }) => {
  const { className, ...attrs } = props;
  attrs.className = classNames('modal-footer', className);
  return React.createElement(tag, attrs, children);
};

Modal.Footer.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.func,
};

Modal.Footer.defaultProps = {
  tag: 'div',
  children: null,
  className: undefined,
};

export default Modal;
