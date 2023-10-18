import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropdownFilter from '../DropdownFilter';

const setFilterMock = jest.fn();
const roan = { name: 'roan', number: 3, value: '0' };
const palomino = { name: 'palomino', value: '1' };
const props = {
  column: {
    filterValue: [],
    setFilter: setFilterMock,
    Header: 'Horse colors',
    getHeaderProps: () => ({ key: 'foo' }),
    filterChoices: [
      roan,
      palomino,
      { name: 'dappled grey', value: '10' },
    ],
  },
};

describe('<DropdownFilter />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders a select button', () => {
    render(<DropdownFilter {...props} />);
    expect(screen.getByLabelText(props.column.Header)).toBeInTheDocument();
  });

  it('sets a filter - no initial filters', async () => {
    render(<DropdownFilter {...props} />);
    const select = screen.getByLabelText(props.column.Header);
    await userEvent.click(select);
    await userEvent.selectOptions(select, palomino.value);
    expect(setFilterMock).toHaveBeenCalledWith(palomino.value);
  });

  it('sets a filter - initial filters', async () => {
    render(
      <DropdownFilter column={{ ...props.column, filterValue: [palomino.value] }} />,
    );
    const select = screen.getByLabelText(props.column.Header);
    await userEvent.click(select);
    await userEvent.selectOptions(select, palomino.value);
    expect(setFilterMock).toHaveBeenCalledWith(palomino.value);
  });

  it('removes filters when default option is clicked', async () => {
    render(
      <DropdownFilter column={{ ...props.column, filterValue: [palomino.value] }} />,
    );
    const select = screen.getByLabelText(props.column.Header);
    await userEvent.click(select);
    await userEvent.selectOptions(select, '');
    expect(setFilterMock).toHaveBeenCalledWith(undefined);
  });

  it('displays a number if a number is provided', async () => {
    render(<DropdownFilter {...props} />);
    const select = screen.getByLabelText(props.column.Header);
    await userEvent.click(select);
    const option = screen.getByText(`${roan.name} (${roan.number})`);
    expect(option).toBeInTheDocument();
  });
});
