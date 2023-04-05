import * as React from 'react';
import SelectableBoxSet from './SelectableBoxSet';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface SelectableBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string | number;
  checked?: boolean;
  type?: 'radio' | 'checkbox';
  onClick?: (inputRef: HTMLInputElement) => void;
  onFocus?: () => void;
  inputHidden?: boolean;
  isIndeterminate?: boolean;
  isInvalid?: boolean;
  className?: string;
}

type SelectableBoxRef = HTMLDivElement & {
  inputRef?: HTMLInputElement;
};

declare const SelectableBox: React.ForwardRefExoticComponent<
SelectableBoxProps & React.RefAttributes<SelectableBoxRef>
> & {
  Set: typeof SelectableBoxSet;
};

export default SelectableBox;
