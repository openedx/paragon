import React from 'react';

export interface FormLabelProps {
    className?: string;
    children: React.ReactNode;
    isInline?: boolean;
    size?: 'sm' | 'lg';
}

declare const FormLabel = React.FC<FormLabelProps>;

export default FormLabel;
