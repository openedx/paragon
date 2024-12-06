import React from 'react';

export type FilterChoice = {
    name: string;
    number?: number;
    value: string | number;
};

export interface DropdownFilterProps {
    column: {
        setFilter: (value: string | undefined) => void;
        Header: React.ReactNode;
        filterChoices: FilterChoice[];
        getHeaderProps: () => { key: string };
    }
}

declare const DropdownFilter: React.FC<DropdownFilterProps>;

export default DropdownFilter;
