import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from './TableHeaderCell';

function TableHeaderRow({ headerGroups }) {
  return (
    <thead data-testid="thead-id">
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()} data-testid="tr-id">
          {headerGroup.headers.map(column => (
            <TableHeaderCell {...column} {...column.getHeaderProps()} />
          ))}
        </tr>
      ))}
    </thead>
  );
}

TableHeaderRow.propTypes = {
  headerGroups: PropTypes.arrayOf(PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.shape({
      /** Props for the TableHeaderCell component. Must include a key */
      getHeaderProps: PropTypes.func.isRequired,
    })).isRequired,
    /** Returns props for the header tr element */
    getHeaderGroupProps: PropTypes.func.isRequired,
  })).isRequired,
};

export default TableHeaderRow;
