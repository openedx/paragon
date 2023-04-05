import * as React from 'react';

export interface SelectableBoxSetProps {
  name: string;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | Array<string | number>;
  defaultValue?: string | number;
  type?: 'radio' | 'checkbox';
  columns?: number;
  className?: string;
}

declare const SelectableBoxSet: React.ForwardRefExoticComponent<
SelectableBoxSetProps & React.RefAttributes<HTMLInputElement>
>;

export default SelectableBoxSet;
