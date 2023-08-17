import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Badge from '../../Badge';
import { DropdownButton } from '../../Dropdown';
import { newId } from '../../utils';
import Form from '../../Form';

function MultiSelectDropdownFilter({
  column: {
    setFilter, Header, filterChoices, getHeaderProps, filterValue,
  },
}) {
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  const ariaLabel = useRef(newId(`multi-dropdown-filter-label-${getHeaderProps().key}-`));
  const checkedBoxes = filterValue || [];
  const changeCheckbox = (value) => {
    if (checkedBoxes.includes(value)) {
      const newCheckedBoxes = checkedBoxes.filter((val) => val !== value);
      return setFilter(newCheckedBoxes);
    }
    checkedBoxes.push(value);
    return setFilter(checkedBoxes);
  };

  return (
    <DropdownButton variant="outline-primary" id={ariaLabel.current} title={Header}>
      <Form.CheckboxSet
        className="pgn__dropdown-filter-checkbox-group"
        name={Header}
        aria-label={Header}
      >
        {filterChoices.map(({ name, number, value }) => (
          <Form.Checkbox
            key={name}
            value={name}
            checked={checkedBoxes.includes(value)}
            onChange={() => changeCheckbox(value)}
            aria-label={name}
          >
            {name} {number && <Badge className="ml-2" variant="light">{number}</Badge>}
          </Form.Checkbox>
        ))}
      </Form.CheckboxSet>
    </DropdownButton>
  );
}

MultiSelectDropdownFilter.propTypes = {
  /**
   * Specifies a column object.
   *
   * `setFilter`: Function to set the filter value.
   *
   * `Header`: Column header used for labels and placeholders.
   *
   * `filterChoices`: Specifies array of choices.
   *
   * `getHeaderProps`: Generates a key unique to the column being filtered.
   *
   * `filterValue`: Value for the filter input.
   */
  column: PropTypes.shape({
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    /** Names and values for the select options */
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })).isRequired,
    /** Generates a key unique to the column being filtered */
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default MultiSelectDropdownFilter;
