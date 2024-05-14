import React from 'react';
import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TablePagination from '../TablePagination';
import DataTableContext from '../DataTableContext';

const instance = {
  state: { pageIndex: 1 },
  pageCount: 3,
  gotoPage: jest.fn(),
};

// eslint-disable-next-line react/prop-types
function PaginationWrapper({ value }) {
  return (
    <DataTableContext.Provider value={value}>
      <TablePagination />
    </DataTableContext.Provider>
  );
}

describe('<TablePagination />', () => {
  it('returns null if pagination is not possible', () => {
    const { container } = render(<PaginationWrapper value={{}} />);
    expect(container.textContent).toBe('');
  });

  it(
    'Shows dropdown button with the page count as label and performs actions when dropdown items are clicked',
    async () => {
      render(<PaginationWrapper value={instance} />);
      const dropdownButton = screen.getByRole('button', { name: /2 of 3/i });
      expect(dropdownButton).toBeInTheDocument();
      await act(async () => {
        await userEvent.click(dropdownButton);
      });

      const dropdownChoices = screen.getAllByTestId('pagination-dropdown-item');
      expect(dropdownChoices.length).toEqual(instance.pageCount);
      await act(async () => {
        await userEvent.click(dropdownChoices[2], undefined, { skipPointerEventsCheck: true });
      });

      expect(instance.gotoPage).toHaveBeenCalledTimes(1);
      expect(instance.gotoPage).toHaveBeenCalledWith(2);
    },
  );
});
