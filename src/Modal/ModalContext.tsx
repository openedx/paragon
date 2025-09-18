import type { ReactNode } from 'react';
import { createContext, useMemo } from 'react';

interface ContextData {
  onClose: () => void;
  isOpen: boolean;
  isBlocking: boolean;
}

const ModalContext = createContext<ContextData>({
  onClose: () => {},
  isOpen: false,
  isBlocking: false,
});

function ModalContextProvider({
  onClose,
  isOpen,
  isBlocking = false,
  children = null,
}: {
  onClose: () => void;
  isOpen: boolean;
  isBlocking?: boolean;
  children?: ReactNode;
}) {
  const modalContextValue = useMemo<ContextData>(
    () => ({ onClose, isOpen, isBlocking }),
    [onClose, isOpen, isBlocking],
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContextProvider };
export default ModalContext;
