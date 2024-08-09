import React from 'react';

export interface TextFilterProps {
    column: {
        filterValue?: string;
        setFilter: (value?: string) => void;
        Header: React.ReactNode | ((props?: any) => React.ReactNode);
        getHeaderProps: (props?: any) => { key: string };
    }
}

declare const TextFilter: React.FC<TextFilterProps>;

export default TextFilter;
