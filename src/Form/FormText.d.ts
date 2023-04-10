import React from 'react';

export type FormTextTypes = 'default' | 'valid' | 'invalid' | 'warning' | 'criteria-empty' | 'criteria-valid' | 'criteria-invalid';

export interface FormTextIconProps {
    type?: FormTextTypes;
    customIcon?: React.ReactNode;
}

export interface FormTextProps {
    children: React.ReactNode;
    className?: string;
    hasIcon?: boolean;
    type?: FormTextTypes,
    icon?: React.ReactNode;
    muted?: boolean;
}

declare const FormText = React.FC<FormTextProps>;
declare const FormTextIcon = React.FC<FormTextIconProps>;

export { FormTextIcon };

export default FormText;
