import React from 'react';
import PropTypes from 'prop-types';
import { newId } from '../utils';
import useToggle from '../hooks/useToggle';
import { callAllHandlers, useIdList, mergeAttributeValues } from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const omitUndefinedProperties = (obj) => Object.entries(obj)
  .reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});

const FormFieldContext = React.createContext();

const useFormFieldContext = (props = {}) => {
  const cleanedProps = omitUndefinedProperties(props);
  const contextValue = React.useContext(FormFieldContext);
  const mergedValues = {
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
  const [describedByIds, getNewDescriptorId, removeDescriptorId] = useIdList(resolvedId);
  const contextValue = {
    id: resolvedId,
    isInvalid,
    isValid,
    size,
    hasFocus,
    getNewDescriptorId,
    removeDescriptorId,
    'aria-describedby': describedByIds.length ? describedByIds.join(' ') : undefined,
    onFocus: callAllHandlers(setHasFocusTrue, onFocus),
    onBlur: callAllHandlers(setHasFocusFalse, onBlur),
  };
  return (
    <FormFieldContext.Provider value={contextValue}>
      {children}
    </FormFieldContext.Provider>
  );
};

FormFieldContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};

FormFieldContextProvider.defaultProps = {
  id: undefined,
  isInvalid: undefined,
  isValid: undefined,
  onFocus: undefined,
  onBlur: undefined,
  size: undefined,
};

export {
  FormFieldContext,
  FormFieldContextProvider,
  useFormFieldContext,
};
