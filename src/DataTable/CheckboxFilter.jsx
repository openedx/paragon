import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormLabel, Input, Badge,
} from '..';

function CheckboxFilter({
  column: {
    filterValue, setFilter, Header, checkboxFilters,
  },
}) {
  const inputText = `Search ${Header}`;
  const checkedBoxes = filterValue || [];
  const changeCheckbox = (name) => {
    if (checkedBoxes.includes(name)) {
      const newCheckedBoxes = checkedBoxes.filter((val) => val !== name);
      return setFilter(newCheckedBoxes);
    }
    checkedBoxes.push(name);
    return setFilter(checkedBoxes);
  };
  return (
    <Form.Group>
      <FormLabel className="pgn__checkbox-filter-label">{inputText}</FormLabel>
      {checkboxFilters.map(({ name, number }) => (
        <div key={name} className="pgn__checkbox-filter align-items-center mb-2">
          <Input
            type="checkbox"
            checked={checkedBoxes.includes(name)}
            onChange={() => { changeCheckbox(name); }}
          />
          <label htmlFor={name} className="mb-0">
            {name}
          </label>
          {number && <Badge variant="dark">{number}</Badge>}
        </div>
      ))}
    </Form.Group>
  );
}

CheckboxFilter.defaultPropTypes = {
  column: {
    filterValue: [],
  },
};

CheckboxFilter.propTypes = {
  column: PropTypes.shape({
    /** Value for the filter input */
    filterValue: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.string.isRequired,
    checkboxFilters: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
    })).isRequired,
  }).isRequired,
};

export default CheckboxFilter;
