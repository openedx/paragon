/* eslint-disable max-len */
import React, { useEffect, useState, useContext, forwardRef, useImperativeHandle, useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const open = useCallback(setIsOpen.bind(null, true), [setIsOpen]);
  const close = useCallback(setIsOpen.bind(null, false), [setIsOpen]);

  return ReactDOM.createPortal((
    <>
      <Modal.Context.Provider value={{ isOpen, setIsOpen, open, close }}>
        {children}
      </Modal.Context.Provider>
    </>
  ), document.body);
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
  const { htmlType, children, baseClassName, className, ...attrs } = props;
  const combinedProps = {
    className: classNames(baseClassName, className),
    ...attrs,
  };
  const { close, isOpen } = useContext(Modal.Context);
  const wrappedChildren = (
    <div className="modal-content">
      {children}
    </div>
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div
        className="modal d-block"
        tabIndex="-1"
        role="dialog"
      >
        <FocusOn
        onClickOutside={close}
        onEscapeKey={close}
        >
          {React.createElement(htmlType, combinedProps, wrappedChildren)}
        </FocusOn>
      </div>
  );
};
Modal.Dialog.defaultProps = {
  htmlType: 'div',
  baseClassName: 'modal-dialog',
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
// const Modal = forwardRef(({
//   mountNode = document.body,
//   defaultIsOpen = false,
//   isOpen: propsIsOpen,
//   handleOpen,
//   handleClose,
//   handleToggle,
//   children,
//   ...props
// }, ref) => {
//   const [
//     isOpen, setIsOpen, open, close, toggle,
//   ] = useToggleState(defaultIsOpen, handleOpen, handleClose, handleToggle);

//   // Combo controlled/uncontrolled.
//   if (propsIsOpen !== undefined && propsIsOpen !== isOpen) {
//     setIsOpen(propsIsOpen);
//   }

//   useImperativeHandle(ref, () => ({ open, close }), []);

//   const modalProps = { isOpen, setIsOpen, open, close, toggle, mountNode };
//   return (
//     <Modal.Advanced {...modalProps}>
//       <Modal.Dialog>
//         <Modal.Header>
//           <Modal.Title></Modal.Title>
//           <Modal.Trigger close>close</Modal.Trigger>
//         </Modal.Header>
//         <Modal.Body>
//           {children}
//         </Modal.Body>
//         <Modal.Footer>
//           <Modal.Trigger open>Open</Modal.Trigger>
//           <Modal.Trigger close>close</Modal.Trigger>
//           <Modal.Trigger toggle>toggle</Modal.Trigger>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </Modal.Advanced>
//   );
// });
// Modal.Context = React.createContext();

// Modal.Advanced = ({ 
//   children,
//   mountNode = document.body,
//   baseClassName = 'modal',
//   className,
//   isOpen,
//   setIsOpen,
//   open,
//   close,
//   toggle,
//   ...attrs
// }) => {
//   return ReactDOM.createPortal((
//     <>
//       <Modal.Context.Provider value={{ isOpen, setIsOpen, open, close, toggle }}>
//         <Modal.Backdrop />
//         <div className={classNames(baseClassName, className)} {...attrs}>
//           {children}
//         </div>
//       </Modal.Context.Provider>
//     </>
//   ), mountNode);
// }
// Modal.Backdrop = () => {
//   const { isOpen } = useContext(Modal.Context);
//   const className = classNames('modal-backdrop', { 'fade show': isOpen });
//   return <div className={className} />;
// }


// Modal.Dialog = ({ children, tagName, baseClassName, ...props }) => {
//   const className = classNames(baseClassName, props.className);
//   const elementProps = { ...props, className };
//   return React.createElement(tagName, elementProps, (
//     <div className="modal-content">
//       {children}
//     </div>
//   ));
// };
// Modal.Dialog.propTypes = {
//   tagName: PropTypes.string,
//   baseClassName: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
// Modal.Dialog.defaultProps = {
//   tagName: 'div',
//   baseClassName: 'modal-dialog d-block',
// };


// Modal.Header = ({ children, tagName, baseClassName, ...props }) => {
//   const className = classNames(baseClassName, props.className);
//   const elementProps = { ...props, className };
//   return React.createElement(tagName, elementProps, children);
// };
// Modal.Header.propTypes = {
//   tagName: PropTypes.string,
//   baseClassName: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
// Modal.Header.defaultProps = {
//   tagName: 'div',
//   baseClassName: 'modal-header',
// };


// Modal.Title = ({ children, tagName, baseClassName, ...props }) => {
//   const className = classNames(baseClassName, props.className);
//   const elementProps = { ...props, className };
//   return React.createElement(tagName, elementProps, children);
// };
// Modal.Title.propTypes = {
//   tagName: PropTypes.string,
//   baseClassName: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
// Modal.Title.defaultProps = {
//   tagName: 'div',
//   baseClassName: 'modal-title',
// };


// Modal.Body = ({ children, tagName, baseClassName, ...props }) => {
//   const className = classNames(baseClassName, props.className);
//   const elementProps = { ...props, className };
//   return React.createElement(tagName, elementProps, children);
// };
// Modal.Body.propTypes = {
//   tagName: PropTypes.string,
//   baseClassName: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
// Modal.Body.defaultProps = {
//   tagName: 'div',
//   baseClassName: 'modal-body',
// };


// Modal.Footer = ({ children, tagName, baseClassName, ...props }) => {
//   const className = classNames(baseClassName, props.className);
//   const elementProps = { ...props, className };
//   return React.createElement(tagName, elementProps, children);
// };
// Modal.Footer.propTypes = {
//   tagName: PropTypes.string,
//   baseClassName: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
// Modal.Footer.defaultProps = {
//   tagName: 'div',
//   baseClassName: 'modal-footer',
// };


// Modal.Trigger = ({ children, tagName, baseClassName, onClick, open, close, toggle, ...props }) => {
//   const { isOpen, open: openModal, close: closeModal, toggle: toggleModal } = useContext(Modal.Context);
//   const test = useContext(Modal.Context);
//   console.log(test)
//   const className = classNames(baseClassName, props.className);
//   const elementProps = {
//     ...props,
//     className,
//     onClick: (e) => {
//       if (toggle) {
//         toggleModal();
//       } else if (isOpen && close) {
//         closeModal();
//       } else if (!isOpen && open) {
//         openModal();
//       }

//       if (onClick) {
//         onClick(e);
//       }
//     }
//   };
//   return React.createElement(tagName, elementProps, children);
// };
// Modal.Trigger.propTypes = {
//   tagName: PropTypes.string,
//   baseClassName: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
// Modal.Trigger.defaultProps = {
//   tagName: 'div',
//   baseClassName: 'modal-trigger',
// };


// export default Modal;
