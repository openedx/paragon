import React from 'react';

export interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    className?: string;
    controlClassName?: string;
    labelClassName?: string;
    description?: React.ReactNode;
    isInvalid?: boolean;
    isValid?: boolean;
    controlAs?: keyof JSX.IntrinsicElements;
    floatLabelLeft?: boolean;
}

declare const FormCheckbox = React.FC<FormCheckboxProps>;

export default FormCheckbox;
