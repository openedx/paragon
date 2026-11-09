import { useRef, ReactNode } from 'react';
import Form from '../../Form';
import { newId } from '../../utils';

const DEFAULT_VALUE = '';

interface DropdownFilterProps {
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
   */
  column: {
    setFilter: (value: string | number | undefined) => void;
    Header: ReactNode;
    filterChoices: {
      name: string;
      number?: number;
      value: string | number;
    }[];
    getHeaderProps: () => { key: string };
  };
}

function DropdownFilter({
  column: {
    setFilter, Header, filterChoices, getHeaderProps,
  },
}: DropdownFilterProps) {
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  const ariaLabel = useRef(newId(`dropdown-filter-label-${getHeaderProps().key}-`));
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === DEFAULT_VALUE) {
      // setting undefined resets the filter
      return setFilter(undefined);
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

export default DropdownFilter;
