import React from 'react';
import PropTypes from 'prop-types';
import TableHeadeCell from './TableHeaderCell';

const TableHeaderRow = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <TableHeadeCell column={column} {...column.getHeaderProps()} />
          ))}
        </tr>
      ))}
    </thead>
  );
};

TableHeaderRow.propTypes = {
  headerGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TableHeaderRow;
