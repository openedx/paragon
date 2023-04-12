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

export interface CheckboxControlProps {
    isIndeterminate?: boolean;
    className?: string;
}

declare const FormCheckbox: React.FC<FormCheckboxProps>;

declare const CheckboxControl: React.FC<CheckboxControlProps>;

export { CheckboxControl };

export default FormCheckbox;
