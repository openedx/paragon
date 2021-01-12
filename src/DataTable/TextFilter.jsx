import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, Input } from '..';

function TextFilter({
  // hideLabel,
  column: {
    filterValue, setFilter, Header,
  },
}) {
  const inputText = `Search ${Header}`;
  return (
    <Form.Group>
      {/* TODO: make sr-only toggleable */}
      <FormLabel className="sr-only">{inputText}</FormLabel>
      <Input
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
  // hideLabel: PropTypes.bool.isRequired,
  column: PropTypes.shape({
    /** Value for the filter input */
    filterValue: PropTypes.string,
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.string.isRequired,
  }).isRequired,
};

export default TextFilter;
