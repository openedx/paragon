/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { toastEmitter } from './utils';
import BaseToast from './BaseToast';
import { positionStyles, TOAST_POSITIONS } from './constants';

function ToastContainer({ position: defaultPosition, className }) {
  const [toasts, setToasts] = useState([]);
  const portalDivRef = useRef(null);

  if (!portalDivRef.current && typeof document !== 'undefined') {
    portalDivRef.current = document.createElement('div');
    portalDivRef.current.setAttribute('class', 'pgn__toast-portal');
    portalDivRef.current.setAttribute('role', 'alert');
    portalDivRef.current.setAttribute('aria-live', 'polite');
    portalDivRef.current.setAttribute('aria-atomic', 'true');
    document.body.appendChild(portalDivRef.current);
  }

  const removeToast = (id) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  useEffect(() => {
    const handleShowToast = ({
      message, duration, actions, position,
    }) => {
      const id = Date.now();
      setToasts(currentToasts => [...currentToasts, {
        id, message, duration, actions, position: position || defaultPosition,
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
  }, [defaultPosition]);

  return portalDivRef.current ? ReactDOM.createPortal(
    Object.keys(positionStyles).map(position => (
      <div key={position} className={`pgn__toast-container ${className}`} style={positionStyles[position]}>
        {toasts.filter(toast => toast.position === position).map(toast => (
          <BaseToast key={toast.id} {...toast} onDismiss={() => removeToast(toast.id)} />
        ))}
      </div>
    )),
    portalDivRef.current,
  ) : null;
}

export default ToastContainer;
export { toast } from './utils';

ToastContainer.propTypes = {
  position: PropTypes.oneOf(TOAST_POSITIONS),
  className: PropTypes.string,
};

ToastContainer.defaultProps = {
  position: 'bottom-left',
  className: '',
};
