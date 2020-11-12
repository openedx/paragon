import React from 'react';

const TableCell = ({ cell }) => {
  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
};

export default TableCell;
