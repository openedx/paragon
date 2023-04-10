import React from 'react';

export interface FormGroupProps {
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    controlId?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: 'sm' | 'lg';
}

declare const FormGroup = React.FC<FormGroupProps>;

export default FormGroup;
