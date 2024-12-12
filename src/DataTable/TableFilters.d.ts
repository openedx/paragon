import React from 'react';

interface TableColumn {
    Header: string | React.ReactNode;
    canFilter?: boolean;
    render: (arg0: string) => React.ReactNode;
}

export interface TableFiltersProps {
    columns: Array<TableColumn>;
}

declare function TableFilters(props: TableFiltersProps): JSX.Element;

export default TableFilters;
