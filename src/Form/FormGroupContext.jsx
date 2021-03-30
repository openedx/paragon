import React from 'react';
import PropTypes from 'prop-types';
import { newId } from '../utils';
import useToggle from '../hooks/useToggle';
import {
  callAllHandlers,
  useIdList,
  mergeAttributeValues,
  omitUndefinedProperties,
} from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const FormGroupContext = React.createContext();

const defaultFormGroupContextValue = {
  getNewDescriptorId: () => {}, // noop by default
};

const useFormGroupContext = (props = {}) => {
  const cleanedProps = omitUndefinedProperties(props);
  const contextValue = React.useContext(FormGroupContext) || {};
  const mergedValues = {
    ...defaultFormGroupContextValue,
    ...contextValue,
    ...cleanedProps,
    'aria-describedby': mergeAttributeValues(
      contextValue['aria-describedby'],
      props['aria-describedby'],
    ),
    onFocus: callAllHandlers(contextValue.onFocus, props.onFocus),
    onBlur: callAllHandlers(contextValue.onBlur, props.onBlur),
  };
  return mergedValues;
};

const FormGroupContextProvider = ({
  children,
  controlId,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  size,
}) => {
  const resolvedId = React.useMemo(() => controlId || newId('form-field'), [controlId]);
  const [hasFocus, setHasFocusTrue, setHasFocusFalse] = useToggle(false);
  const [describedByIds, { getNewId, removeId }] = useIdList(resolvedId);
  const contextValue = {
    controlId: resolvedId,
    isInvalid,
    isValid,
    size,
    hasFocus,
    getNewDescriptorId: getNewId,
    removeDescriptorId: removeId,
    'aria-describedby': describedByIds.length ? describedByIds.join(' ') : undefined,
    onFocus: callAllHandlers(setHasFocusTrue, onFocus),
    onBlur: callAllHandlers(setHasFocusFalse, onBlur),
  };
  return (
    <FormGroupContext.Provider value={contextValue}>
      {children}
    </FormGroupContext.Provider>
  );
};

FormGroupContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  controlId: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};

FormGroupContextProvider.defaultProps = {
  controlId: undefined,
  isInvalid: undefined,
  isValid: undefined,
  onFocus: undefined,
  onBlur: undefined,
  size: undefined,
};

export {
  FormGroupContext,
  FormGroupContextProvider,
  useFormGroupContext,
};
