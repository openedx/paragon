import React from 'react';
import { SelectableBoxSetProps } from './SelectableBoxSet';

export interface SelectableBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string | number;
    checked?: boolean;
    type?: 'radio' | 'checkbox';
    onClick?: (inputRef: React.HTMLInputElement) => void;
    onFocus?: () => void;
    inputHidden?: boolean;
    isIndeterminate?: boolean;
    isInvalid?: boolean;
    className?: string;
}

export type SelectableBoxRef = React.HTMLDivElement & {
    inputRef?: React.HTMLInputElement;
};

declare const SelectableBox: React.ForwardRefExoticComponent<SelectableBoxProps & React.RefAttributes<SelectableBoxRef>> & {
    Set: React.FC<SelectableBoxSetProps>;
};

export default SelectableBox;
