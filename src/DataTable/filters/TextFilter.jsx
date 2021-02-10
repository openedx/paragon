import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, Input } from '../..';
import { newId } from '../../utils';

function TextFilter({
  column: {
    filterValue, setFilter, Header, getHeaderProps,
  },
}) {
  const ariaLabel = useRef(newId(`text-filter-label-${getHeaderProps().key}-`));
  const inputText = `Search ${Header}`;
  return (
    <Form.Group>
      <FormLabel id={ariaLabel.current} className="sr-only">{inputText}</FormLabel>
      <Input
        aria-labelledby={ariaLabel.current}
        value={filterValue || ''}
        type="text"
        onChange={e => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={inputText}
      />
    </Form.Group>
  );
}

TextFilter.propTypes = {
  column: PropTypes.shape({
    /** Value for the filter input */
    filterValue: PropTypes.string,
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.string.isRequired,
    getHeaderProps: PropTypes.func.isRequired,
  }).isRequired,
};

export default TextFilter;
