import { useState } from 'react';

const callAllHandlers = (...handlers) => {
  const unifiedEventHandler = (event) => {
    handlers
      .filter(handler => typeof handler === 'function')
      .forEach(handler => handler(event));
  };
  return unifiedEventHandler;
};

const useHasValue = (defaultValue, value) => {
  const [hasUncontrolledValue, setHasUncontrolledValue] = useState(!!defaultValue);
  const hasValue = !!value || hasUncontrolledValue;
  const handleInputEvent = (e) => setHasUncontrolledValue(e.target.value);
  return [hasValue, handleInputEvent];
};

export {
  callAllHandlers,
  useHasValue,
};
