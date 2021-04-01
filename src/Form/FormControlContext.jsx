import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { newId } from '../utils';
import {
  callAllHandlers,
  useIdList,
  omitUndefinedProperties,
} from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const identityFn = props => props;

const FormControlContext = React.createContext({
  getControlProps: identityFn,
  getDescriptorProps: identityFn,
  addDescriptorId: identityFn,
  getNewDescriptorId: identityFn,
  removeDescriptorId: identityFn,
});

const useFormControlContext = () => React.useContext(FormControlContext);

const useControlDescriptorId = (explicitId) => {
  const {
    controlId,
    getNewDescriptorId,
    addDescriptorId,
    removeDescriptorId,
  } = useFormControlContext();
  const [id, setId] = useState(explicitId);
  useEffect(() => {
    if (explicitId) {
      addDescriptorId(explicitId);
    } else if (!id) {
      setId(getNewDescriptorId(controlId));
    }
    return () => removeDescriptorId(id);
  }, [id]);
  return id;
};

const FormControlContextProvider = ({
  children,
  controlId,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  onChange,
  size,
}) => {
  const resolvedId = React.useMemo(() => controlId || newId('form-field'), [controlId]);
  const [describedByIds, { getNewId, addId, removeId }] = useIdList(resolvedId);

  const getControlProps = (controlProps) => omitUndefinedProperties({
    ...controlProps,
    onBlur: callAllHandlers(controlProps.onBlur, onBlur),
    onFocus: callAllHandlers(controlProps.onFocus, onFocus),
    onChange: callAllHandlers(controlProps.onChange, onChange),
    'aria-describedby': classNames(controlProps['aria-describedby'], describedByIds),
    id: resolvedId,
  });

  const getDescriptorProps = (descriptorProps) => {
    const id = useControlDescriptorId(getDescriptorProps?.id);
    return {
      ...descriptorProps,
      id,
    };
  };

  const contextValue = {
    getControlProps,
    getDescriptorProps,
    controlId: resolvedId,
    isInvalid,
    isValid,
    size,
    addDescriptorId: addId,
    getNewDescriptorId: getNewId,
    removeDescriptorId: removeId,
  };
  return (
    <FormControlContext.Provider value={contextValue}>
      {children}
    </FormControlContext.Provider>
  );
};

FormControlContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  controlId: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};

FormControlContextProvider.defaultProps = {
  controlId: undefined,
  isInvalid: undefined,
  isValid: undefined,
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
  size: undefined,
};

export {
  FormControlContext,
  FormControlContextProvider,
  useFormControlContext,
  useControlDescriptorId,
};
