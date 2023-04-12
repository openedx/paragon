import React from 'react';
import { FormControlSizes } from './FormGroupContext';

export interface FormLabelProps {
    className?: string;
    children: React.ReactNode;
    isInline?: boolean;
    size?: FormControlSizes;
}

declare const FormLabel: React.FC<FormLabelProps>;

export default FormLabel;
