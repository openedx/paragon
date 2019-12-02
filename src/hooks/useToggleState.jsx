/* eslint-disable no-unused-expressions */
import { useState, useCallback } from 'react';

const useToggleState = (defaultIsActive = false, ...handlers) => {
  const [isActive, setIsActive] = useState(defaultIsActive);

  const [
    handleActivate,
    handleDeactivate,
    handleToggle,
  ] = handlers;

  const activate = useCallback(() => {
    setIsActive(true);
    handleActivate && handleActivate();
    handleToggle && handleToggle(true);
  }, []);

  const deactivate = useCallback(() => {
    setIsActive(false);
    handleDeactivate && handleDeactivate();
    handleToggle && handleToggle(false);
  }, []);

  const toggle = useCallback(() => {
    if (isActive) {
      deactivate();
    } else {
      activate();
    }
  }, [isActive]);

  return [
    isActive,
    setIsActive,
    activate,
    deactivate,
    toggle,
  ];
};

export default useToggleState;
