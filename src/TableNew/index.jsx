import React from 'react';
import PropTypes from 'prop-types';
import {
  useSortBy, useTable, useFilters, useRowSelect, usePagination,
} from 'react-table';
import Table from './Table';
import TableFilters from './TableFilters';
import BulkActions from './BulkActions';
import SelectionState from './SelectionState';
import TablePagination from './TablePagination';
import getVisibleColumns from './utils/getVisibleColumns';

function TableWrapper({
  initialColumns, data, title, bulkActions, defaultColumnValues, additionalColumns, isSelectable, isSortable,
  isPaginated, manualPagination, initialPageSize, initialPageIndex, itemCount,
  isFilterable, manualFilters, onFilter,
}) {
  const defaultColumn = React.useMemo(
    () => (defaultColumnValues),
    [defaultColumnValues],
  );
  const tableOptions = {
    columns: initialColumns,
    data,
    defaultColumn,
    manualFilters,
    manualPagination,
    initialState: {},
  };

  // NB: Table args *must* be in a particular order
  const tableArgs = [
    tableOptions,
  ];
  if (isFilterable) {
    tableArgs.push(useFilters);
  }
  if (isSortable) {
    tableArgs.push(useSortBy);
  }
  if (isPaginated) {
    tableOptions.initialState.pageCount = itemCount ? itemCount % initialPageSize : 1;
    tableOptions.initialState.pageIndex = initialPageIndex;
    tableOptions.initialState.pageSize = initialPageSize;
    tableArgs.push(usePagination);
  }
  if (isSelectable) {
    tableArgs.push(useRowSelect);
  }
  // adds selection column and action columns as necessary
  tableArgs.push(hooks => {
    hooks.visibleColumns.push(visibleColumns => getVisibleColumns(isSelectable, visibleColumns, additionalColumns));
  });

  // Use the state and functions returned from useTable to build your UI
  const instance = useTable(...tableArgs);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = instance;

  // Render the UI for your table
  return (
    <>
      {title && <h3>{title}</h3>}
      {isFilterable && (
      <TableFilters
        columns={instance.columns}
        manualFilters={manualFilters}
        onFilter={onFilter}
        currentFilters={instance.state.filters}
      />
      )}
      {isSelectable && bulkActions.length > 0 && (
        <BulkActions
          actions={bulkActions}
          selectedRows={instance.selectedFlatRows}
        />
      )}
      {isSelectable && (
        <SelectionState
          numberOfSelectedRows={instance.selectedFlatRows.length}
          toggleAllRowsSelected={instance.toggleAllRowsSelected}
        />
      )}
      {rows.length > 0 && (
        <Table
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          headerGroups={headerGroups}
          rows={instance.page ? instance.page : rows}
          prepareRow={prepareRow}
        />
      )}
      {/* TODO: Add empty table thing */}
      {rows.length <= 0 && <div />}
      {isPaginated && (
        <TablePagination
          previousPage={instance.previousPage}
          nextPage={instance.nextPage}
          canNextPage={instance.canNextPage}
          canPreviousPage={instance.canPreviousPage}
          pageIndex={instance.state.pageIndex}
          pageCount={instance.pageCount}
        />
      )}
    </>
  );
}

TableWrapper.defaultProps = {
  additionalColumns: [],
  bulkActions: [],
  defaultColumnValues: {},
  isFilterable: false,
  isPaginated: false,
  isSelectable: false,
  isSortable: false,
  title: null,
  manualFilters: false,
  manualPagination: false,
  initialPageIndex: 1,
  onFilter: () => { throw new Error('You have set manualFilters to true but have not provided an onFilter function.'); },
};

TableWrapper.propTypes = {
  /** Definition of table columns */
  initialColumns: PropTypes.arrayOf(PropTypes.shape({
    /** User visible column name P */
    Header: PropTypes.string.isRequired,
    /** String used to access the correct cell data for this column */
    accessor: PropTypes.string.isRequired,
  })).isRequired,
  /** Data to be displayed in the table */
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /**  Title to be displayed above all table components */
  title: PropTypes.string,
  /** table rows can be selected */
  isSelectable: PropTypes.bool,
  /** Table columns can be sorted */
  isSortable: PropTypes.bool,
  /** Paginate the table */
  isPaginated: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  initialPageSize: (props, propName, componentName, ...rest) => {
    if (props.isPaginated === true && props[propName] === undefined) {
      return new Error(`${componentName}: pageSize is required when the table is paginated.`);
    }
    return PropTypes.number(props, propName, componentName, ...rest);
  },
  // eslint-disable-next-line react/require-default-props
  initialPageIndex: (props, propName, componentName, ...rest) => {
    if (props.isPaginated === true && props[propName] === undefined) {
      return new Error(`${componentName}: pageIndex is required when the table is paginated.`);
    }
    return PropTypes.number(props, propName, componentName, ...rest);
  },
  manualPagination: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  itemCount: (props, propName, componentName, ...rest) => {
    if (props.manualPagination === true && props[propName] === undefined) {
      return new Error(`${componentName}: itemCount is required when manualPagination is set to True.`);
    }
    return PropTypes.number(props, propName, componentName, ...rest);
  },
  /** Table rows can be filtered, using a default filter in the default column values, or in the column definition */
  isFilterable: PropTypes.bool,
  /** Indicates that filtering will be done via a backend API. An onFilter function must be provided */
  manualFilters: PropTypes.bool,
  /**  Function will be called with a list of filters in the form [{ id: <column name>, value: <filter value> }] */
  onFilter: PropTypes.func,
  /** Actions to be performed on the table. isSelectable must be true to use bulk actions */
  bulkActions: PropTypes.arrayOf(PropTypes.shape({
    /** Text displayed to the user for each action */
    buttonText: PropTypes.string.isRequired,
    /** Click handler for the action; it will be passed the selected rows */
    handleClick: PropTypes.func.isRequired,
  })),
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
};

export default TableWrapper;
