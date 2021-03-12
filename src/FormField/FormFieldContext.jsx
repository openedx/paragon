import React from 'react';
import classNames from 'classnames';
import { newId } from '../utils';
import useToggle from '../hooks/useToggle';
import { callAllHandlers } from './fieldUtils';

const useIdList = (uniqueIdPrefix, initialList) => {
  const [idList, setIdList] = React.useState(initialList || []);
  const getNewId = () => {
    console.log('new id', uniqueIdPrefix);
    const idToAdd = newId(`${uniqueIdPrefix}-`);
    setIdList(oldIdList => [...oldIdList, idToAdd]);
    return idToAdd;
  };
  const removeId = (idToRemove) => {
    setIdList(oldIdList => oldIdList.filter(id => id === idToRemove));
  };
  return [idList, getNewId, removeId];
};

// const useHasValue = (defaultValue, value) => {
//   const [hasUncontrolledValue, setHasUncontrolledValue] = useState(!!defaultValue);
//   const hasValue = !!value || hasUncontrolledValue;
//   const handleInputEvent = (e) => setHasUncontrolledValue(e.target.value);
//   return [hasValue, handleInputEvent];
// };

const mergeAriaAttributes = (...values) => {
  const mergedValues = classNames(values);
  return mergedValues || undefined;
};

const FormFieldContext = React.createContext();

const useFormFieldContext = (props = {}) => {
  const contextValue = React.useContext(FormFieldContext);
  const mergedValues = {
    ...contextValue,
    ...props,
    'aria-describedby': mergeAriaAttributes(
      contextValue['aria-describedby'],
      props['aria-describedby'],
    ),
    onFocus: callAllHandlers(contextValue.onFocus, props.onFocus),
    onBlur: callAllHandlers(contextValue.onBlur, props.onBlur),
  };
  return mergedValues;
};

const FormFieldContextProvider = ({
  children,
  id,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  size,
}) => {
  const resolvedId = React.useMemo(() => id || newId('form-field'), [id]);
  const [hasFocus, setHasFocusTrue, setHasFocusFalse] = useToggle(false);
  // const [hasValue, checkInputValue] = useHasValue(defaultValue, value);
  const [describedByIds, getNewDescriptorId, removeDescriptorId] = useIdList(resolvedId);
  const contextValue = {
    id: resolvedId,
    isInvalid,
    isValid,
    size,
    // hasValue,
    hasFocus,
    getNewDescriptorId,
    removeDescriptorId,
    'aria-describedby': describedByIds.length ? describedByIds.join(' ') : undefined,
    onFocus: callAllHandlers(setHasFocusTrue, onFocus),
    onBlur: callAllHandlers(setHasFocusFalse, onBlur),
  };
  console.log('context debug', contextValue);
  return (
    <FormFieldContext.Provider value={contextValue}>
      {children}
    </FormFieldContext.Provider>
  );
};

export {
  FormFieldContext,
  FormFieldContextProvider,
  useFormFieldContext,
};
