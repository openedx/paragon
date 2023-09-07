import React from 'react';
import { render, screen } from '@testing-library/react';

import TableHeaderCell from '../TableHeaderCell';

const sortByToggleProps = { foo: 'bar' };
const props = {
  getHeaderProps: () => ({ className: 'red' }),
  render: () => 'Title',
  isSorted: false,
  isSortedDesc: false,
  getSortByToggleProps: () => (sortByToggleProps),
  canSort: false,
  headerClassName: 'align-me',
};

// eslint-disable-next-line react/prop-types
function FakeTable({ children }) {
  return <table><thead><tr>{children}</tr></thead></table>;
}

describe('<TableHeaderCell />', () => {
  describe('unsorted', () => {
    render(
      <FakeTable>
        <TableHeaderCell {...props} />
      </FakeTable>,
    );
    const cell = screen.getByRole('columnheader');
    const innerCell = cell.firstChild;

    it('renders a table header cell', () => {
      expect(cell).toBeInTheDocument();
    });

    it('adds props to the cell', () => {
      expect(cell.className).toBe('red');
    });

    it('adds the headerClassName to inner span', () => {
      expect(innerCell.className).toContain(props.headerClassName);
    });
  });

  describe('with sorting', () => {
    it('renders a sortable indicator if sorting is available', () => {
      render(<TableHeaderCell {...props} canSort />);
      const sortIndicator = screen.getByTestId('arrow-drop-up-down');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('renders a sorted ascending indicator when sorted ascending', () => {
      render(<TableHeaderCell {...props} canSort isSorted />);
      const sortIndicator = screen.getByTestId('arrow-drop-up');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('renders a sorted descending indicator when sorted descending', () => {
      render(<TableHeaderCell {...props} canSort isSorted isSortedDesc />);
      const sortIndicator = screen.getByTestId('arrow-drop-down');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('adds the toggle props to the header props if toggle props are available', () => {
      const headerPropsSpy = jest.fn().mockReturnValueOnce({});
      render(<TableHeaderCell {...props} canSort getHeaderProps={headerPropsSpy} />);
      expect(headerPropsSpy).toHaveBeenCalledWith(sortByToggleProps);
    });
  });
});
