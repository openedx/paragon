import React from 'react';
import { useSortBy, useTable, useFilters } from 'react-table';
import TableHeaderRow from './TableHeader';
import TableRow from './TableRow';
import TextFilter from './TextFilter';

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: TextFilter,
    }),
    [],
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn,
  }, useSortBy);

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <TableHeaderRow headerGroups={headerGroups} />
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow row={row} key={row.id} />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
