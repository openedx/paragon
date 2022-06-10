import React, { useContext, useMemo } from 'react';

import DataTableContext from './DataTableContext';
import FilterStatus from './FilterStatus';

const SidebarFilters = () => {
  const { state, columns } = useContext(DataTableContext);
  const availableFilters = useMemo(() => columns.filter((column) => column.canFilter), [columns]);
  const filtersApplied = state?.filters && state.filters.length > 0;
  return (
    <div className="pgn__data-table-side-filters">
      <h3 className="pgn__data-table-side-filters-title">Filters</h3>
      <hr />
      {availableFilters.map(column => (
        <div
          key={column.Header}
          className="pgn__data-table-side-filters-item"
        >
          {column.render('Filter')}
        </div>
      ))}
      {filtersApplied && (
      <>
        <FilterStatus
          className="pgn__data-table-side-filters-status"
          showFilteredFields={false}
          variant="tertiary"
        />
      </>
      )}
    </div>
  );
};

export default SidebarFilters;
