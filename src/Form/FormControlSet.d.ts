import React from 'react';

export interface FormControlSetProps {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    isInline?: boolean;
    children?: React.ReactNode;
}

declare const FormControlSet = React.FC<FormControlSetProps>;

export default FormControlSet;
