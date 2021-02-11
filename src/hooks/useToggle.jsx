import { useState, useCallback } from 'react';

export default function useToggle(defaultIsOn, handlers = {}) {
  const { onToggleOn, onToggleOff, onToggle } = handlers;
  const [isOn, setIsOn] = useState(defaultIsOn || false);

  const setOn = useCallback(() => {
    setIsOn(true);
    if (onToggleOn) {
      onToggleOn();
    }
    if (onToggle) {
      onToggle(true);
    }
  }, [onToggleOn, onToggle]);

  const setOff = useCallback(() => {
    setIsOn(false);
    if (onToggleOff) {
      onToggleOff();
    }
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
