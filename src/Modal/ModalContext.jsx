import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const ModalContext = React.createContext({
  onClose: () => {},
});

function ModalContextProvider({
  onClose, isOpen, isHidden, isBlocking, children,
}) {
  const modalContextValue = useMemo(
    () => ({ onClose, isOpen, isHidden, isBlocking }),
    [onClose, isOpen, isHidden, isBlocking],
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

ModalContextProvider.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  isBlocking: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
};

ModalContextProvider.defaultProps = {
  children: null,
  isBlocking: false,
};

export { ModalContextProvider };
export default ModalContext;
