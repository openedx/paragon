import React from 'react';

export interface FormRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    className?: string;
    controlClassName?: string;
    labelClassName?: string;
    description?: React.ReactNode;
    isInvalid?: boolean;
    isValid?: boolean;
}

declare const FormRadio = React.FC<FormRadioProps>;

export default FormRadio;
