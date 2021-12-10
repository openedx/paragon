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
  /**
   * Specifies a column object.
   *
   * `setFilter`: Function to set the filter value.
   *
   * `Header`: Column header used for labels and placeholders.
   *
   * `getHeaderProps`: Generates a key unique to the column being filtered.
   *
   * `filterValue`: Value for the filter input.
   */
  column: PropTypes.shape({
    setFilter: PropTypes.func.isRequired,
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.string,
  }).isRequired,
};

export default TextFilter;
