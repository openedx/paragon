import React from 'react';
import { TableHeaderCellProps } from './TableHeaderCell';

export interface TableHeaderRowProps {
    headerGroups: {
        headers: TableHeaderCellProps[];
        getHeaderGroupProps: () => React.HTMLAttributes<HTMLTableRowElement>;
    }
}

declare function TableHeaderRow(props: TableHeaderRowProps): JSX.Element;

export default TableHeaderRow;
