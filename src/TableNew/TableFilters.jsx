import React from 'react';
import PropTypes from 'prop-types';

const TableFilters = ({ columns }) => (
  <div>
    <h3>Filters</h3>
    {columns.map(column => <div key={column.Header}>{column.canFilter ? column.render('Filter') : null}</div>)}
  </div>
);

TableFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    canFilter: PropTypes.bool,
    render: PropTypes.func.isRequired,
  })).isRequired,
};

export default TableFilters;
