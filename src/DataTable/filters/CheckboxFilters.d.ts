import React from 'react';

export interface CheckboxFiltersProps {
    column: {
        setFilter: (value: string | undefined) => void;
        Header: React.ReactNode;
        filterChoices: { name: string; value?: string | number; number?: number }[];
        getHeaderProps: () => { key: string };
        filterValue?: string[];
    }
}

declare const CheckboxFilter: React.FC<CheckboxFiltersProps>;

export default CheckboxFilter;
