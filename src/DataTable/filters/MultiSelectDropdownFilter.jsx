import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  DropdownButton,
  Badge,
} from '../..';
import { newId } from '../../utils';
import LabelledCheckbox from './LabelledCheckbox';

function MultiSelectDropdownFilter({
  column: {
    setFilter, Header, dropdownFilters, getHeaderProps, filterValue,
  },
}) {
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  const ariaLabel = useRef(newId(`multi-dropdown-filter-label-${getHeaderProps().key}-`));
  const label = `Filter by ${Header.toLowerCase()}`;
  const checkedBoxes = filterValue || [];
  const changeCheckbox = (value) => {
    if (checkedBoxes.includes(value)) {
      const newCheckedBoxes = checkedBoxes.filter((val) => val !== value);
      return setFilter(newCheckedBoxes);
    }
    checkedBoxes.push(value);
    return setFilter(checkedBoxes);
  };
  const headerBasedId = useMemo(() => `checkbox-filter-check-${getHeaderProps().key}-`, [getHeaderProps]);
  return (
    <DropdownButton variant="outline-primary" id={ariaLabel.current} title={label}>
      <div role="group" aria-label={label} className="pgn__dropdown-filter-checkbox-group">
        {dropdownFilters.map(({ name, number, value }) => (
          <LabelledCheckbox
            key={name}
            id={headerBasedId}
            checked={checkedBoxes.includes(value)}
            onChange={() => { changeCheckbox(value); }}
            label={<>{name} {number && <Badge variant="light">{number}</Badge>}</>}
          />
        ))}
      </div>
    </DropdownButton>
  );
}

MultiSelectDropdownFilter.defaultPropTypes = {
  column: {
    filterValue: [],
  },
};

MultiSelectDropdownFilter.propTypes = {
  column: PropTypes.shape({
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.string.isRequired,
    /** Names and values for the select options */
    dropdownFilters: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })).isRequired,
    /** Generates a key unique to the column being filtered */
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.arrayOf([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

export default MultiSelectDropdownFilter;
