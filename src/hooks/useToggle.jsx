import { useState, useCallback } from 'react';

export default function useToggle(defaultIsOn, handlers = {}) {
  const { onToggleOn, onToggleOff, onToggle } = handlers;
  const [isOn, setIsOn] = useState(defaultIsOn || false);

  const setOn = useCallback(() => {
    setIsOn(true);
    // istanbul ignore else
    if (onToggleOn) {
      onToggleOn();
    }
    // istanbul ignore else
    if (onToggle) {
      onToggle(true);
    }
  }, [onToggleOn, onToggle]);

  const setOff = useCallback(() => {
    setIsOn(false);
    // istanbul ignore else
    if (onToggleOff) {
      onToggleOff();
    }
    // istanbul ignore else
    if (onToggle) {
      onToggle(false);
    }
  }, [onToggleOff, onToggle]);

  const toggle = useCallback(() => {
    const doToggle = isOn ? setOff : setOn;
    doToggle();
  }, [isOn, setOn, setOff]);

  return [isOn, setOn, setOff, toggle];
}
