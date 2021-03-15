import classNames from 'classnames';
import { useState } from 'react';
import { newId } from '../utils';

const omitUndefinedProperties = (obj = {}) => Object.entries(obj)
  .reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});

const callAllHandlers = (...handlers) => {
  const unifiedEventHandler = (event) => {
    handlers
      .filter(handler => typeof handler === 'function')
      .forEach(handler => handler(event));
  };
  return unifiedEventHandler;
};

const useHasValue = ({ defaultValue, value }) => {
  const [hasUncontrolledValue, setHasUncontrolledValue] = useState(!!defaultValue);
  const hasValue = !!value || hasUncontrolledValue;
  const handleInputEvent = (e) => setHasUncontrolledValue(e.target.value);
  return [hasValue, handleInputEvent];
};

const useIdList = (uniqueIdPrefix, initialList) => {
  const [idList, setIdList] = useState(initialList || []);
  const getNewId = () => {
    const idToAdd = newId(`${uniqueIdPrefix}-`);
    setIdList(oldIdList => [...oldIdList, idToAdd]);
    return idToAdd;
  };
  const removeId = (idToRemove) => {
    setIdList(oldIdList => oldIdList.filter(id => id !== idToRemove));
  };
  return [idList, getNewId, removeId];
};

const mergeAttributeValues = (...values) => {
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
