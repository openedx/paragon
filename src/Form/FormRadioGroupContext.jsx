import React, { useContext } from 'react';
import { callAllHandlers, useIdList } from './fieldUtils';

const FormRadioGroupContext = React.createContext({
  getRadioInputProps: () => ({}),
});

const useRadioGroupContext = () => useContext(FormRadioGroupContext);

const FormRadioGroupContextProvider = ({
  children,
  name,
  isInvalid,
  isValid,
  groupId,
  onBlur,
  onFocus,
  onChange,
  value,
  defaultValue,
}) => {
  const [describedByIds, { getNewId, addId, removeId }] = useIdList(groupId || 'radio-group');
  const isControlled = !defaultValue && value !== undefined;
  const getRadioInputProps = (radioProps) => ({
    name,
    onBlur: radioProps.onBlur ? callAllHandlers(onBlur, radioProps.onBlur) : onBlur,
    onFocus: radioProps.onFocus ? callAllHandlers(onFocus, radioProps.onFocus) : onFocus,
    onChange: radioProps.onChange ? callAllHandlers(onChange, radioProps.onChange) : onChange,
    checked: isControlled ? value === radioProps.value : undefined,
    defaultChecked: isControlled ? undefined : defaultValue === radioProps.value,
  });

  const contextValue = {
    name,
    value,
    getRadioInputProps,
    isInvalid,
    isValid,
    groupId,
    getNewDescriptorId: getNewId,
    addNewDescriptorId: addId,
    removeDescriptorId: removeId,
    describedByIds,
    onBlur,
    onFocus,
    onChange,
  };
  return (
    <FormRadioGroupContext.Provider value={contextValue}>
      {children}
    </FormRadioGroupContext.Provider>
  );
};

FormRadioGroupContextProvider.propTypes = {

};

FormRadioGroupContextProvider.defaultProps = {

};

export default FormRadioGroupContext;
export {
  useRadioGroupContext,
  FormRadioGroupContextProvider,
};
