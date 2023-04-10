import React from 'react';

export interface FormAutosuggestOptionProps {
    className?: string;
    children?: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

declare const FormAutosuggestOption = React.FC<FormAutosuggestOptionProps>;

export default FormAutosuggestOption;
