import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
} from '../..';
import { newId } from '../../utils';

const DEFAULT_VALUE = 'dropdown-filter-default';

function DropdownFilter({
  column: {
    setFilter, Header, filterChoices, getHeaderProps,
  },
}) {
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  const ariaLabel = useRef(newId(`dropdown-filter-label-${getHeaderProps().key}-`));
  const onChange = (e) => {
    if (e.target.value === DEFAULT_VALUE) {
      return setFilter(null);
    }
    return setFilter(e.target.value);
  };

  return (
    <Form.Group>
      <Form.Label id={ariaLabel.current} className="sr-only">{Header}</Form.Label>
      <Form.Control
        as="select"
        default={DEFAULT_VALUE}
        onChange={onChange}
        aria-labelledby={ariaLabel.current}
      >
        <option value={DEFAULT_VALUE}>{Header}</option>
        {filterChoices.map(({ name, number, value }) => (<option key={value} value={value}>{name} {number && `(${number})`}</option>))}
      </Form.Control>
    </Form.Group>
  );
}

DropdownFilter.propTypes = {
  column: PropTypes.shape({
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.string.isRequired,
    /** Names and values for the select options */
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })).isRequired,
    /** Generates a key unique to the column being filtered */
    getHeaderProps: PropTypes.func.isRequired,
  }).isRequired,
};

export default DropdownFilter;
