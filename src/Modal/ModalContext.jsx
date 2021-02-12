import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const ModalContext = React.createContext();

const ModalContextProvider = ({
  close, isOpen, isBlocking, children,
}) => {
  const modalContextValue = useMemo(
    () => ({ close, isOpen, isBlocking }),
    [close, isOpen, isBlocking],
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func.isRequired,
  isBlocking: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
};

ModalContextProvider.defaultProps = {
  children: null,
  isBlocking: false,
};

export { ModalContextProvider };
export default ModalContext;
