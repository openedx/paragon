import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, useWindowSize, breakpoints } from '..';
import { requiredWhen } from './utils/propTypesUtils';

/** The first filter will be as an input, additional filters will be available in a dropdown.  */
const DropdownFilters = ({
  columns,
}) => {
  const { width } = useWindowSize();
  const [breakoutFilter, otherFilters] = useMemo(() => {
    const availableFilters = columns.filter((column) => column.canFilter);
    if (width < breakpoints.small.minWidth) {
      return [null, availableFilters];
    }

    return [availableFilters.shift(), availableFilters];
  }, [columns, width]);

  return (
    <div className="pgn__table-filters">
      {breakoutFilter && <div className="mr-2">{breakoutFilter.render('Filter')}</div>}
      {otherFilters.length > 0 && (
      <DropdownButton variant="outline-primary" id="table-filters-dropdown" title="Filters">
        {otherFilters.map(column => (
          <div
            key={column.Header}
            className="pgn__table-filters-dropdown-item"
          >
            {column.render('Filter')}
          </div>
        ))}
      </DropdownButton>
      )}
    </div>

  );
};

DropdownFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    /** Column Header is used as a key */
    Header: PropTypes.string.isRequired,
    /** Defines whether a filter will be displayed for this column or not */
    canFilter: PropTypes.bool,
    /** Called with the string 'Filter' to render the filter */
    render: PropTypes.func.isRequired,
    /** React function component to display the filter */
    Filter: requiredWhen(PropTypes.func, 'canFilter'),
  })).isRequired,
};

export default DropdownFilters;
