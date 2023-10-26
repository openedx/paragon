import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export const TABLE_FILTERS_BUTTON_TEXT = 'Filter';

function TableFilters({
  columns, manualFilters, onFilter, currentFilters,
}) {
  return (
    <div>
      <h4>Filters</h4>
      {columns.map(column => <div key={column.Header}>{column.canFilter ? column.render('Filter') : null}</div>)}
      {manualFilters && (
      <Button
        type="primary"
        onClick={() => onFilter(currentFilters)}
      >
        {TABLE_FILTERS_BUTTON_TEXT}
      </Button>
      )}
    </div>
  );
}

TableFilters.defaultProps = {
  manualFilters: false,
  onFilter: () => {},
};

TableFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    canFilter: PropTypes.bool,
    render: PropTypes.func.isRequired,
  })).isRequired,
  manualFilters: PropTypes.bool,
  onFilter: PropTypes.elementType,
  currentFilters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TableFilters;
