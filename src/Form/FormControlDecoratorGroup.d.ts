import React from 'react';
import { FORM_CONTROL_SIZES } from './constants';

export interface FormControlDecoratorGroupProps {
    children: React.ReactNode;
    leadingElement?: React.ReactNode;
    trailingElement?: React.ReactNode;
    floatingLabel?: React.ReactNode;
    className?: string;
    size?: FORM_CONTROL_SIZES.SMALL | FORM_CONTROL_SIZES.LARGE;
}

declare const FormControlDecoratorGroup: React.FC<FormControlDecoratorGroupProps>;

export default FormControlDecoratorGroup;
