export interface TableHeaderCellProps {
    getHeaderProps: () => void;
    isSorted?: boolean;
    render: (arg0: string) => void;
    isSortedDesc?: boolean;
    getSortByToggleProps?: () => void;
    canSort?: boolean;
    headerClassName: string;
}

declare function TableHeaderCell(props: TableHeaderCellProps): JSX.Element;

export default TableHeaderCell;
