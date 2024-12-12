import React from 'react';

export type HandlersTypes = {
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface RadioControlProps extends HandlersTypes {
    value: string;
}

export interface FormRadioSetContextValue extends RadioControlProps {
    name: string;
    defaultValue?: string;
    getRadioControlProps: (props: RadioControlProps) => RadioControlProps;
}

export interface FormRadioSetContextProviderProps extends FormRadioSetContextValue {
    children: React.ReactNode;
}

declare const FormRadioSetContext: React.Context<FormRadioSetContextValue>;
declare function useRadioSetContext(): FormRadioSetContextValue;
declare function FormRadioSetContextProvider(props: FormRadioSetContextProviderProps): JSX.Element;

export { useRadioSetContext, FormRadioSetContextProvider };

export default FormRadioSetContext;
