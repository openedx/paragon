import React from 'react';

export interface SearchFieldAdvancedProps {
  children: React.ReactNode;
  onSubmit: (value: string) => void;
  className?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  screenReaderText?: {
    label: string | React.ReactElement;
    submitButton: string | React.ReactElement;
    clearButton?: string | React.ReactElement;
  };
  value?: string;
  icons?: {
    submit: React.ReactElement;
    clear?: React.ReactElement;
  };
  formAriaLabel?: string;
  disabled?: boolean;
  submitButtonLocation?: 'internal' | 'external';
}

declare const SearchFieldAdvanced = React.FC<SearchFieldAdvancedProps>;

export default SearchFieldAdvanced;
