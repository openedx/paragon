import React from 'react';

export interface FormAutosuggestProps {
    arrowKeyNavigationSelector?: string;
    ignoredArrowKeysNames?: string[];
    isLoading?: boolean;
    role?: string;
    className?: string;
    floatingLabel?: string;
    onChange?: (value: string) => void;
    helpMessage?: string;
    placeholder?: string;
    value?: string;
    errorMessageText?: string;
    name?: string;
    readOnly?: boolean;
    children?: React.ReactNode;
    screenReaderText?: string;
    onSelected?: (selectedValue: string) => void;
}

declare const FormAutosuggest: React.FC<FormAutosuggestProps>;

export default FormAutosuggest;
