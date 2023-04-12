import React from 'react';

export interface LabelledCheckboxProps {
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    label: React.ReactNode | ((props: LabelledCheckboxProps) => React.ReactNode);
    id: string;
}

declare const LabelledCheckbox: React.FC<LabelledCheckboxProps>;

export default LabelledCheckbox;
