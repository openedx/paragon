import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { callAllHandlers } from './fieldUtils';

const identityFn = props => props;

const FormCheckboxSetContext = React.createContext({
  getCheckboxControlProps: identityFn,
  hasCheckboxSetProvider: false,
});

const useCheckboxSetContext = () => useContext(FormCheckboxSetContext);

function FormCheckboxSetContextProvider({
  children,
  name,
  onBlur,
  onFocus,
  onChange,
  value,
  defaultValue,
}) {
  const isControlled = !defaultValue && Array.isArray(value);
  const getCheckboxControlProps = (checkboxProps) => ({
    ...checkboxProps,
    name,
    /* istanbul ignore next */
    onBlur: checkboxProps.onBlur ? callAllHandlers(onBlur, checkboxProps.onBlur) : onBlur,
    /* istanbul ignore next */
    onFocus: checkboxProps.onFocus ? callAllHandlers(onFocus, checkboxProps.onFocus) : onFocus,
    /* istanbul ignore next */
    onChange: checkboxProps.onChange ? callAllHandlers(onChange, checkboxProps.onChange) : onChange,
    checked: isControlled ? value.includes(checkboxProps.value) : undefined,
    defaultChecked: isControlled ? undefined : (defaultValue && defaultValue.includes(checkboxProps.value)),
  });
  const contextValue = {
    name,
    value,
    defaultValue,
    getCheckboxControlProps,
    onBlur,
    onFocus,
    onChange,
    hasCheckboxSetProvider: true,
  };
  return (
    <FormCheckboxSetContext.Provider value={contextValue}>
      {children}
    </FormCheckboxSetContext.Provider>
  );
}

FormCheckboxSetContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.arrayOf(PropTypes.string),
};

FormCheckboxSetContextProvider.defaultProps = {
  onBlur: undefined,
  name: undefined,
  onFocus: undefined,
  onChange: undefined,
  value: undefined,
  defaultValue: undefined,
};

export default FormCheckboxSetContext;
export {
  useCheckboxSetContext,
  FormCheckboxSetContextProvider,
};
