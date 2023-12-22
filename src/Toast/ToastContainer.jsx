/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { toastEmitter } from './EventEmitter';
import Toast from '.';

const positionStyles = {
  'top-left': {
    top: '0', left: '0', right: 'auto', bottom: 'auto',
  },
  'top-right': {
    top: '0', right: '0', left: 'auto', bottom: 'auto',
  },
  'bottom-left': {
    bottom: '0', left: '0', right: 'auto', top: 'auto',
  },
  'bottom-right': {
    bottom: '0', right: '0', left: 'auto', top: 'auto',
  },
};

function ToastContainer({ position, className }) {
  const [toasts, setToasts] = useState([]);
  const portalDivRef = useRef(null);
  const positionStyle = positionStyles[position] || positionStyles['bottom-left'];

  if (!portalDivRef.current && typeof document !== 'undefined') {
    portalDivRef.current = document.createElement('div');
    portalDivRef.current.setAttribute('class', 'toast-portal');
    portalDivRef.current.setAttribute('role', 'alert');
    portalDivRef.current.setAttribute('aria-live', 'polite');
    portalDivRef.current.setAttribute('aria-atomic', 'true');
    document.body.appendChild(portalDivRef.current);
  }

  const removeToast = (id) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  useEffect(() => {
    const handleShowToast = ({ message, duration, actions }) => {
      const id = Date.now();
      setToasts(currentToasts => [...currentToasts, {
        id, message, duration, actions,
      }]);
    };

    toastEmitter.subscribe('showToast', handleShowToast);

    return () => {
      toastEmitter.events.showToast = toastEmitter.events.showToast.filter(
        callback => callback !== handleShowToast,
      );
      if (portalDivRef.current) {
        document.body.removeChild(portalDivRef.current);
      }
    };
  }, []);

  return portalDivRef.current ? ReactDOM.createPortal(
    <div className="toast-container" style={{ ...positionStyle }}>
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} onDismiss={() => removeToast(toast.id)} className={className} />
      ))}
    </div>,
    portalDivRef.current,
  ) : null;
}

export default ToastContainer;

ToastContainer.propTypes = {
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  className: PropTypes.string,
};

ToastContainer.defaultProps = {
  position: 'bottom-left',
  className: '',
};
