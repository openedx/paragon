import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TableHeaderCell from '../TableHeaderCell';

const sortByToggleProps = { 'data-sort-prop': 'bar' };
const props = {
  getHeaderProps: () => ({ className: 'red' }),
  render: () => 'Title',
  isSorted: false,
  isSortedDesc: false,
  getSortByToggleProps: () => (sortByToggleProps),
  canSort: false,
  headerClassName: 'align-me',
};

function FakeTable({ ...rest }) {
  return <table><thead><tr><TableHeaderCell {...rest} /></tr></thead></table>;
}

describe('<TableHeaderCell />', () => {
  describe('unsorted', () => {
    it('renders a table header cell', () => {
      render(<FakeTable {...props} />);
      const cell = screen.getByRole('columnheader');
      expect(cell).toBeInTheDocument();
    });

    it('adds props to the cell', () => {
      render(<FakeTable {...props} />);
      const cell = screen.getByRole('columnheader');
      expect(cell.className).toBe('red');
    });

    it('adds column scope to the cell', () => {
      render(<FakeTable {...props} />);
      const cell = screen.getByRole('columnheader');
      expect(cell).toHaveAttribute('scope', 'col');
    });

    it('adds the headerClassName to inner span', () => {
      render(<FakeTable {...props} />);
      const cell = screen.getByRole('columnheader');
      const innerCell = cell.firstChild;
      expect(innerCell.className).toContain(props.headerClassName);
    });

    it('does not render a button for non-sortable headers', () => {
      render(<FakeTable {...props} />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('with sorting', () => {
    it('renders a sortable indicator if sorting is available', () => {
      render(<FakeTable {...props} canSort />);
      const sortIndicator = screen.getByTestId('arrow-drop-up-down');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('renders a sorted ascending indicator when sorted ascending', () => {
      render(<FakeTable {...props} canSort isSorted />);
      const sortIndicator = screen.getByTestId('arrow-drop-up');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('renders a sorted descending indicator when sorted descending', () => {
      render(<FakeTable {...props} canSort isSorted isSortedDesc />);
      const sortIndicator = screen.getByTestId('arrow-drop-down');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('renders the sort toggle as a button', () => {
      render(<FakeTable {...props} canSort />);
      expect(screen.getByRole('button', { name: 'Title' })).toBeInTheDocument();
    });

    it('adds ascending sort state to the header cell when sorted ascending', () => {
      render(<FakeTable {...props} canSort isSorted />);
      const cell = screen.getByRole('columnheader');
      expect(cell).toHaveAttribute('aria-sort', 'ascending');
    });

    it('adds descending sort state to the header cell when sorted descending', () => {
      render(<FakeTable {...props} canSort isSorted isSortedDesc />);
      const cell = screen.getByRole('columnheader');
      expect(cell).toHaveAttribute('aria-sort', 'descending');
    });

    it('does not add inactive sort state to unsorted header cells', () => {
      render(<FakeTable {...props} canSort />);
      const cell = screen.getByRole('columnheader');
      expect(cell).not.toHaveAttribute('aria-sort');
    });

    it('adds the toggle props to the sort button if toggle props are available', () => {
      render(<FakeTable {...props} canSort />);
      const button = screen.getByRole('button', { name: 'Title' });
      expect(button).toHaveAttribute('data-sort-prop', sortByToggleProps['data-sort-prop']);
    });

    it('does not pass toggle props to the header props', () => {
      const headerPropsSpy = jest.fn().mockReturnValueOnce({});
      render(<FakeTable {...props} canSort getHeaderProps={headerPropsSpy} />);
      expect(headerPropsSpy).toHaveBeenCalledWith();
    });

    it('makes sortable headers keyboard reachable and operable', async () => {
      const user = userEvent.setup();
      const handleSort = jest.fn();
      render(<FakeTable {...props} canSort getSortByToggleProps={() => ({ onClick: handleSort })} />);
      const button = screen.getByRole('button', { name: 'Title' });

      await user.tab();
      expect(button).toHaveFocus();

      await user.keyboard('{Enter}');
      expect(handleSort).toHaveBeenCalledTimes(1);

      await user.keyboard(' ');
      expect(handleSort).toHaveBeenCalledTimes(2);
    });
  });
});
