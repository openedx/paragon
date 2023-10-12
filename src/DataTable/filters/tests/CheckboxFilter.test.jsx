import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    render(<CheckboxFilter {...props} />);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toEqual(3);
  });

  it('renders a title', () => {
    render(<CheckboxFilter {...props} />);
    expect(screen.getByText(props.column.Header)).toBeInTheDocument();
  });

  it('sets a filter - no initial filters', async () => {
    render(<CheckboxFilter {...props} />);
    const checkbox = screen.getByLabelText(palomino.name);
    await userEvent.click(checkbox);
    expect(setFilterMock).toHaveBeenCalledWith([palomino.value]);
  });

  it('sets a filter - initial filters', async () => {
    render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const checkbox = screen.getByLabelText(palomino.name);
    await userEvent.click(checkbox);
    expect(setFilterMock).toHaveBeenCalledWith([roan.value, palomino.value]);
  });

  it('removes a filter', async () => {
    render(<CheckboxFilter column={{ ...props.column, filterValue: [palomino.value] }} />);
    const checkbox = screen.getByLabelText(palomino.name);
    await userEvent.click(checkbox);
    expect(setFilterMock).toHaveBeenCalledWith([]);
  });

  it('renders checkbox label with filter name', () => {
    render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const checkbox = screen.getByText(roan.name);
    expect(checkbox).toBeInTheDocument();
  });

  it('renders checkbox label with number', () => {
    render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const badge = screen.getByText(String(roan.number));
    expect(badge).toBeInTheDocument();
  });

  it('does not render badge if number is not present', () => {
    render(<CheckboxFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    const badge = screen.queryByText(String(palomino.number));
    expect(badge).toBeNull();
  });
});
