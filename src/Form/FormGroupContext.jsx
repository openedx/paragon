import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { newId } from '../utils';
import { useIdList, omitUndefinedProperties } from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const identityFn = props => props;
const noop = () => {};

const FormGroupContext = React.createContext({
  getControlProps: identityFn,
  setControlIsGroup: noop,
  getLabelProps: identityFn,
  getDescriptorProps: identityFn,
  addDescriptorId: identityFn,
  getNewDescriptorId: identityFn,
  removeDescriptorId: identityFn,
});

const useFormGroupContext = () => React.useContext(FormGroupContext);

const useControlIsGroup = (defaultIsGroup) => {
  const [isGroup, setIsGroup] = useState(defaultIsGroup);
  const setIsGroupEffect = (newIsGroup) => {
    useEffect(() => setIsGroup(newIsGroup), []);
  };
  return [isGroup, setIsGroupEffect];
};

const FormGroupContextProvider = ({
  children,
  controlId,
  isInvalid,
  isValid,
  size,
}) => {
  const resolvedId = React.useMemo(() => controlId || newId('form-field'), [controlId]);
  const [describedByIds, useDescriptorId] = useIdList(resolvedId);
  const [labelledByIds, useLabellerId] = useIdList(resolvedId);
  const [controlIsGroup, setControlIsGroup] = useControlIsGroup(false);

  const getControlProps = (controlProps) => {
    // labelledByIds from the list above should only be added to a control
    // if it the control is a group. We prefer adding a condition here because:
    //    - Hooks cannot be called inside conditionals
    //    - The getLabelProps function below is forced to generate an id
    //      whether it is needed or not.
    //    - This is what allows consumers of Paragon to use <Form.Label>
    //      interchangeably between ControlGroup type controls and regular Controls
    const labelledByIdsForControl = controlIsGroup ? labelledByIds : undefined;
    return omitUndefinedProperties({
      ...controlProps,
      'aria-describedby': classNames(controlProps['aria-describedby'], describedByIds) || undefined,
      'aria-labelledby': classNames(controlProps['aria-labelledby'], labelledByIdsForControl) || undefined,
      id: resolvedId,
    });
  };

  const getLabelProps = (labelProps) => {
    const id = useLabellerId(labelProps?.id);
    if (controlIsGroup) {
      return { ...labelProps, id };
    }
    return { ...labelProps, htmlFor: resolvedId };
  };

  const getDescriptorProps = (descriptorProps) => {
    const id = useDescriptorId(descriptorProps?.id);
    return { ...descriptorProps, id };
  };

  const contextValue = {
    getControlProps,
    getLabelProps,
    getDescriptorProps,
    setControlIsGroup,
    controlIsGroup,
    controlId: resolvedId,
    isInvalid,
    isValid,
    size,
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
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};

FormGroupContextProvider.defaultProps = {
  controlId: undefined,
  isInvalid: undefined,
  isValid: undefined,
  size: undefined,
};

export {
  FormGroupContext,
  FormGroupContextProvider,
  useFormGroupContext,
};
