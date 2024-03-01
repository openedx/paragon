import React from 'react';

export type FeedbackVariants = 'default' | 'valid' | 'invalid' | 'warning' | 'criteria-empty' | 'criteria-valid' | 'criteria-invalid';

export interface FormControlFeedbackProps {
    children: React.ReactNode;
    className?: string;
    hasIcon?: boolean;
    type?: FeedbackVariants,
    icon?: React.ReactNode;
    muted?: boolean;
}

declare const FormControlFeedback: React.FC<FormControlFeedbackProps>;

export default FormControlFeedback;
