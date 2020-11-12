import React from 'react';
import PropTypes from 'prop-types';

const TableHeaderRow = ({ column }) => {
  const isSortableIndicator = ' ↑↓';
  const sortingIndicator = column.isSortedDesc ? ' ↑' : ' ↓';

  return (
    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
      {column.render('Header')}
      {/* Sort direction indicator */}
      <span>
        {column.isSorted
          ? sortingIndicator : isSortableIndicator }
      </span>
    </th>
  );
};

TableHeaderRow.propTypes = {
  column: PropTypes.shape({
    getHeaderProps: PropTypes.func.isRequired,
    isSorted: PropTypes.bool,
    render: PropTypes.func.isRequired,
    isSortedDesc: PropTypes.bool,
    getSortByToggleProps: PropTypes.func.isRequired,
  }).isRequired,
};

export default TableHeaderRow;
