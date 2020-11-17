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
  initialColumns, data, title, bulkActions, defaultColumnValues, additionalColumns,
  isSelectable, isPaginated, isSortable, isFilterable,
}) {
  const defaultColumn = React.useMemo(
    () => (defaultColumnValues),
    [defaultColumnValues],
  );

  const tableArgs = [
    {
      columns: initialColumns,
      data,
      defaultColumn,
    },
  ];
  if (isFilterable) {
    tableArgs.push(useFilters);
  }
  if (isSortable) {
    tableArgs.push(useSortBy);
  }
  if (isPaginated) {
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
      {isFilterable && <TableFilters columns={instance.columns} />}
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
          rows={rows}
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
          canPreviousPage={instance.canNextPage}
          pageIndex={instance.state.pageIndex}
          totalPages={instance.pageOptions.length}
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
  /** Table rows can be filtered, using a default filter in the default column values, or in the column definition */
  isFilterable: PropTypes.bool,
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
