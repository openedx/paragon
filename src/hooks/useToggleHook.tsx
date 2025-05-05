// Note: this file was renamed from 'useToggle.tsx' to 'useToggleHook.tsx' to fix
// some bugs in the Gatsby www site, where Webpack was getting the .tsx and .mdx
// files confused. Renaming this file allows us to keep the URLs of the docs site
// unchanged.
import { useState, useCallback } from 'react';

export type Toggler = [
  isOn: boolean,
  setOn: () => void,
  setOff: () => void,
  toggle: () => void,
];

export interface ToggleHandlers {
  handleToggleOn?: () => void;
  handleToggleOff?: () => void;
  handleToggle?: (newStatus: boolean) => void;
}

export default function useToggle(defaultIsOn = false, handlers: ToggleHandlers = {}): Toggler {
  const { handleToggleOn, handleToggleOff, handleToggle } = handlers;
  const [isOn, setIsOn] = useState(defaultIsOn);

  const setOn = useCallback(() => {
    setIsOn(true);
    handleToggleOn?.();
    handleToggle?.(true);
  }, [handleToggleOn, handleToggle]);

  const setOff = useCallback(() => {
    setIsOn(false);
    handleToggleOff?.();
    handleToggle?.(false);
  }, [handleToggleOff, handleToggle]);

  const toggle = useCallback(() => {
    const doToggle = isOn ? setOff : setOn;
    doToggle();
  }, [isOn, setOn, setOff]);

  return [isOn, setOn, setOff, toggle];
}
