import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';
import { FormControlSizes } from './FormGroupContext';

export interface FormGroupProps extends BsPrefixProps, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    controlId?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: FormControlSizes;
}

declare const FormGroup: React.FC<FormGroupProps>;

export default FormGroup;
