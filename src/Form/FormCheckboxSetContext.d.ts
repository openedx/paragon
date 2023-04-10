import { ReactNode } from 'react';

type CheckboxSetControlProps = {
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    checked?: boolean;
    defaultChecked?: boolean;
    value?: string;
};

type CheckboxSetContextValue = {
    name?: string;
    value?: string[];
    defaultValue?: string[];
    getCheckboxControlProps: (props: CheckboxSetControlProps) => CheckboxSetControlProps;
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    hasCheckboxSetProvider?: boolean;
};

type FormCheckboxSetContextProviderProps = {
    children: ReactNode;
    name?: string;
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    value?: string[];
    defaultValue?: string[];
};

export function useCheckboxSetContext(): CheckboxSetContextValue;
export function FormCheckboxSetContextProvider(props: FormCheckboxSetContextProviderProps): JSX.Element;
