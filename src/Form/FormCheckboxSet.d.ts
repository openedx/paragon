import React from 'react';

export interface FormCheckboxSetProps {
    children: React.ReactNode;
    className?: string;
    name: string;
    value?: string[],
    defaultValue?: string[];
    isInline?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

declare const FormCheckboxSet = React.FC<FormCheckboxSetProps>;

export default FormCheckboxSet;
