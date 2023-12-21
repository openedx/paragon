import React, {
  useEffect, useMemo, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { useTable, useMountedLayoutEffect } from 'react-table';

import classNames from 'classnames';
import Table from './Table';
import getVisibleColumns from './utils/getVisibleColumns';
import { requiredWhen, requiredWhenNot } from '../utils/propTypes';
import getTableArgs from './utils/getTableArgs';
import TableControlBar from './TableControlBar';
import EmptyTableContent from './EmptyTable';
import TableFooter from './TableFooter';
import BulkActions from './BulkActions';
import DropdownFilters from './DropdownFilters';
import FilterStatus from './FilterStatus';
import RowStatus from './RowStatus';
import SelectionStatus from './selection/SelectionStatus';
import ControlledSelectionStatus from './selection/ControlledSelectionStatus';
import SmartStatus from './SmartStatus';
import TableFilters from './TableFilters';
import TableHeaderCell from './TableHeaderCell';
import TableCell from './TableCell';
import TableHeaderRow from './TableHeaderRow';
import TablePagination from './TablePagination';
import TablePaginationMinimal from './TablePaginationMinimal';
import DataTableContext from './DataTableContext';
import TableActions from './TableActions';
import ControlledSelect from './selection/ControlledSelect';
import ControlledSelectHeader from './selection/ControlledSelectHeader';
import DataTableLayout from './DataTableLayout';
import ExpandAll from './ExpandAll';
import ExpandRow from './ExpandRow';

import { useSelectionActions } from './hooks';
import selectionsReducer, { initialState as initialSelectionsState } from './selection/data/reducer';

function DataTable({
  columns, data, defaultColumnValues, additionalColumns, isSelectable,
  isPaginated, manualPagination, pageCount, itemCount,
  isFilterable, manualFilters, fetchData, initialState,
  isSortable, manualSortBy,
  isExpandable, renderRowSubComponent,
  bulkActions, tableActions, numBreakoutFilters,
  initialTableOptions,
  EmptyTableComponent,
  manualSelectColumn,
  showFiltersInSidebar,
  dataViewToggleOptions,
  disableElevation,
  isLoading,
  children,
  onSelectedRowsChanged,
  maxSelectedRows,
  onMaxSelectedRows,
  ...props
}) {
  const defaultColumn = useMemo(
    () => (defaultColumnValues),
    [defaultColumnValues],
  );
  const tableOptions = useMemo(() => {
    const updatedTableOptions = {
      stateReducer: (newState, action, previousState) => {
        switch (action.type) {
          // Note: we override the `toggleAllRowsSelected` action
          // from react-table because it only clears the selections on the
          // currently visible page; it does not clear the `selectedRowIds`
          // as we would expect for selections on different pages. Instead, we
          // force `selectedRowIds` to be cleared when `toggleAllRowsSelected(false)`
          // is called.
          case 'toggleAllRowsSelected': {
            if (action.value) {
              return newState;
            }
            return {
              ...newState,
              selectedRowIds: {},
            };
          }
          /*  Note: We override the `toggleRowSelected` action from react-table
              because we need to preserve the order of the selected rows.
              While `selectedRowIds` is an object that contains the selected rows as key-value pairs,
              it does not maintain the order of selection. Therefore, we have added the `selectedRowsOrdered` property
              to keep track of the order in which the rows were selected.
          */
          case 'toggleRowSelected': {
            const rowIndex = parseInt(action.id, 10);
            const { selectedRowsOrdered = [] } = previousState;

            let newSelectedRowsOrdered;
            if (action.value) {
              newSelectedRowsOrdered = [...selectedRowsOrdered, rowIndex];
            } else {
              newSelectedRowsOrdered = selectedRowsOrdered.filter((item) => item !== rowIndex);
            }

            return {
              ...newState,
              selectedRowsOrdered: newSelectedRowsOrdered,
            };
          }
          default:
            return newState;
        }
      },
      ...initialTableOptions,
    };
    return {
      columns,
      data,
      defaultColumn,
      manualFilters,
      manualPagination,
      manualSortBy,
      initialState,
      ...updatedTableOptions,
    };
  }, [initialTableOptions, columns, data, defaultColumn, manualFilters, manualPagination, manualSortBy, initialState]);

  const [selections, selectionsDispatch] = useReducer(selectionsReducer, initialSelectionsState);

  if (isPaginated && manualPagination) {
    // pageCount is required when pagination is manual, if it's not there passing -1 as per react-table docs
    tableOptions.pageCount = pageCount || -1;
  }

  // NB: Table args *must* be in a particular order
  const tableArgs = getTableArgs({
    tableOptions, isFilterable, isSelectable, isPaginated, isSortable, isExpandable,
  });
  // adds selection column and action columns as necessary
  tableArgs.push(hooks => {
    hooks.visibleColumns.push(
      visibleColumns => getVisibleColumns(isSelectable, visibleColumns, additionalColumns, manualSelectColumn),
    );
  });

  // Pass any controlled selections from context to the appropriate ``useTable`` arguments to maintain
  // correct selection states on rows, both from a data perspective and in the UI.
  const selectionProps = {};
  const { selectedRows } = selections;
  if (selectedRows.length > 0) {
    const selectedRowsById = {};
    selectedRows.forEach((row) => {
      selectedRowsById[row.id] = true;
    });
    tableArgs.push(hooks => {
      hooks.useControlledState.push(
        (state) => ({ ...state, selectedRowIds: selectedRowsById }),
      );
    });
    selectionProps.selectedFlatRows = selectedRows;
  }
  const controlledTableSelections = [selections, selectionsDispatch];

  // Use the state and functions returned from useTable to build your UI
  const instance = useTable(...tableArgs);

  const {
    pageSize: tableStatePageSize,
    pageIndex: tableStatePageIndex,
    sortBy: tableStateSortBy,
    filters: tableStateFilters,
    selectedRowIds: tableStateSelectedRowIds,
  } = instance.state;

  useEffect(() => {
    if (fetchData) {
      fetchData({
        pageSize: tableStatePageSize,
        pageIndex: tableStatePageIndex,
        sortBy: tableStateSortBy,
        filters: tableStateFilters,
      });
    }
  }, [fetchData, tableStatePageSize, tableStatePageIndex, tableStateSortBy, tableStateFilters]);

  useMountedLayoutEffect(() => {
    if (onSelectedRowsChanged) {
      onSelectedRowsChanged(tableStateSelectedRowIds);
    }
  }, [tableStateSelectedRowIds, onSelectedRowsChanged]);

  const selectionActions = useSelectionActions(instance, controlledTableSelections);

  const enhancedInstance = {
    ...instance,
    itemCount,
    numBreakoutFilters,
    bulkActions,
    tableActions,
    controlledTableSelections,
    showFiltersInSidebar,
    dataViewToggleOptions,
    renderRowSubComponent,
    disableElevation,
    isLoading,
    isSelectable,
    isPaginated,
    manualSelectColumn,
    maxSelectedRows,
    onMaxSelectedRows,
    ...selectionProps,
    ...selectionActions,
    ...props,
  };

  return (
    <DataTableContext.Provider value={enhancedInstance}>
      <DataTableLayout>
        <div className={classNames('pgn__data-table-wrapper', {
          'hide-shadow': !!disableElevation,
        })}
        >
          {children || (
          <>
            <TableControlBar />
            <Table />
            <EmptyTableComponent content="No results found" />
            <TableFooter />
          </>
          )}
        </div>
      </DataTableLayout>
    </DataTableContext.Provider>
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
  showFiltersInSidebar: false,
  dataViewToggleOptions: {
    isDataViewToggleEnabled: false,
    onDataViewToggle: () => {},
    defaultActiveStateValue: 'card',
    togglePlacement: 'left',
  },
  disableElevation: false,
  renderRowSubComponent: undefined,
  isExpandable: false,
  isLoading: false,
  onSelectedRowsChanged: undefined,
  maxSelectedRows: undefined,
  onMaxSelectedRows: undefined,
};

DataTable.propTypes = {
  /** Definition of table columns */
  columns: PropTypes.arrayOf(PropTypes.shape({
    /** User visible column name */
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    /** String used to access the correct cell data for this column */
    accessor: requiredWhenNot(PropTypes.string, 'Cell'),
    /** Specifies a function that receives `row` as argument and returns cell content */
    Cell: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
    /** Specifies filter component */
    Filter: PropTypes.elementType,
    /** Specifies filter type */
    filter: PropTypes.string,
    /** Specifies filter choices */
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
      value: PropTypes.string,
    })),
  })).isRequired,
  /** Data to be displayed in the table */
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  /** table rows can be selected */
  isSelectable: PropTypes.bool,
  /** Alternate column for selecting rows. See react table useSort docs for more information */
  manualSelectColumn: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    Cell: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
    disableSortBy: PropTypes.bool.isRequired,
  }),
  /** Table columns can be sorted */
  isSortable: PropTypes.bool,
  /** Indicates that sorting will be done via backend API. A fetchData function must be provided */
  manualSortBy: PropTypes.bool,
  /** Paginate the table */
  isPaginated: PropTypes.bool,
  /** Indicates that pagination will be done manually. A fetchData function must be provided */
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
    Filter: PropTypes.elementType,
  }),
  /** Actions or other additional non-data columns can be added here  */
  additionalColumns: PropTypes.arrayOf(PropTypes.shape({
    /** id must be unique from other columns ids */
    id: PropTypes.string.isRequired,
    /** column header that will be displayed to the user */
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
    /** Component that renders in the added column. It will receive the row as a prop */
    Cell: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
  })),
  /** Function that will fetch table data. Called when page size, page index or filters change.
    * Meant to be used with manual filters and pagination */
  fetchData: PropTypes.func,
  /** Initial state passed to react-table's documentation https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md */
  initialState: PropTypes.shape({
    pageSize: requiredWhen(PropTypes.number, 'isPaginated'),
    pageIndex: requiredWhen(PropTypes.number, 'isPaginated'),
    filters: requiredWhen(PropTypes.arrayOf(PropTypes.shape()), 'manualFilters'),
    sortBy: requiredWhen(PropTypes.arrayOf(PropTypes.shape()), 'manualSortBy'),
    selectedRowIds: PropTypes.shape(),
    selectedRowsOrdered: PropTypes.arrayOf(PropTypes.number),
  }),
  /** Table options passed to react-table's useTable hook. Will override some options passed in to DataTable, such
     as: data, columns, defaultColumn, manualFilters, manualPagination, manualSortBy, and initialState */
  initialTableOptions: PropTypes.shape({}),
  /** Actions to be performed on the table. Called with the table instance. Not displayed if rows are selected. */
  itemCount: PropTypes.number.isRequired,
  /** Actions to be performed on selected rows of the table. Called with the selected rows.
   *  Only displayed if rows are selected. */
  bulkActions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          /** Bulk action button text */
          buttonText: PropTypes.string.isRequired,
          /** handleClick will be passed the selected rows */
          handleClick: PropTypes.func.isRequired,
          /** classnames for button class */
          className: PropTypes.string,
          /** optional button variant; only relevant for the first two buttons */
          variant: PropTypes.string,
          /** disables button */
          disabled: PropTypes.bool,
        }),
        /** function passed selected items, should return action object */
        PropTypes.func,
        /** A custom component representing an action */
        PropTypes.element,
      ]),
    ),
    /** Function for rendering custom components */
    PropTypes.func,
    /** A custom component representing an action */
    PropTypes.element,
  ]),
  /** Function for rendering custom components, called with the table instance */
  tableActions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          /** Bulk action button text */
          buttonText: PropTypes.string.isRequired,
          /** handleClick will be passed the selected rows */
          handleClick: PropTypes.func.isRequired,
          /** classnames for button class */
          className: PropTypes.string,
          /** optional button variant; only relevant for the first two buttons */
          variant: PropTypes.string,
          /** disables button */
          disabled: PropTypes.bool,
        }),
        /** function passed table instance, should return action object */
        PropTypes.func,
        /** A custom component representing an action */
        PropTypes.element,
      ]),
    ),
    /** Function for rendering custom components */
    PropTypes.func,
    /** A custom component representing an action */
    PropTypes.element,
  ]),
  /** Number between one and four filters that can be shown on the top row. */
  numBreakoutFilters: PropTypes.oneOf([1, 2, 3, 4]),
  /** Component to be displayed when the table is empty */
  EmptyTableComponent: PropTypes.elementType,
  /** Component to be displayed for row status, ie, 10 of 20 rows. Displayed by default in the TableControlBar */
  RowStatusComponent: PropTypes.elementType,
  /** Component to be displayed for selection status. Displayed when there are selected rows and no active filters */
  SelectionStatusComponent: PropTypes.elementType,
  /** Component to be displayed for filter status. Displayed when there are active filters. */
  FilterStatusComponent: PropTypes.elementType,
  /** If children are not provided a table with control bar and footer will be rendered */
  children: PropTypes.node,
  /** If true filters will be shown on sidebar instead */
  showFiltersInSidebar: PropTypes.bool,
  /** options for data view toggle */
  dataViewToggleOptions: PropTypes.shape({
    /** Whether to show a toggle button group which allows view switching between card and table views */
    isDataViewToggleEnabled: PropTypes.bool,
    /** Callback invoked when the toggle buttons are clicked, with value of selected button passed in */
    onDataViewToggle: PropTypes.func,
    /** default value for toggle active state */
    defaultActiveStateValue: PropTypes.string,
    /** placement of toggle 'bottom' will push it to the bottom row in
     * actions section. Only 'left' and 'bottom' are supported */
    togglePlacement: PropTypes.string,
  }),
  /** Remove the default box shadow on the component */
  disableElevation: PropTypes.bool,
  /** A function that will render contents of expanded row, accepts `row` as a prop. */
  renderRowSubComponent: PropTypes.func,
  /** Indicates whether table supports expandable rows. */
  isExpandable: PropTypes.bool,
  /** Indicates whether the table should show loading states. */
  isLoading: PropTypes.bool,
  /** Callback function called when row selections change. */
  onSelectedRowsChanged: PropTypes.func,
  /** Indicates the max of rows selectable in the table. Requires isSelectable prop */
  maxSelectedRows: PropTypes.number,
  /** Callback after selected max rows. Requires isSelectable and maxSelectedRows props */
  onMaxSelectedRows: PropTypes.func,
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
DataTable.TablePaginationMinimal = TablePaginationMinimal;
DataTable.TableActions = TableActions;
DataTable.ControlledSelectionStatus = ControlledSelectionStatus;
DataTable.ControlledSelect = ControlledSelect;
DataTable.ControlledSelectHeader = ControlledSelectHeader;
DataTable.ExpandAll = ExpandAll;
DataTable.ExpandRow = ExpandRow;

export default DataTable;
