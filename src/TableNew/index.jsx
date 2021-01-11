import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';
import Table from './Table';

import TablePagination from './TablePagination';
import getVisibleColumns from './utils/getVisibleColumns';
import { requiredWhen } from './utils/propTypesUtils';
import getTableArgs from './utils/getTableArgs';
import TableControlBar from './TableControlBar';

function TableWrapper({
  columns, data, bulkActions, defaultColumnValues, additionalColumns, isSelectable, isSortable,
  isPaginated, manualPagination, pageCount, itemCount,
  isFilterable, manualFilters, fetchData, initialState,
}) {
  const defaultColumn = React.useMemo(
    () => (defaultColumnValues),
    [defaultColumnValues],
  );
  const tableOptions = {
    columns,
    data,
    defaultColumn,
    manualFilters,
    manualPagination,
    initialState,
  };

  if (isPaginated) {
    tableOptions.pageCount = pageCount || itemCount % initialState.pageSize || -1;
  }

  // NB: Table args *must* be in a particular order
  const tableArgs = getTableArgs({
    tableOptions, isFilterable, isSelectable, isPaginated, isSortable,
  });
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

  const filterNames = instance.state.filters.map((filter) => filter.id);

  return (
    <div className="pgn__table-wrapper">
      <TableControlBar
        isSelectable={isSelectable}
        selectedFlatRows={instance.selectedFlatRows}
        toggleAllRowsSelected={instance.toggleAllRowsSelected}
        isFilterable={isFilterable}
        filterNames={filterNames}
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
  fetchData: null,
  initialState: {},
};

TableWrapper.propTypes = {
  /** Definition of table columns */
  columns: PropTypes.arrayOf(PropTypes.shape({
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
  /* indicates that pagination will be done manually */
  manualPagination: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  pageCount: requiredWhen(PropTypes.number, 'manualPagination'),
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
  /** Initial state passed to react-table's <a href="https://react-table.tanstack.com/docs/api/useTable">useTable</a>  */
  initialState: PropTypes.shape({
    pageSize: requiredWhen(PropTypes.number, 'isPaginated'),
    pageIndex: requiredWhen(PropTypes.number, 'isPaginated'),
    filters: requiredWhen(PropTypes.arrayOf(PropTypes.shape()), 'manualFilters'),
  }),
};

export default TableWrapper;
