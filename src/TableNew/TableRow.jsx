import React from 'react';
import TableCell from './TableCell'

const TableRow = ({ row }) => {
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map(cell => <TableCell cell={cell} key={`${cell.column.Header}${row.id}`}/>)}
    </tr>
  );
};

export default TableRow;
