import React from 'react';
import {
  render, screen, fireEvent, within,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Table from './index';

const props = {
  columns: [
    { key: 'num', label: 'Number' },
    { key: 'x2', label: 'Number * 2' },
    { key: 'sq', label: 'Number Squared' },
    { key: 'i', label: 'Imaginary Number' },
  ],
  data: [
    {
      sq: 1, num: 1, x2: 2, i: 'i',
    },
    {
      sq: 4, num: 2, x2: 4, i: '2i',
    },
    {
      sq: 9, num: 3, x2: 6, i: '3i',
    },
  ],
};

const sortableColumnProps = {
  num: {
    columnSortable: true,
    onSort: () => {},
  },
  x2: {
    columnSortable: true,
    onSort: () => {},
  },
  sq: {
    columnSortable: false,
  },
  i: {
    columnSortable: false,
    hideHeader: true,
  },
};

const sortableColumns = props.columns.map(column => ({
  ...column,
  ...sortableColumnProps[column.key],
}));

const sortableProps = {
  columns: sortableColumns,
  data: props.data,
  tableSortable: true,
  defaultSortedColumn: sortableColumns[0].key,
  defaultSortDirection: 'desc',
};

const fixedColumnProps = {
  num: { width: 'col-4' },
  x2: { width: 'col-2' },
  sq: { width: 'col-3' },
  i: { width: 'col-3' },
};

const fixedColumns = props.columns.map(column => ({
  ...column,
  ...fixedColumnProps[column.key],
}));

const fixedProps = {
  ...props,
  columns: fixedColumns,
  hasFixedColumnWidths: true,
};

const propsWithColWidths = {
  ...props,
  columns: fixedColumns,
};

describe('<Table />', () => {
  describe('renders', () => {
    it('with display columns in the right order', () => {
      render(<Table {...props} />);
      props.columns.forEach((column) => {
        const columnHeader = screen.getByText(column.label);
        expect(columnHeader).toBeInTheDocument();
      });
    });

    it('with data in the same order as the columns', () => {
      render(<Table {...props} />);

      const rows = screen.getAllByTestId('table-row');
      rows.forEach((row, rowIndex) => {
        const cells = within(row).getAllByTestId('table-cell');
        cells.forEach((cell, columnIndex) => {
          const cellContent = cell.textContent.trim();
          let parsed = Number(cellContent);
          if (Number.isNaN(parsed)) {
            parsed = cellContent;
          }
          expect(parsed).toEqual(props.data[rowIndex][props.columns[columnIndex].key]);
        });
      });
    });
  });

  describe('that is non-sortable renders', () => {
    it('it sets column headers correctly even with hidden prop', () => {
      render(<Table {...sortableProps} tableSortable={false} />);
      const tableHeadings = screen.getAllByRole('columnheader');

      let hiddenHeader;

      tableHeadings.forEach((th, i) => {
        expect(th.textContent).toEqual(sortableProps.columns[i].label);
        if (sortableProps.columns[i].hideHeader) {
          hiddenHeader = sortableProps.columns[i].label;
        }
      });

      const spanElement = screen.getByText(hiddenHeader);
      expect(spanElement).toBeInTheDocument();
    });

    it('without sortable columns', () => {
      render(<Table {...sortableProps} tableSortable={false} />);
      const tableHeadings = screen.getAllByRole('columnheader');

      tableHeadings.forEach((heading) => {
        expect(heading).not.toHaveClass('sortable');
      });
    });

    it('without column buttons', () => {
      render(<Table {...sortableProps} tableSortable={false} />);
      const buttons = screen.queryAllByRole('button');
      expect(buttons).toHaveLength(0);
    });
  });

  describe('that is sortable and has mixed columns renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<Table {...sortableProps} />).container;
    });

    it('with sortable classname on correct headings', () => {
      const tableHeadings = wrapper.querySelectorAll('th');

      expect(tableHeadings).toHaveLength(sortableProps.columns.length);
      expect(tableHeadings[0]).toHaveClass('sortable');
      expect(tableHeadings[1]).toHaveClass('sortable');
      expect(tableHeadings[2]).not.toHaveClass('sortable');
    });

    it('with sr-only classname on correct headings', () => {
      const srOnly = wrapper.querySelectorAll('.sr-only');

      expect(srOnly).toHaveLength(sortableProps.columns.length - 1);
      expect(srOnly[0]).toHaveClass('sr-only');
      expect(srOnly[1]).toHaveClass('sr-only');
    });

    it('with correct initial sr-only text on correct headings', () => {
      const headings = wrapper.querySelectorAll('.sr-only');

      expect(headings[0]).toHaveTextContent('sort descending');
      expect(headings[1]).toHaveTextContent('click to sort');
    });

    it('with correct column buttons', () => {
      const buttons = wrapper.querySelectorAll('button');
      expect(buttons).toHaveLength(2);
      expect(buttons[0].classList).toContain('btn-header');
      expect(buttons[1].classList).toContain('btn-header');
    });

    it('with correct initial sort icons', () => {
      const buttons = wrapper.querySelectorAll('button');

      expect(buttons).toHaveLength(sortableProps.columns.length - 2);
      expect(buttons[0].querySelector('.fa')).toHaveClass('fa-sort-desc');
      expect(buttons[1].querySelector('.fa')).toHaveClass('fa-sort');
    });
  });

  describe('that is sortable and has mixed columns has behavior that', () => {
    let wrapper;
    let buttons;
    let numSpy;
    let x2Spy;

    beforeEach(() => {
      wrapper = render(<Table data-testid="sorted" {...sortableProps} />).container;

      buttons = wrapper.querySelectorAll('button');
      numSpy = jest.fn();
      x2Spy = jest.fn();

      sortableProps.columns.find(column => (column.key === 'num')).onSort = numSpy;
      sortableProps.columns.find(column => (column.key === 'x2')).onSort = x2Spy;
    });

    it('changes sort icons appropriately on click', () => {
      fireEvent.click(buttons[0]);
      buttons = wrapper.querySelectorAll('button');

      expect(buttons[0].querySelector('.fa')).toHaveClass('fa-sort-asc');
      expect(buttons[0].querySelector('.fa')).not.toHaveClass('fa-sort-desc');
      expect(buttons[0].querySelector('.fa')).not.toHaveClass('fa-sort');

      expect(buttons[1].querySelector('.fa')).toHaveClass('fa-sort');
      expect(buttons[1].querySelector('.fa')).not.toHaveClass('fa-sort-asc');
      expect(buttons[1].querySelector('.fa')).not.toHaveClass('fa-sort-desc');

      fireEvent.click(buttons[1]);
      buttons = wrapper.querySelectorAll('button');

      expect(buttons[0].querySelector('.fa')).toHaveClass('fa-sort');
      expect(buttons[0].querySelector('.fa')).not.toHaveClass('fa-sort-asc');
      expect(buttons[0].querySelector('.fa')).not.toHaveClass('fa-sort-desc');

      expect(buttons[1].querySelector('.fa')).toHaveClass('fa-sort-desc');
      expect(buttons[1].querySelector('.fa')).not.toHaveClass('fa-sort');
      expect(buttons[1].querySelector('.fa')).not.toHaveClass('fa-sort-asc');
    });

    it('changes sr-only text appropriately on click', () => {
      const headings = wrapper.querySelectorAll('.sr-only');

      fireEvent.click(buttons[0]);
      buttons = wrapper.querySelectorAll('button');

      expect(headings[0]).toHaveTextContent('sort ascending');
      expect(headings[1]).toHaveTextContent('click to sort');

      fireEvent.click(buttons[1]);

      expect(headings[0]).toHaveTextContent('click to sort');
      expect(headings[1]).toHaveTextContent('sort descending');
    });

    it('calls onSort function correctly on click', () => {
      expect(numSpy).toHaveBeenCalledTimes(0);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      fireEvent.click(buttons[0]);
      buttons = wrapper.querySelectorAll('button');

      expect(numSpy).toHaveBeenCalledTimes(1);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      expect(numSpy).toBeCalledWith('asc');

      fireEvent.click(buttons[0]);
      buttons = wrapper.querySelectorAll('button');

      expect(numSpy).toHaveBeenCalledTimes(2);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      expect(numSpy).toBeCalledWith('desc');

      fireEvent.click(buttons[1]);
      buttons = wrapper.querySelectorAll('button');

      expect(numSpy).toHaveBeenCalledTimes(2);
      expect(x2Spy).toHaveBeenCalledTimes(1);

      expect(x2Spy).toBeCalledWith('desc');
    });
  });

  describe('that is fixed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<Table {...fixedProps} />).container;
    });

    it('with col width classnames on headings', () => {
      const tableHeadings = wrapper.querySelectorAll('th');

      expect(tableHeadings).toHaveLength(fixedProps.columns.length);
      expect(tableHeadings[0]).toHaveClass('col-4');
      expect(tableHeadings[1]).toHaveClass('col-2');
      expect(tableHeadings[2]).toHaveClass('col-3');
    });

    it('with col width classnames on cells', () => {
      const tableCells = wrapper.querySelectorAll('td');

      expect(tableCells).toHaveLength(fixedProps.columns.length * fixedProps.data.length);
      expect(tableCells[0]).toHaveClass('col-4');
      expect(tableCells[1]).toHaveClass('col-2');
      expect(tableCells[2]).toHaveClass('col-3');
    });

    it('with fixed-related classnames on head, body, and rows', () => {
      const thead = wrapper.querySelector('thead');
      const tbody = wrapper.querySelector('tbody');
      const tr = wrapper.querySelectorAll('tr')[0];

      expect(thead).toHaveClass('d-inline');
      expect(tbody).toHaveClass('d-inline');
      expect(tr).toHaveClass('d-flex');
    });
  });

  describe('that is not fixed with col widths', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<Table {...propsWithColWidths} />).container;
    });

    it('with no col width classnames on headings', () => {
      const tableHeadings = wrapper.querySelectorAll('th');

      expect(tableHeadings).toHaveLength(fixedProps.columns.length);
      expect(tableHeadings[0]).not.toHaveClass('col-4');
      expect(tableHeadings[1]).not.toHaveClass('col-2');
      expect(tableHeadings[2]).not.toHaveClass('col-3');
    });

    it('with no col width classnames on cells', () => {
      const tableCells = wrapper.querySelectorAll('td');

      expect(tableCells).toHaveLength(fixedProps.columns.length * fixedProps.data.length);
      expect(tableCells[0]).not.toHaveClass('col-4');
      expect(tableCells[1]).not.toHaveClass('col-2');
      expect(tableCells[2]).not.toHaveClass('col-3');
    });

    it('with no fixed-related classnames on head, body, and rows', () => {
      const thead = wrapper.querySelector('thead');
      const tbody = wrapper.querySelector('tbody');
      const tr = wrapper.querySelectorAll('tr')[0];

      expect(thead).not.toHaveClass('d-inline');
      expect(tbody).not.toHaveClass('d-inline');
      expect(tr).not.toHaveClass('d-flex');
    });
  });

  describe('renders row headers', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<Table {...props} rowHeaderColumnKey="num" />).container;
    });

    it('with the row header as th with row scope', () => {
      const tableHeadings = wrapper.querySelectorAll('th');

      tableHeadings.forEach((th) => {
        if (th.getAttribute('data-colkey') === 'num') {
          expect(th.getAttribute('scope')).toEqual('row');
        }
      });
    });

    it('with all other columns unchanged', () => {
      const tableCells = wrapper.querySelectorAll('td');

      tableCells.forEach((td) => {
        if (td.getAttribute('data-colkey') !== 'num') {
          expect(td.getAttribute('scope')).not.toEqual('row');
        }
      });
    });
  });
});
