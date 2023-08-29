import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
    const { getByTestId } = render(
      <FakeTable>
        <TableHeaderCell {...props} />
      </FakeTable>,
    );
    const cell = getByTestId('th-id');
    const innerCell = getByTestId('th-id').firstChild;

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
      const { getByTestId } = render(<TableHeaderCell {...props} canSort />);
      const sortIndicator = getByTestId('ArrowDropUpDown');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('renders a sorted ascending indicator when sorted ascending', () => {
      const { getByTestId } = render(<TableHeaderCell {...props} canSort isSorted />);
      const sortIndicator = getByTestId('ArrowDropUp');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('renders a sorted descending indicator when sorted descending', () => {
      const { getByTestId } = render(<TableHeaderCell {...props} canSort isSorted isSortedDesc />);
      const sortIndicator = getByTestId('ArrowDropDown');
      expect(sortIndicator).toBeInTheDocument();
    });

    it('adds the toggle props to the header props if toggle props are available', () => {
      const headerPropsSpy = jest.fn().mockReturnValueOnce({});
      render(<TableHeaderCell {...props} canSort getHeaderProps={headerPropsSpy} />);
      expect(headerPropsSpy).toHaveBeenCalledWith(sortByToggleProps);
    });
  });
});
