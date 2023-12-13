/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useToast } from './ToastContext';

function Toast({ id, content, options }) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, options.duration || 3000);

    return () => clearTimeout(timer);
  }, [id, options.duration, removeToast]);

  return (
    <div className={`toast ${options.className || ''}`}>
      {content}
      <button type="button" onClick={() => removeToast(id)}>Close</button>
    </div>
  );
}

export const ToastFunction = () => {
  const { addToast } = useToast();

  return (content, options) => {
    addToast(content, options);
  };
};

export default Toast;
