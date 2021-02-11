import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import DataTableContext from './DataTableContext';

const FilterStatus = ({
  className, variant, size, clearFiltersText, buttonClassName,
}) => {
  const { state, setAllFilters } = useContext(DataTableContext);
  if (!setAllFilters) {
    return null;
  }

  const filterNames = state.filters ? state.filters.map((filter) => filter.id) : [];

  return (
    <div className={className}>
      Filtered by {filterNames.join(', ')}.
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
  className: null,
  buttonClassName: 'pgn__smart-status-button',
  variant: 'link',
  size: 'inline',
  clearFiltersText: 'Clear Filters',
};

FilterStatus.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  clearFiltersText: PropTypes.string,
};

export default FilterStatus;
