import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import classNames from 'classnames';
import { newId } from '../utils';
import { useIdList, omitUndefinedProperties } from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const identityFn = (props: Record<string, any>) => props;
const noop = () => {};

interface FormGroupContextData {
  getControlProps: (props: Record<string, any>) => Record<string, any>;
  getLabelProps: (props: React.HTMLProps<'label'>) => React.HTMLProps<'label'>;
  getDescriptorProps: (props: Record<string, any>) => Record<string, any>;
  useSetIsControlGroupEffect: (isControlGroup: boolean) => void;
  isControlGroup?: boolean;
  controlId?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  size?: string;
  hasFormGroupProvider?: boolean;
}

const FormGroupContext = React.createContext<FormGroupContextData>({
  getControlProps: identityFn,
  useSetIsControlGroupEffect: noop,
  getLabelProps: identityFn,
  getDescriptorProps: identityFn,
  hasFormGroupProvider: false,
});

const useFormGroupContext = () => React.useContext(FormGroupContext);

function useStateEffect<ValueType extends any>(
  initialState: ValueType,
): [value: ValueType, setter: (v: ValueType) => void] {
  const [state, setState] = useState(initialState);
  const useSetStateEffect = (newState: ValueType) => {
    useEffect(() => setState(newState), [newState]);
  };
  return [state, useSetStateEffect];
}

function FormGroupContextProvider({
  children,
  controlId: explicitControlId,
  isInvalid,
  isValid,
  size,
}: {
  children: React.ReactNode;
  controlId?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  size: typeof FORM_CONTROL_SIZES.SMALL | typeof FORM_CONTROL_SIZES.LARGE;
}) {
  const controlId = useMemo(() => explicitControlId || newId('form-field'), [explicitControlId]);
  const [describedByIds, registerDescriptorId] = useIdList(controlId);
  const [labelledByIds, registerLabelerId] = useIdList(controlId);
  const [isControlGroup, useSetIsControlGroupEffect] = useStateEffect(false);

  const getControlProps = useCallback((controlProps) => {
    // labelledByIds from the list above should only be added to a control
    // if it the control is a group. We prefer adding a condition here because:
    //    - Hooks cannot be called inside conditionals
    //    - The getLabelProps function below is forced to generate an id
    //      whether it is needed or not.
    //    - This is what allows consumers of Paragon to use <Form.Label>
    //      interchangeably between ControlGroup type controls and regular Controls
    const labelledByIdsForControl = isControlGroup ? labelledByIds : undefined;
    return omitUndefinedProperties({
      ...controlProps,
      'aria-describedby': classNames(controlProps['aria-describedby'], describedByIds) || undefined,
      'aria-labelledby': classNames(controlProps['aria-labelledby'], labelledByIdsForControl) || undefined,
      id: controlId,
    });
  }, [
    isControlGroup,
    describedByIds,
    labelledByIds,
    controlId,
  ]);

  const getLabelProps = (labelProps: React.HTMLProps<'label'>) => {
    const id = registerLabelerId(labelProps?.id);
    if (isControlGroup) {
      return { ...labelProps, id };
    }
    return { ...labelProps, htmlFor: controlId };
  };

  const getDescriptorProps = (descriptorProps: Record<string, any>) => {
    const id = registerDescriptorId(descriptorProps?.id);
    return { ...descriptorProps, id };
  };

  const contextValue: FormGroupContextData = {
    getControlProps,
    getLabelProps,
    getDescriptorProps,
    useSetIsControlGroupEffect,
    isControlGroup,
    controlId,
    isInvalid,
    isValid,
    size,
    hasFormGroupProvider: true,
  };

  return (
    <FormGroupContext.Provider value={contextValue}>
      {children}
    </FormGroupContext.Provider>
  );
}

export {
  FormGroupContext,
  FormGroupContextProvider,
  useFormGroupContext,
};
