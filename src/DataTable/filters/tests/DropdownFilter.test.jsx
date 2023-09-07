import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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
    const { getByLabelText } = render(<DropdownFilter {...props} />);
    expect(getByLabelText(props.column.Header)).toBeInTheDocument();
  });

  it('sets a filter - no initial filters', () => {
    const { getByLabelText } = render(<DropdownFilter {...props} />);
    const select = getByLabelText(props.column.Header);
    fireEvent.click(select);
    fireEvent.change(select, { target: { value: palomino.value } });
    expect(setFilterMock).toHaveBeenCalledWith(palomino.value);
  });

  it('sets a filter - initial filters', () => {
    const { getByLabelText } = render(
      <DropdownFilter column={{ ...props.column, filterValue: [palomino.value] }} />,
    );
    const select = getByLabelText(props.column.Header);
    fireEvent.click(select);
    fireEvent.change(select, { target: { value: palomino.value } });
    expect(setFilterMock).toHaveBeenCalledWith(palomino.value);
  });

  it('removes filters when default option is clicked', () => {
    const { getByLabelText } = render(
      <DropdownFilter column={{ ...props.column, filterValue: [palomino.value] }} />,
    );
    const select = getByLabelText(props.column.Header);
    fireEvent.click(select);
    fireEvent.change(select, { target: { value: '' } });
    expect(setFilterMock).toHaveBeenCalledWith(undefined);
  });

  it('displays a number if a number is provided', () => {
    const { getByLabelText, getByText } = render(<DropdownFilter {...props} />);
    const select = getByLabelText(props.column.Header);
    fireEvent.click(select);
    const option = getByText(`${roan.name} (${roan.number})`);
    expect(option).toBeInTheDocument();
  });
});
