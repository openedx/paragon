import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { newId } from '../utils';

const omitUndefinedProperties = (obj = {}) => Object.entries(obj)
  .reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);

const callAllHandlers = <EventType extends Object>(...handlers: ((event: EventType) => void)[]) => {
  const unifiedEventHandler = (event: EventType) => {
    handlers
      .filter(handler => typeof handler === 'function')
      .forEach(handler => handler(event));
  };
  return unifiedEventHandler;
};

const useHasValue = <ValueType>({ defaultValue, value }: { defaultValue?: ValueType, value?: ValueType }) => {
  const [hasUncontrolledValue, setHasUncontrolledValue] = useState(!!defaultValue || defaultValue === 0);
  const hasValue = !!value || value === 0 || hasUncontrolledValue;
  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => setHasUncontrolledValue(!!e.target.value);
  return [hasValue, handleInputEvent];
};

const useIdList = (
  uniqueIdPrefix: string,
  initialList?: string[],
): [idList: string[], useRegisteredId: (id: string | undefined) => string | undefined] => {
  const [idList, setIdList] = useState(initialList || []);
  const addId = (idToAdd: string) => {
    setIdList(oldIdList => [...oldIdList, idToAdd]);
    return idToAdd;
  };
  const getNewId = () => {
    const idToAdd = newId(`${uniqueIdPrefix}-`);
    return addId(idToAdd);
  };
  const removeId = (idToRemove: string | undefined) => {
    setIdList(oldIdList => oldIdList.filter(id => id !== idToRemove));
  };

  const useRegisteredId = (explicitlyRegisteredId: string | undefined) => {
    const [registeredId, setRegisteredId] = useState(explicitlyRegisteredId);
    useEffect(() => {
      if (explicitlyRegisteredId) {
        addId(explicitlyRegisteredId);
      } else if (!registeredId) {
        setRegisteredId(getNewId());
      }
      return () => removeId(registeredId);
    }, [registeredId, explicitlyRegisteredId]);
    return registeredId;
  };

  return [idList, useRegisteredId];
};

const mergeAttributeValues = (...values: (string | undefined)[]) => {
  const mergedValues = classNames(values);
  return mergedValues || undefined;
};

export {
  callAllHandlers,
  useHasValue,
  mergeAttributeValues,
  useIdList,
  omitUndefinedProperties,
};
