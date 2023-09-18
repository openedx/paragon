import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropdownFilters from '../DropdownFilters';
import { useWindowSize } from '../..';
import DataTableContext from '../DataTableContext';

jest.mock('../../hooks/useWindowSize');

const instance = {
  columns: [
    {
      Header: 'Bears',
      canFilter: true,
      render: () => <div>Bears filter</div>,
    },
    {
      Header: 'Occupation',
      canFilter: true,
      render: () => <div>Occupation filter</div>,
    },
    {
      Header: 'DOB',
      canFilter: false,
      render: () => <div>DOB filter</div>,
    },
  ],
};

// eslint-disable-next-line react/prop-types
function DropdownFiltersWrapper({ value = instance, props }) {
  return (
    <DataTableContext.Provider value={value}>
      <DropdownFilters {...props} />
    </DataTableContext.Provider>
  );
}

describe('<DropdownFilters />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('non-mobile site', () => {
    it('renders a breakout filter', () => {
      useWindowSize.mockReturnValue({ width: 800 });

      render(<DropdownFiltersWrapper />);
      expect(screen.getByText('Bears filter')).toBeInTheDocument();
    });

    it('renders additional filters in a dropdown', async () => {
      useWindowSize.mockReturnValue({ width: 800 });
      render(<DropdownFiltersWrapper />);
      // filter should be rendered in the dropdown, so should not be present before
      // clicking the button.
      expect(screen.queryByText('Occupation filter')).toBeNull();
      const filtersButton = screen.getByRole('button', { name: /Filters/i });
      await userEvent.click(filtersButton);
      expect(screen.getByText('Occupation filter')).toBeInTheDocument();
    });

    it('should not render filters for non-filterable rows', async () => {
      useWindowSize.mockReturnValue({ width: 800 });
      render(<DropdownFiltersWrapper />);
      expect(screen.queryByText('DOB filter')).toBeNull();
      const filtersButton = screen.getByRole('button', { name: /Filters/i });
      await userEvent.click(filtersButton);
      expect(screen.queryByText('DOB filter')).toBeNull();
    });

    it('does not render a dropdown if there is only one filter', () => {
      useWindowSize.mockReturnValue({ width: 800 });
      render(<DropdownFiltersWrapper value={{ columns: [instance.columns[1]] }} />);
      expect(screen.getByText('Occupation filter')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /Filters/i })).toBeNull();
    });
  });

  describe('on mobile', () => {
    it('does not render a breakout filter', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      render(<DropdownFiltersWrapper />);
      expect(screen.queryByText('Bears filter')).toBeNull();
    });

    it('renders all filters in the dropdown', async () => {
      useWindowSize.mockReturnValue({ width: 500 });
      render(<DropdownFiltersWrapper />);
      const filtersButton = screen.getByRole('button', { name: /Filters/i });
      await userEvent.click(filtersButton);
      expect(screen.getByText('Bears filter')).toBeInTheDocument();
      expect(screen.getByText('Occupation filter')).toBeInTheDocument();
    });
  });
});
