import React from 'react';
import { SearchFieldAdvancedProps } from './SearchFieldAdvanced';
import { SearchFieldClearButtonProps } from './SearchFieldClearButton';
import { SearchFieldInputProps } from './SearchFieldInput';
import { SearchFieldLabelProps } from './SearchFieldLabel';
import { SearchFieldSubmitButtonProps } from './SearchFieldSubmitButton';

export interface SearchFieldProps {
  onSubmit: (value: string) => void;
  label?: string | React.ReactNode;
  className?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  screenReaderText?: {
    label: string | React.ReactNode;
    submitButton: string | React.ReactNode;
    clearButton?: string | React.ReactNode;
  };
  value?: string;
  icons?: {
    submit: React.ReactNode;
    clear?: React.ReactNode;
  };
  formAriaLabel?: string;
  inputProps?: Record<string, any>;
  variant?: 'light' | 'dark';
  disabled?: boolean;
  submitButtonLocation?: 'internal' | 'external';
  buttonText?: string | React.ReactNode;
}

declare const SearchField: React.FC<SearchFieldProps> & {
  Advanced: React.FC<SearchFieldAdvancedProps>;
  Label: React.FC<SearchFieldLabelProps>;
  Input: React.FC<SearchFieldInputProps>;
  ClearButton: React.FC<SearchFieldClearButtonProps>;
  SubmitButton: React.FC<SearchFieldSubmitButtonProps>;
};

export default SearchField;
