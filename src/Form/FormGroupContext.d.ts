import React from 'react';

export type FormControlSizes = 'sm' | 'lg';

export interface FormGroupContextProviderProps {
    children: React.ReactNode;
    controlId?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: FormControlSizes;
}

export type DescriptorProps = {
    id?: string;
};

export interface ControlProps extends DescriptorProps {
    'aria-describedby'?: string;
    'aria-labelledby'?: string;
}

export interface LabelProps extends DescriptorProps {
    htmlFor?: string;
}

export interface FormGroupContextProps {
    getControlProps: (props: ControlProps) => ControlProps;
    getLabelProps: (props: LabelProps) => LabelProps;
    getDescriptorProps: (props: DescriptorProps) => DescriptorProps;
    useSetIsControlGroupEffect: (flag: boolean) => void;
    isControlGroup: boolean;
    controlId: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: FormControlSizes;
    hasFormGroupProvider: boolean;
}

declare const FormGroupContextProvider: React.FC<FormGroupContextProviderProps>;

export declare const FormGroupContext: React.Context<FormGroupContextProps>;

export default FormGroupContextProvider;
