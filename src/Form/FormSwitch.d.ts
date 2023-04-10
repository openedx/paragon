import React from 'react';

export interface FormSwitchProps {
    children: React.ReactNode;
    className?: string;
    labelClassName?: string;
    helperText?: React.ReactNode;
    floatLabelLeft?: boolean;
}

export interface FormSwitchControlProps {
    isIndeterminate?: boolean;
    className?: string;
}

declare const FormSwitch = React.FC<FormSwitchProps>;
declare const SwitchControl = React.FC<FormSwitchControlProps>;

export { SwitchControl };

export default FormSwitch;
