import React from 'react';
import { FORM_CONTROL_SIZES } from './constants';

export interface FormGroupContextProviderProps {
    children: React.ReactNode;
    controlId?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: FORM_CONTROL_SIZES.SMALL | FORM_CONTROL_SIZES.LARGE;
}

declare const FormGroupContextProvider = React.FC<FormGroupContextProviderProps>;

export default FormGroupContextProvider;
