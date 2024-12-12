import React from 'react';

export interface FormRadioSetProps {
    children: React.ReactNode;
    className?: string;
    name: string;
    value?: string;
    defaultValue?: string;
    isInline?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

declare const FormRadioSet: React.FC<FormRadioSetProps>;

export default FormRadioSet;
