import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useSortBy, useTable, useFilters, useRowSelect, usePagination,
} from 'react-table';
import Table from './Table';

import TablePagination from './TablePagination';
import getVisibleColumns from './utils/getVisibleColumns';
import { requiredWhen } from './utils/propTypesUtils';
import TableControlBar from './TableControlBar';

function TableWrapper({
  initialColumns, data, bulkActions, defaultColumnValues, additionalColumns, isSelectable, isSortable,
  isPaginated, manualPagination, initialPageSize, initialPageIndex, itemCount,
  isFilterable, manualFilters, fetchData,
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

  useEffect(() => {
    if (fetchData) {
      const currentState = {};
      if (manualFilters) {
        currentState.currentFilters = instance.state.filters;
      }
      if (manualPagination) {
        currentState.pageSize = instance.state.pageSize;
        currentState.pageIndex = instance.state.pageIndex;
      }
      fetchData(currentState);
    }
  }, [instance.state.pageSize, instance.state.filters, instance.state.pageIndex, fetchData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = instance;

  return (
    <div className="pgn__table-wrapper">
      <TableControlBar
        isSelectable={isSelectable}
        selectedFlatRows={instance.selectedFlatRows}
        toggleAllRowsSelected={instance.toggleAllRowsSelected}
        isFilterable={isFilterable}
        filtersNames={instance.state.filters.map((filter) => filter.id)}
        pageSize={instance.state.pageSize}
        itemCount={itemCount || rows.length}
        bulkActions={bulkActions}
        columns={instance.columns}
        rows={instance.flatRows}
      />
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
    </div>
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
  manualFilters: false,
  manualPagination: false,
  initialPageIndex: 1,
  fetchData: null,
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
  itemCount: requiredWhen(PropTypes.number, 'manualPagination'),
  /** Table rows can be filtered, using a default filter in the default column values, or in the column definition */
  isFilterable: PropTypes.bool,
  /** Indicates that filtering will be done via a backend API. An onFilter function must be provided */
  manualFilters: PropTypes.bool,
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
  /** Function that will fetch table data. Called when page size, page index or filters change.
    * Meant to be used with manual filters and pagination */
  fetchData: PropTypes.func,
};

export default TableWrapper;
