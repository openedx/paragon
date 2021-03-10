import { useState } from 'react';

const callAllHandlers = (event, ...handlers) => handlers
  .filter(handler => typeof handler === 'function')
  .forEach(handler => handler(event));

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
