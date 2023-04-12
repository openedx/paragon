export interface TableRowProps {
    row: {
        getRowProps: (props?: any) => any;
        cells: object[];
        id: string;
        isSelected?: boolean;
        isExpanded?: boolean;
    };
}

declare function TableRow({ row }: TableRowProps): JSX.Element;

export default TableRow;
