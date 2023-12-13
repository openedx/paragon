/* eslint-disable react/prop-types */
import React from 'react';
import { ToastProvider, useToast } from './ToastContext';
import Toast from './Toast';

function ToastContainer({ config }) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <div className={`toast-container ${config.position || 'bottom-right'}`}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </ToastProvider>
  );
}

export default ToastContainer;
