import React from 'react';

export interface Choice {
    name: string;
    number?: number;
    value: string | number;
}

export interface MultiSelectDropdownFilterProps {
    column: {
        setFilter: (value: string[]) => void;
        Header: React.ReactNode | ((props: Record<string, unknown>) => JSX.Element);
        filterChoices: Choice[];
        getHeaderProps: () => { key: string };
        filterValue?: string[];
    }
}

declare const MultiSelectDropdownFilter: React.FC<MultiSelectDropdownFilterProps>;

export default MultiSelectDropdownFilter;
