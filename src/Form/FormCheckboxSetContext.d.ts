import React from 'react';

export type CheckboxProps = {
    value: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type FormCheckboxSetContextValue = {
    name?: string;
    value?: string[];
    defaultValue?: string[];
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    getCheckboxControlProps: (checkboxProps: CheckboxProps) => CheckboxProps;
    hasCheckboxSetProvider: boolean;
};

export declare const FormCheckboxSetContext: React.Context<FormCheckboxSetContextValue>;

export declare const useCheckboxSetContext: () => FormCheckboxSetContextValue;

export type FormCheckboxSetContextProviderProps = {
    children: React.ReactNode;
    name?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string[];
    defaultValue?: string[];
};

export declare const FormCheckboxSetContextProvider: React.FC<FormCheckboxSetContextProviderProps>;
