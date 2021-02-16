import { useState, useCallback } from 'react';

export default function useToggle(defaultIsOn, handlers = {}) {
  const { handleToggleOn, handleToggleOff, handleToggle } = handlers;
  const [isOn, setIsOn] = useState(defaultIsOn || false);

  const setOn = useCallback(() => {
    setIsOn(true);
    // istanbul ignore else
    if (handleToggleOn) {
      handleToggleOn();
    }
    // istanbul ignore else
    if (handleToggle) {
      handleToggle(true);
    }
  }, [handleToggleOn, handleToggle]);

  const setOff = useCallback(() => {
    setIsOn(false);
    // istanbul ignore else
    if (handleToggleOff) {
      handleToggleOff();
    }
    // istanbul ignore else
    if (handleToggle) {
      handleToggle(false);
    }
  }, [handleToggleOff, handleToggle]);

  const toggle = useCallback(() => {
    const doToggle = isOn ? setOff : setOn;
    doToggle();
  }, [isOn, setOn, setOff]);

  return [isOn, setOn, setOff, toggle];
}
