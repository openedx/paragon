import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormLabel, Badge,
} from '../..';
import { newId } from '../../utils';
import LabelledCheckbox from './LabelledCheckbox';

function CheckboxFilter({
  column: {
    filterValue, setFilter, Header, checkboxFilters, getHeaderProps,
  },
}) {
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  const ariaLabel = useRef(newId(`checkbox-filter-label-${getHeaderProps().key}-`));
  const inputText = `Filter by ${Header}`;
  const checkedBoxes = filterValue;
  const changeCheckbox = (name) => {
    if (checkedBoxes.includes(name)) {
      const newCheckedBoxes = checkedBoxes.filter((val) => val !== name);
      return setFilter(newCheckedBoxes);
    }
    checkedBoxes.push(name);
    return setFilter(checkedBoxes);
  };
  const headerBasedId = useMemo(() => `checkbox-filter-check-${getHeaderProps().key}-`, [getHeaderProps]);

  return (
    <Form.Group role="group" aria-labelledby={ariaLabel.current}>
      <FormLabel id={ariaLabel.current} className="pgn__checkbox-filter-label">{inputText}</FormLabel>
      {checkboxFilters.map(({ name, number }) => (
        <LabelledCheckbox
          id={headerBasedId}
          checked={checkedBoxes.includes(name)}
          onChange={() => { changeCheckbox(name); }}
          label={<>{name} {number && <Badge variant="light">{number}</Badge>}</>}
        />
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
    filterValue: PropTypes.arrayOf(PropTypes.any),
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.string.isRequired,
    checkboxFilters: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
    })).isRequired,
    getHeaderProps: PropTypes.func.isRequired,
  }).isRequired,
};

export default CheckboxFilter;
