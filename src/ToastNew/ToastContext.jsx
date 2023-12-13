/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext } from 'react';

const ToastContext = createContext();

const initialState = {
  toasts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return { ...state, toasts: [...state.toasts, action.payload] };
    case 'REMOVE_TOAST':
      return { ...state, toasts: state.toasts.filter((toast) => toast.id !== action.payload) };
    default:
      return state;
  }
};

function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToast = (content, options = {}) => {
    const id = Date.now();
    const toast = { id, content, options };
    dispatch({ type: 'ADD_TOAST', payload: toast });
  };

  const removeToast = (id) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  };

  return (
    <ToastContext.Provider value={{ toasts: state.toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export { ToastProvider, useToast };
