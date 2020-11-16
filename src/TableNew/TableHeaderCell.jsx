import React from 'react';
import PropTypes from 'prop-types';

const TableHeaderRow = ({ column }) => {
  const isSortableIndicator = column.canSort ? ' ↑↓' : '';
  const sortingIndicator = column.isSortedDesc ? ' ↑' : ' ↓';
  const toggleProps = column.getSortByToggleProps ? column.getSortByToggleProps() : {};

  return (
    <th {...column.getHeaderProps(toggleProps)}>
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
    /** Returns props for the <th> element */
    getHeaderProps: PropTypes.func.isRequired,
    /** Indicates whether or not a column is sorted */
    isSorted: PropTypes.bool,
    /** Renders the header content. Passed the string 'Header' */
    render: PropTypes.func.isRequired,
    /** Indicates whether the column is sorted in descending order */
    isSortedDesc: PropTypes.bool,
    /** Gets props related to sorting that will be passed to <th> */
    getSortByToggleProps: PropTypes.func,
    /** Indicates whether a column is sortable */
    canSort: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TableHeaderRow;
