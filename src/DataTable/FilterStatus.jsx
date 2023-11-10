import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';
import Button from '../Button';

function FilterStatus({
  className, variant, size, clearFiltersText, buttonClassName, showFilteredFields,
}) {
  const { state, setAllFilters, headers } = useContext(DataTableContext);
  if (!setAllFilters) {
    return null;
  }

  const headersMap = headers.reduce((cur, acc) => {
    cur[acc.id] = acc.Header;
    return cur;
  }, {});
  const filterNames = state.filters ? state.filters.map((filter) => headersMap[filter.id]) : [];
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
        {clearFiltersText === undefined
          ? (
            <FormattedMessage
              id="pgn.DataTable.FilterStatus.clearFiltersText"
              defaultMessage="Clear filters"
              description="A text that appears on the `Clear filters` button"
            />
          )
          : clearFiltersText}
      </Button>
    </div>
  );
}

FilterStatus.defaultProps = {
  /** Specifies class name to append to the base element. */
  className: null,
  /** Specifies class name to append to the button. */
  buttonClassName: 'pgn__smart-status-button',
  /** The visual style of the `FilterStatus`. */
  variant: 'link',
  /** The size of the `FilterStatus`. */
  size: 'inline',
  /** A text that appears on the `Clear filters` button, defaults to 'Clear filters'. */
  clearFiltersText: undefined,
  /** Whether to display applied filters. */
  showFilteredFields: true,
};

FilterStatus.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  clearFiltersText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  showFilteredFields: PropTypes.bool,
};

export default FilterStatus;
