import React from 'react';

export interface TableCellProps {
    getCellProps: () => any;
    render: (type: string) => React.ReactNode;
    column: {
        cellClassName?: string;
    };
}

declare function TableCell(props: TableCellProps): JSX.Element;

export default TableCell;

