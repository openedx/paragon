import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { callAllHandlers } from './fieldUtils';

const FormRadioSetContext = React.createContext({
  getRadioInputProps: () => ({}),
});

const useRadioSetContext = () => useContext(FormRadioSetContext);

const FormRadioSetContextProvider = ({
  children,
  name,
  isInvalid,
  isValid,
  onBlur,
  onFocus,
  onChange,
  value,
  defaultValue,
}) => {
  const isControlled = !defaultValue && value !== undefined;
  const getRadioInputProps = (radioProps) => ({
    name,
    /* istanbul ignore next */
    onBlur: radioProps.onBlur ? callAllHandlers(onBlur, radioProps.onBlur) : onBlur,
    /* istanbul ignore next */
    onFocus: radioProps.onFocus ? callAllHandlers(onFocus, radioProps.onFocus) : onFocus,
    /* istanbul ignore next */
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
    onBlur,
    onFocus,
    onChange,
  };
  return (
    <FormRadioSetContext.Provider value={contextValue}>
      {children}
    </FormRadioSetContext.Provider>
  );
};

FormRadioSetContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
};

FormRadioSetContextProvider.defaultProps = {
  isInvalid: false,
  isValid: false,
  onBlur: undefined,
  onFocus: undefined,
  onChange: undefined,
  value: undefined,
  defaultValue: undefined,
};

export default FormRadioSetContext;
export {
  useRadioSetContext,
  FormRadioSetContextProvider,
};
