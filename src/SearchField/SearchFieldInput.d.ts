import * as React from 'react';

export interface SearchFieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
}

declare function SearchFieldInput(props: SearchFieldInputProps): JSX.Element;

export default SearchFieldInput;
