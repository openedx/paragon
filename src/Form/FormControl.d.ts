import React from 'react';
import { FormControlProps as BaseFormControlProps } from 'react-bootstrap/FormControl';
import { FormControlFeedbackProps } from './FormControlFeedback';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface FormControlProps extends BsPrefixProps, BaseFormControlProps {
    className?: string;
    defaultValue?: string | number,
    controlClassName?: string;
    leadingElement?: React.ReactNode;
    trailingElement?: React.ReactNode;
    floatingLabel?: React.ReactNode;
    isInvalid?: boolean;
    autoResize?: boolean;
}

declare const FormControl: React.FC<FormControlProps> & {
    Feedback: React.FC<FormControlFeedbackProps>;
    Description: React.FC<FormControlFeedbackProps>;
};

export default FormControl;
