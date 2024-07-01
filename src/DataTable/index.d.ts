import React from 'react';
import { BulkActionsProps } from './BulkActions';
import { EmptyTableProps } from './EmptyTable';
import { FilterStatusProps } from './FilterStatus';
import DropdownFilters from './DropdownFilters';
import { RowStatusProps } from './RowStatus';
import { ControlledSelectionStatusProps } from './selection/SelectionStatus';
import SmartStatus from './SmartStatus';
import { TableProps } from './Table';
import { TableCellProps } from './TableCell';
import { TableControlBarProps } from './TableControlBar';
import { TableFiltersProps } from './TableFilters';
import { TableFooterProps } from './TableFooter';
import { TableHeaderCellProps } from './TableHeaderCell';
import { TableHeaderRowProps } from './TableHeaderRow';
import TablePagination from './TablePagination';
import TablePaginationMinimal from './TablePaginationMinimal';
import { TableActionsProps } from './TableActions';
import { ControlledSelectProps } from './selection/ControlledSelect';
import { ControlledSelectHeaderProps } from './selection/ControlledSelectHeader';
import { ExpandAllProps } from './ExplandAll';
import { ExpandRowProps } from './ExplandRow';

export interface BulkAction {
    buttonText: string;
    handleClick: () => void;
    className?: string;
    variant?: string;
    disabled?: boolean;
}

export type BulkActionProp = BulkAction | (() => BulkAction) | React.ReactElement;

export interface TableAction {
    buttonText: string;
    handleClick: () => void;
    className?: string;
    variant?: string;
    disabled?: boolean;
}

export type TableActionType = TableAction | (() => TableAction) | React.ReactElement;

export interface DataTableProps {
    columns: {
        Header: string;
        accessor?: string;
        Cell?: (cell: any) => React.ReactNode;
        Filter?: Function;
        filter?: string;
        filterChoices?: {
            name: string;
            number: number;
            value: string
        }[];
    }[];
    data: object;
    defaultColumnValues?: {
        Filter: () => React.ReactNode;
    };
    additionalColumns?: {
        id: string;
        Header?: string;
        Cell?: (cell: any) => React.ReactNode;
    }[];
    isSelectable?: boolean;
    isPaginated?: boolean;
    manualPagination?: boolean;
    pageCount?: number;
    itemCount?: number;
    isFilterable?: boolean;
    manualFilters?: boolean;
    fetchData?: (data: object) => void;
    initialState?: {
        pageSize?: number;
        pageIndex?: number;
        filters?: { [key: string]: any }[];
        sortBy?: { [key: string]: any }[];
        selectedRowIds?: { [key: string]: any };
    };
    isSortable?: boolean;
    manualSortBy?: boolean;
    isExpandable?: boolean;
    renderRowSubComponent?: (row: number, index: number) => React.ReactNode;
    bulkActions?: BulkActionProp[];
    tableActions?: TableActionType[];
    numBreakoutFilters?: 1 | 2 | 3 | 4;
    initialTableOptions?: object;
    EmptyTableComponent?: Function;
    RowStatusComponent?: Function;
    SelectionStatusComponent?: Function;
    FilterStatusComponent?: Function;
    manualSelectColumn?: {
        id: string;
        Header: () => React.ReactNode;
        Cell: (cell: any) => React.ReactNode,
        disableSortBy: boolean;
    };
    showFiltersInSidebar?: boolean;
    dataViewToggleOptions?: {
        isDataViewToggleEnabled?: boolean;
        onDataViewToggle?: Function;
        defaultActiveStateValue?: string;
        togglePlacement?: string;
    };
    disableElevation?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    onSelectedRowsChanged?: (selectedRowIds: Record<string, boolean>) => void;
}

declare const DataTable: React.FC<DataTableProps> & {
    BulkActions: React.FC<BulkActionsProps>;
    EmptyTable: React.FC<EmptyTableProps>;
    DropdownFilters: typeof DropdownFilters;
    FilterStatus: React.FC<FilterStatusProps>;
    RowStatus: React.FC<RowStatusProps>;
    SelectionStatus: React.FC<ControlledSelectionStatusProps>;
    SmartStatus: typeof SmartStatus;
    Table: React.FC<TableProps>;
    TableCell: React.FC<TableCellProps>;
    TableControlBar: React.FC<TableControlBarProps>;
    TableFilters: React.FC<TableFiltersProps>;
    TableFooter: React.FC<TableFooterProps>;
    TableHeaderCell: React.FC<TableHeaderCellProps>;
    TableHeaderRow: React.FC<TableHeaderRowProps>;
    TablePagination: typeof TablePagination;
    TablePaginationMinimal: typeof TablePaginationMinimal;
    TableActions: React.FC<TableActionsProps>;
    ControlledSelectionStatus: React.FC<ControlledSelectionStatusProps>;
    ControlledSelect: React.FC<ControlledSelectProps>;
    ControlledSelectHeader: React.FC<ControlledSelectHeaderProps>;
    ExpandAll: React.FC<ExpandAllProps>;
    ExpandRow: React.FC<ExpandRowProps>;
};

export default DataTable;
