import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';
import Table from './Table';

import getVisibleColumns from './utils/getVisibleColumns';
import { requiredWhen } from './utils/propTypesUtils';
import getTableArgs from './utils/getTableArgs';
import TableControlBar from './TableControlBar';
import EmptyTableContent from './EmptyTable';
import TableFooter from './TableFooter';
import BulkActions from './BulkActions';
import DropdownFilters from './DropdownFilters';
import FilterStatus from './FilterStatus';
import RowStatus from './RowStatus';
import SelectionStatus from './SelectionStatus';
import ControlledSelectionStatus from './selection/ControlledSelectionStatus';
import SmartStatus from './SmartStatus';
import TableFilters from './TableFilters';
import TableHeaderCell from './TableHeaderCell';
import TableCell from './TableCell';
import TableHeaderRow from './TableHeaderRow';
import TablePagination from './TablePagination';
import DataTableContextProvider from './DataTableContextProvider';
import TableActions from './TableActions';
import ControlledSelectWithContext from './selection/ControlledSelectWithContext';
import ControlledSelectWithContextHeader from './selection/ControlledSelectWithContextHeader';

function DataTable({
  columns, data, defaultColumnValues, additionalColumns, isSelectable,
  isPaginated, manualPagination, pageCount, itemCount,
  isFilterable, manualFilters, fetchData, initialState,
  isSortable, manualSortBy,
  bulkActions, tableActions, numBreakoutFilters,
  initialTableOptions,
  EmptyTableComponent,
  manualSelectColumn,
  children,
  ...props
}) {
  const defaultColumn = useMemo(
    () => (defaultColumnValues),
    [defaultColumnValues],
  );
  const tableOptions = useMemo(() => ({
    columns,
    data,
    defaultColumn,
    manualFilters,
    manualPagination,
    manualSortBy,
    initialState,
    ...initialTableOptions,
  }), [columns, data, defaultColumn, manualFilters, manualPagination, initialState, initialTableOptions]);

  if (isPaginated && manualPagination) {
    // pageCount is required when pagination is manual, if it's not there passing -1 as per react-table docs
    tableOptions.pageCount = pageCount || -1;
  }

  // NB: Table args *must* be in a particular order
  const tableArgs = getTableArgs({
    tableOptions, isFilterable, isSelectable, isPaginated, isSortable,
  });
  // adds selection column and action columns as necessary
  tableArgs.push(hooks => {
    hooks.visibleColumns.push(
      visibleColumns => getVisibleColumns(isSelectable, visibleColumns, additionalColumns, manualSelectColumn),
    );
  });

  // Use the state and functions returned from useTable to build your UI
  const instance = useTable(...tableArgs);

  useEffect(() => {
    if (fetchData) {
      fetchData(instance.state);
    }
  }, [fetchData, JSON.stringify(instance.state)]);

  const enhancedInstance = {
    ...instance,
    itemCount,
    numBreakoutFilters,
    bulkActions,
    tableActions,
    ...props,
  };

  return (
    <DataTableContextProvider value={enhancedInstance}>
      <div className="pgn__data-table-wrapper">
        {children || (
          <>
            <TableControlBar />
            <Table />
            <EmptyTableComponent content="No results found" />
            <TableFooter />
          </>
        )}
      </div>
    </DataTableContextProvider>
  );
}

DataTable.defaultProps = {
  additionalColumns: [],
  defaultColumnValues: {},
  isFilterable: false,
  isPaginated: false,
  isSelectable: false,
  isSortable: false,
  manualFilters: false,
  manualPagination: false,
  manualSortBy: false,
  fetchData: null,
  initialState: {},
  initialTableOptions: {},
  EmptyTableComponent: EmptyTableContent,
  children: null,
  bulkActions: [],
  tableActions: [],
  numBreakoutFilters: 1,
  manualSelectColumn: undefined,
  SelectionStatusComponent: SelectionStatus,
  FilterStatusComponent: FilterStatus,
  RowStatusComponent: RowStatus,
};

DataTable.propTypes = {
  /** Definition of table columns */
  columns: PropTypes.arrayOf(PropTypes.shape({
    /** User visible column name */
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    /** String used to access the correct cell data for this column */
    accessor: PropTypes.string.isRequired,
  })).isRequired,
  /** Data to be displayed in the table */
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  /** table rows can be selected */
  isSelectable: PropTypes.bool,
  /** Alternate column for selecting rows. See react table useSort docs for more information */
  manualSelectColumn: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    Cell: PropTypes.func.isRequired,
    disableSortBy: PropTypes.bool.isRequired,
  }),
  /** Table columns can be sorted */
  isSortable: PropTypes.bool,
  /** Indicates that sorting will be done via backend API. A fetchData function must be provided */
  manualSortBy: PropTypes.bool,
  /** Paginate the table */
  isPaginated: PropTypes.bool,
  /* Indicates that pagination will be done manually. A fetchData function must be provided */
  manualPagination: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  pageCount: requiredWhen(PropTypes.number, 'manualPagination'),
  /** Table rows can be filtered, using a default filter in the default column values, or in the column definition */
  isFilterable: PropTypes.bool,
  /** Indicates that filtering will be done via a backend API. A fetchData function must be provided */
  manualFilters: PropTypes.bool,

  /** defaults that will be set on each column. Will be overridden by individual column values */
  defaultColumnValues: PropTypes.shape({
    /** A default filter component for the column */
    Filter: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  }),
  /** Actions or other additional non-data columns can be added here  */
  additionalColumns: PropTypes.arrayOf(PropTypes.shape({
    /** id must be unique from other columns ids */
    id: PropTypes.string.isRequired,
    /** column header that will be displayed to the user */
    Header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Component that renders in the added column. It will receive the row as a prop */
    Cell: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  })),
  /** Function that will fetch table data. Called when page size, page index or filters change.
    * Meant to be used with manual filters and pagination */
  fetchData: PropTypes.func,
  /** Initial state passed to react-table's documentation https://react-table.tanstack.com/docs/api/useTable */
  initialState: PropTypes.shape({
    pageSize: requiredWhen(PropTypes.number, 'isPaginated'),
    pageIndex: requiredWhen(PropTypes.number, 'isPaginated'),
    filters: requiredWhen(PropTypes.arrayOf(PropTypes.shape()), 'manualFilters'),
    sortBy: requiredWhen(PropTypes.arrayOf(PropTypes.shape()), 'manualSortBy'),
  }),
  /** Table options passed to react-table's useTable hook. Will override some options passed in to DataTable, such
     as: data, columns, defaultColumn, manualFilters, manualPagination, manualSortBy, and initialState */
  initialTableOptions: PropTypes.shape({}),
  /** Total number of items */
  itemCount: PropTypes.number.isRequired,
  /** Actions to be performed on selected rows of the table. Called with the selected rows.
   *  Only displayed if rows are selected. */
  bulkActions: PropTypes.arrayOf(PropTypes.shape({
    /** Bulk action button text */
    buttonText: PropTypes.string.isRequired,
    /** handleClick will be passed the selected rows */
    handleClick: PropTypes.func.isRequired,
    /** classnames for button class */
    className: PropTypes.string,
    /** optional button variant; only relevant for the first two buttons */
    variant: PropTypes.string,
    /** disables button */
    disabled: PropTypes.disabled,
  })),
  /** Actions to be performed on the table. Called with the table instance. Not displayed if rows are selected. */
  tableActions: PropTypes.arrayOf(PropTypes.shape({
    /** Bulk action button text */
    buttonText: PropTypes.string.isRequired,
    /** handleClick will be passed the selected rows */
    handleClick: PropTypes.func.isRequired,
    /** classnames for button class */
    className: PropTypes.string,
    /** optional button variant; only relevant for the first two buttons */
    variant: PropTypes.string,
    /** disables button */
    disabled: PropTypes.disabled,
  })),
  /** Number between one and four filters that can be shown on the top row. */
  numBreakoutFilters: PropTypes.oneOf([1, 2, 3, 4]),
  /** Component to be displayed when the table is empty */
  EmptyTableComponent: PropTypes.func,
  /** Component to be displayed for row status, ie, 10 of 20 rows. Displayed by default in the TableControlBar */
  RowStatusComponent: PropTypes.func,
  /** Component to be displayed for selection status. Displayed when there are selected rows and no active filters */
  SelectionStatusComponent: PropTypes.func,
  /** Component to be displayed for filter status. Displayed when there are active filters. */
  FilterStatusComponent: PropTypes.func,
  /** If children are not provided a table with control bar and footer will be rendered */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

DataTable.BulkActions = BulkActions;
DataTable.EmptyTable = EmptyTableContent;
DataTable.DropdownFilters = DropdownFilters;
DataTable.FilterStatus = FilterStatus;
DataTable.RowStatus = RowStatus;
DataTable.SelectionStatus = SelectionStatus;
DataTable.SmartStatus = SmartStatus;
DataTable.Table = Table;
DataTable.TableCell = TableCell;
DataTable.TableControlBar = TableControlBar;
DataTable.TableFilters = TableFilters;
DataTable.TableFooter = TableFooter;
DataTable.TableHeaderCell = TableHeaderCell;
DataTable.TableHeaderRow = TableHeaderRow;
DataTable.TablePagination = TablePagination;
DataTable.TableActions = TableActions;
DataTable.ControlledSelectionStatus = ControlledSelectionStatus;
DataTable.ControlledSelectWithContext = ControlledSelectWithContext;
DataTable.ControlledSelectWithContextHeader = ControlledSelectWithContextHeader;

export default DataTable;
