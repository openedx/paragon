import React from 'react';

export interface FormRadioSetContextProps {
    children: React.ReactNode;
    name: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    defaultValue?: string;
}

declare const FormRadioSetContext = React.FC<FormRadioSetContextProps>;

export default FormRadioSetContext;
