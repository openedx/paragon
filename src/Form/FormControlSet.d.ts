import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface FormControlSetProps extends BsPrefixProps{
    className?: string;
    isInline?: boolean;
    children?: React.ReactNode;
}

declare const FormControlSet: React.FC<FormControlSetProps>;

export default FormControlSet;
