import React from 'react';
import PropTypes from 'prop-types';

const TableHeaderRow = ({ column }) => {
  const isSortableIndicator = column.canSort ? ' ↑↓' : '';
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
    canSort: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TableHeaderRow;
