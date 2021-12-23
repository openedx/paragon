import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import DataTableContext from './DataTableContext';

const FilterStatus = ({
  className, variant, size, clearFiltersText, buttonClassName, showFilteredFields,
}) => {
  const { state, setAllFilters } = useContext(DataTableContext);
  if (!setAllFilters) {
    return null;
  }

  const filterNames = state.filters ? state.filters.map((filter) => filter.id) : [];
  const filterTexts = <p>Filtered by {filterNames.join(', ')}</p>;

  return (
    <div className={className}>
      {showFilteredFields && filterTexts}
      <Button
        className={buttonClassName}
        variant={variant}
        size={size}
        onClick={() => setAllFilters([])}
      >
        {clearFiltersText}
      </Button>
    </div>
  );
};

FilterStatus.defaultProps = {
  /** Specifies class name to append to the base element. */
  className: null,
  /** Specifies class name to append to the button. */
  buttonClassName: 'pgn__smart-status-button',
  /** The visual style of the `FilterStatus`. */
  variant: 'link',
  /** The size of the `FilterStatus`. */
  size: 'inline',
  /** A text that appears on the `Clear filters` button. */
  clearFiltersText: 'Clear Filters',
  /** Whether to display applied filters. */
  showFilteredFields: true,
};

FilterStatus.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  clearFiltersText: PropTypes.string,
  showFilteredFields: PropTypes.bool,
};

export default FilterStatus;
