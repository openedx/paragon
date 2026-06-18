import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from './TableHeaderCell';

function TableHeaderRow({ headerGroups }) {
  return (
    <thead>
      {headerGroups.map((headerGroup) => {
        const { key: headerGroupKey, ...headerGroupProps } = headerGroup.getHeaderGroupProps();

        return (
          <tr key={headerGroupKey} {...headerGroupProps}>
            {headerGroup.headers.map((column) => {
              const { key: headerKey } = column.getHeaderProps();

              return (
                <TableHeaderCell key={headerKey} {...column} />
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
}

TableHeaderRow.propTypes = {
  headerGroups: PropTypes.arrayOf(PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.shape({
      /** Props for the TableHeaderCell component. Must include a React key */
      getHeaderProps: PropTypes.func.isRequired,
    })).isRequired,
    /** Returns props for the header tr element. Must include a React key */
    getHeaderGroupProps: PropTypes.func.isRequired,
  })).isRequired,
};

export default TableHeaderRow;
