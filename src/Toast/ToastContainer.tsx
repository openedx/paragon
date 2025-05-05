import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ToastContainerProps {
  children: ReactNode;
}

const TOAST_ROOT_ID = 'toast-root';

function ToastContainer({ children }: ToastContainerProps) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      let existingElement = document.getElementById(TOAST_ROOT_ID);

      if (!existingElement) {
        existingElement = document.createElement('div');
        existingElement.id = TOAST_ROOT_ID;
        existingElement.className = 'toast-container';
        document.body.appendChild(existingElement);
      }
      setRootElement(existingElement);
    }
  }, []);

  return rootElement ? ReactDOM.createPortal(children, rootElement) : null;
}

export default ToastContainer;
