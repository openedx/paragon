import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Form, { FormLabel } from '../../Form';
import Badge from '../../Badge';
import { newId } from '../../utils';
import LabelledCheckbox from './LabelledCheckbox';

function CheckboxFilter({
  column: {
    filterValue, setFilter, Header, filterChoices, getHeaderProps,
  },
}) {
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  const ariaLabel = useRef(newId(`checkbox-filter-label-${getHeaderProps().key}-`));

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
    <Form.Group role="group" aria-labelledby={ariaLabel.current}>
      <FormLabel id={ariaLabel.current} className="pgn__checkbox-filter-label">{Header}</FormLabel>
      {filterChoices.map(({ name, number, value }) => (
        <LabelledCheckbox
          id={headerBasedId}
          key={headerBasedId + name}
          checked={checkedBoxes.includes(value)}
          onChange={() => { changeCheckbox(value); }}
          label={<>{name} {number !== undefined && <Badge variant="light">{number}</Badge>}</>}
        />
      ))}
    </Form.Group>
  );
}

CheckboxFilter.propTypes = {
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
    setFilter: PropTypes.func.isRequired,
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.number,
    })).isRequired,
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CheckboxFilter;
