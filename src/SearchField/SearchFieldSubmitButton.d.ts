import React from 'react';

export interface SearchFieldSubmitButtonProps {
    variant?: 'light' | 'dark';
    submitButtonLocation?: 'internal' | 'external';
    buttonText?: string;
}

declare const SearchFieldSubmitButton: React.FC<SearchFieldSubmitButtonProps>;

export default SearchFieldSubmitButton;
