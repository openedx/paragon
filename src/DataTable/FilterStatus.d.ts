import React from 'react';

export interface FilterStatusProps {
    className?: string;
    buttonClassName?: string;
    variant?: string;
    size?: string;
    clearFiltersText?: string | React.ReactElement;
    showFilteredFields?: boolean;
}

declare function FilterStatus(props: FilterStatusProps): JSX.Element;

export default FilterStatus;

