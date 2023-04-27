import React, { useContext, useMemo } from 'react';
import DataTableContext from './DataTableContext';
import { DropdownButton } from '../Dropdown';
import useWindowSize from '../hooks/useWindowSize';
import breakpoints from '../utils/breakpoints';

/** The first filter will be as an input, additional filters will be available in a dropdown.  */
function DropdownFilters() {
  const { width } = useWindowSize();
  const { columns, numBreakoutFilters } = useContext(DataTableContext);

  const [breakoutFilters, otherFilters] = useMemo(() => {
    if (!columns) {
      return [[], []];
    }
    const availableFilters = columns.filter((column) => column.canFilter);
    if (width < breakpoints.small.minWidth) {
      return [[], availableFilters];
    }

    const numberOfBreakoutFilters = numBreakoutFilters || 1;
    const boFilters = availableFilters.slice(0, numberOfBreakoutFilters);
    const dropdownFilters = availableFilters.slice(numberOfBreakoutFilters);

    return [boFilters, dropdownFilters];
  }, [columns, width, numBreakoutFilters]);

  return (
    <div className="pgn__data-table-filters">
      {breakoutFilters.length > 0 && breakoutFilters.map((column) => (
        <div className="pgn__data-table-filters-breakout-filter" key={column.Header}>
          {column.render('Filter')}
        </div>
      ))}
      {otherFilters.length > 0 && (
        <DropdownButton variant="outline-primary" id="table-filters-dropdown" title="Filters">
          {otherFilters.map((column) => (
            <div
              key={column.Header}
              className="pgn__data-table-filters-dropdown-item"
            >
              {column.render('Filter')}
            </div>
          ))}
        </DropdownButton>
      )}
    </div>
  );
}

export default DropdownFilters;
