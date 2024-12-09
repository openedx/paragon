import React from 'react';
import { FeedbackVariants } from './FormControlFeedback';

export interface FormTextIconProps {
    type?: FormTextTypes;
    customIcon?: React.ReactNode;
}

export interface FormTextProps {
    children: React.ReactNode;
    className?: string;
    hasIcon?: boolean;
    type?: FeedbackVariants,
    icon?: React.ReactNode;
    muted?: boolean;
}

declare const FormText: React.FC<FormTextProps>;

declare const FormTextIcon: React.FC<FormTextIconProps>;

export { FormTextIcon };

export default FormText;
