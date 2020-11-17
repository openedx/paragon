import React from 'react';
import PropTypes from 'prop-types';

export const sortIndicator = ' ↑↓';
export const sortedDescIndicator = ' ↓';
export const sortedAscIndicator = ' ↑';

const TableHeaderCell = ({ column }) => {
  const isSortableIndicator = column.canSort ? sortIndicator : '';
  const sortingIndicator = column.isSortedDesc ? sortedDescIndicator : sortedAscIndicator;
  const toggleProps = column.canSort && column.getSortByToggleProps ? column.getSortByToggleProps() : {};

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

TableHeaderCell.propTypes = {
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

export default TableHeaderCell;
