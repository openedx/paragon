import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import DataTableContext from './DataTableContext';
import FilterStatus from './FilterStatus';

function SidebarFilters({ title }) {
  const { state, columns } = useContext(DataTableContext);
  const availableFilters = useMemo(() => columns.filter((column) => column.canFilter), [columns]);
  const filtersApplied = state?.filters && state.filters.length > 0;
  return (
    <div className="pgn__data-table-side-filters">
      <h3 className="pgn__data-table-side-filters-title">
        {title || (
          <FormattedMessage
            id="pgn.DataTable.SidebarFilters.title"
            defaultMessage="Filters"
            description="Title for the sidebar filters component"
          />
        )}
      </h3>
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
      <FilterStatus
        className="pgn__data-table-side-filters-status"
        showFilteredFields={false}
        variant="tertiary"
      />
      )}
    </div>
  );
}

SidebarFilters.propTypes = {
  /** Specifies the title to show near the filters, default to 'Filters'. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

SidebarFilters.defaultProps = {
  title: undefined,
};

export default SidebarFilters;
