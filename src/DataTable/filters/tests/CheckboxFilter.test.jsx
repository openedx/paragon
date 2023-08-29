import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CheckboxFilter from '../CheckboxFilter';

const setFilterMock = jest.fn();
const roan = { name: 'roan', number: 3, value: '10' };
const palomino = { name: 'palomino', value: '2' };
const props = {
  column: {
    filterValue: [],
    setFilter: setFilterMock,
    Header: 'Horse colors',
    filterChoices: [
      roan,
      palomino,
      { name: 'dappled grey', number: 4, value: 7 },
    ],
    getHeaderProps: () => ({ key: 'foo' }),
  },
};

describe('<CheckboxFilter />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders a list of checkboxes', () => {
    const { getAllByRole } = render(<CheckboxFilter {...props} />);
    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes.length).toEqual(3);
  });

  it('renders a title', () => {
    const { getByText } = render(<CheckboxFilter {...props} />);
    expect(getByText(props.column.Header)).toBeInTheDocument();
  });

  it('sets a filter - no initial filters', () => {
    const { getByLabelText } = render(<CheckboxFilter {...props} />);
    const checkbox = getByLabelText(palomino.name);
    fireEvent.click(checkbox);
    expect(setFilterMock).toHaveBeenCalledWith([palomino.value]);
  });

  it('sets a filter - initial filters', () => {
    const { getByLabelText } = render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const checkbox = getByLabelText(palomino.name);
    fireEvent.click(checkbox);
    expect(setFilterMock).toHaveBeenCalledWith([roan.value, palomino.value]);
  });

  it('removes a filter', () => {
    const { getByLabelText } = render(<CheckboxFilter column={{ ...props.column, filterValue: [palomino.value] }} />);
    const checkbox = getByLabelText(palomino.name);
    fireEvent.click(checkbox);
    expect(setFilterMock).toHaveBeenCalledWith([]);
  });

  it('renders checkbox label with filter name', () => {
    const { getByText } = render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const checkbox = getByText(roan.name);
    expect(checkbox).toBeInTheDocument();
  });

  it('renders checkbox label with number', () => {
    const { getByText } = render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const badge = getByText(String(roan.number));
    expect(badge).toBeInTheDocument();
  });

  it('does not render badge if number is not present', () => {
    const { queryByText } = render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const badge = queryByText(String(palomino.number));
    expect(badge).toBeNull();
  });
});
