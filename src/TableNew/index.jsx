import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  useSortBy, useTable, useFilters, useRowSelect, usePagination,
} from 'react-table';
import TableHeaderRow from './TableHeader';
import TableRow from './TableRow';
import TextFilter from './TextFilter';
import TableFilters from './TableFilters';
import BulkActions from './BulkActions';
import SelectionState from './SelectionState';
import TablePagination from './TablePagination';
import getVisibleColumns from './utils/getVisibleColumns';

function Table({
  columns, data, title, bulkActions, defaultColumnValues, additionalColumns, isSelectable,
}) {
  const defaultColumn = React.useMemo(
    () => (defaultColumnValues),
    [defaultColumnValues],
  );

  // Use the state and functions returned from useTable to build your UI
  const instance = useTable({
    columns,
    data,
    defaultColumn,
  }, useFilters, useSortBy, usePagination, useRowSelect,
  hooks => {
    hooks.visibleColumns.push(visibleColumns => getVisibleColumns(isSelectable, visibleColumns, additionalColumns));
  });

  const hasFilters = useMemo(() => columns.some((column) => column.Filter), [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    toggleAllRowsSelected,
  } = instance;

  const renderRows = () => rows.map((row, index) => {
    prepareRow(row);
    return (
      <TableRow row={row} key={row.id} isStriped={index % 2 === 1} />
    );
  });

  // Render the UI for your table
  return (
    <>
      {title && <h3>{title}</h3>}
      {hasFilters && <TableFilters columns={instance.columns} />}
      {isSelectable && bulkActions.length > 0 && (
        <BulkActions
          actions={bulkActions}
          selectedRows={instance.selectedFlatRows}
        />
      )}
      {isSelectable && (
        <SelectionState
          numberOfSelectedRows={instance.selectedFlatRows.length}
          toggleAllRowsSelected={toggleAllRowsSelected}
        />
      )}
      <table {...getTableProps()}>
        <TableHeaderRow headerGroups={headerGroups} />
        <tbody {...getTableBodyProps()}>
          {rows.length > 0 && renderRows()}
        </tbody>
      </table>
      {/* TODO: Add empty table  */}
      {rows.length <= 0 && <div />}
      {/* <TablePagination previousPage={instance.previousPage} nextPage={instance.nextPage} /> */}
    </>
  );
}

Table.defaultProps = {
  title: null,
  bulkActions: [],
  defaultColumnValues: {},
  isSelectable: false,
  additionalColumns: [],
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    accessor: PropTypes.string.isRequired,
  })).isRequired,
  // Data to be displated in the table. Data should be accessible via the accessors of the columns
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // Title to be displayed above all table components
  title: PropTypes.string,
  // table rows can be selected
  isSelectable: PropTypes.bool,
  // Actions to be performed on the table. isSelectable must be true to use bulk actions
  bulkActions: PropTypes.arrayOf(PropTypes.shape({
    // Text displayed to the user for each action
    buttonText: PropTypes.string.isRequired,
    // Click handler for the action; it will be passed the selected rows
    handleClick: PropTypes.func.isRequired,
  })),
  // defaults that will be set on each column. Will be overridden by individual column values
  defaultColumnValues: PropTypes.shape({
    // A default filter component for the column
    Filter: PropTypes.node,
  }),
  additionalColumns: PropTypes.arrayOf(PropTypes.shape({
    // id must be unique from other columns ids
    id: PropTypes.string.isRequired,
    // column header that will be displayed to the user
    Header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    // Component that renders in the added column. It will receive the row as a prop
    Cell: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  })),
};

export default Table;
