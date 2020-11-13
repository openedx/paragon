import React from 'react';
import PropTypes from 'prop-types';
import {
  useSortBy, useTable, useFilters, useRowSelect,
} from 'react-table';
import TableHeaderRow from './TableHeader';
import TableRow from './TableRow';
import TextFilter from './TextFilter';
import TableFilters from './TableFilters';
import IndeterminateCheckbox from './IndeterminateCheckBox';

function Table({ columns, data, title }) {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: TextFilter,
    }),
    [],
  );

  // Use the state and functions returned from useTable to build your UI
  const instance = useTable({
    columns,
    data,
    defaultColumn,
  }, useFilters, useSortBy, useRowSelect,
  hooks => {
    hooks.visibleColumns.push(visibleColumn => [
      // Create a column for selection
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
        disableSortBy: true,
      },
      ...visibleColumn,
    ]);
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = instance;

  const renderRows = () => rows.map((row) => {
    prepareRow(row);
    return (
      <TableRow row={row} key={row.id} />
    );
  });

  // Render the UI for your table
  return (
    <>
      <TableFilters columns={instance.columns} />
      {title && <h3>{title}</h3>}
      <table {...getTableProps()}>
        <TableHeaderRow headerGroups={headerGroups} />
        <tbody {...getTableBodyProps()}>
          {rows.length > 0 && renderRows()}
        </tbody>
      </table>
      {rows.length <= 0 && <div>No results</div>}
    </>
  );
}

Table.defaultPropTypes = {
  title: null,
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    accessor: PropTypes.string.isRequired,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string,
};

export default Table;
