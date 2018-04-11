/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';

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
    const wrapper = shallow(<Table {...props} />);

    it('with display columns in the right order', () => {
      wrapper.find('th').forEach((th, i) => {
        expect(th.text()).toEqual(props.columns[i].label);
      });
    });

    it('with data in the same order as the columns', () => {
      wrapper.find('tr').at(1).find('td').forEach((td, i) => {
        let parsed = Number(td.text());
        if (Number.isNaN(parsed)) { parsed = td.text(); }
        expect(parsed).toEqual(props.data[0][props.columns[i].key]);
      });
    });

    it('with correct initial state', () => {
      expect(wrapper.state('sortedColumn')).toEqual('');
      expect(wrapper.state('sortDirection')).toEqual('');
    });
  });

  describe('that is non-sortable renders', () => {
    const wrapper = mount(<Table {...sortableProps} tableSortable={false} />);

    it('it sets column headers correctly even with hidden prop', () => {
      const tableHeadings = wrapper.find('th');
      let hiddenHeader;

      tableHeadings.forEach((th, i) => {
        expect(th.text()).toEqual(sortableProps.columns[i].label);
        if (sortableProps.columns[i].hideHeader) {
          hiddenHeader = sortableProps.columns[i].label;
        }
      });
      expect(tableHeadings.find('span').text()).toEqual(hiddenHeader);
    });

    it('without sortable columns', () => {
      const tableHeadings = wrapper.find('th');

      tableHeadings.forEach((heading) => {
        expect((heading).hasClass('sortable')).toEqual(false);
      });
    });

    it('without column buttons', () => {
      const buttons = wrapper.find('button');
      expect(buttons).toHaveLength(0);
    });

    it('with correct initial state', () => {
      expect(wrapper.state('sortedColumn')).toEqual('');
      expect(wrapper.state('sortDirection')).toEqual('');
    });
  });

  describe('that is sortable and has mixed columns renders', () => {
    let wrapper = shallow(<Table {...sortableProps} />);

    it('with sortable classname on correct headings', () => {
      const tableHeadings = wrapper.find('th');

      expect(tableHeadings).toHaveLength(sortableProps.columns.length);
      expect(tableHeadings.at(0).hasClass('sortable')).toEqual(true);
      expect(tableHeadings.at(1).hasClass('sortable')).toEqual(true);
      expect(tableHeadings.at(2).hasClass('sortable')).toEqual(false);
    });

    it('with sr-only classname on correct headings', () => {
      const srOnly = wrapper.find('.sr-only');

      expect(srOnly).toHaveLength(sortableProps.columns.length - 1);
      expect((srOnly).at(0).hasClass('sr-only')).toEqual(true);
      expect((srOnly).at(1).hasClass('sr-only')).toEqual(true);
    });

    it('with correct initial sr-only text on correct headings', () => {
      const headings = wrapper.find('.sr-only');

      expect(headings.at(0).text()).toEqual(' sort descending');
      expect(headings.at(1).text()).toEqual(' click to sort');
    });

    it('with correct initial state', () => {
      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.defaultSortedColumn);
      expect(wrapper.state('sortDirection')).toEqual(sortableProps.defaultSortDirection);
    });

    wrapper = mount(<Table {...sortableProps} />);

    it('with correct column buttons', () => {
      const buttons = wrapper.find('button');
      expect(buttons).toHaveLength(2);
      expect(buttons.at(0).hasClass('btn-header')).toBe(true);
      expect(buttons.at(1).hasClass('btn-header')).toBe(true);
    });

    it('with correct initial sort icons', () => {
      const buttons = wrapper.find('button');

      expect(buttons.find('.fa')).toHaveLength(sortableProps.columns.length - 2);
      expect(buttons.at(0).find('.fa-sort-desc')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort')).toHaveLength(1);
    });
  });

  describe('that is sortable and has mixed columns has behavior that', () => {
    let wrapper;
    let buttons;
    let numSpy;
    let x2Spy;

    beforeEach(() => {
      wrapper = mount(<Table {...sortableProps} />);

      buttons = wrapper.find('button');
      numSpy = jest.fn();
      x2Spy = jest.fn();

      sortableProps.columns.find(column => (column.key === 'num')).onSort = numSpy;
      sortableProps.columns.find(column => (column.key === 'x2')).onSort = x2Spy;
    });

    it('changes sort icons appropriately on click', () => {
      buttons.at(0).simulate('click');
      buttons = wrapper.find('button');

      expect(buttons.at(0).find('.fa')).toHaveLength(1);
      expect(buttons.at(0).find('.fa-sort-asc')).toHaveLength(1);
      expect(buttons.at(0).find('.fa-sort-desc')).toHaveLength(0);
      expect(buttons.at(0).find('.fa-sort')).toHaveLength(0);

      expect(buttons.at(1).find('.fa')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort-asc')).toHaveLength(0);
      expect(buttons.at(1).find('.fa-sort-desc')).toHaveLength(0);
      expect(buttons.at(1).find('.fa-sort')).toHaveLength(1);

      buttons.at(1).simulate('click');
      buttons = wrapper.find('button');

      expect(buttons.at(0).find('.fa')).toHaveLength(1);
      expect(buttons.at(0).find('.fa-sort-asc')).toHaveLength(0);
      expect(buttons.at(0).find('.fa-sort-desc')).toHaveLength(0);
      expect(buttons.at(0).find('.fa-sort')).toHaveLength(1);

      expect(buttons.at(1).find('.fa')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort-asc')).toHaveLength(0);
      expect(buttons.at(1).find('.fa-sort-desc')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort')).toHaveLength(0);
    });

    it('changes sr-only text appropriately on click', () => {
      const headings = wrapper.find('.sr-only');

      buttons.at(0).simulate('click');
      buttons = wrapper.find('button');

      expect(headings.at(0).text()).toEqual(' sort ascending');
      expect(headings.at(1).text()).toEqual(' click to sort');

      buttons.at(1).simulate('click');

      expect(headings.at(0).text()).toEqual(' click to sort');
      expect(headings.at(1).text()).toEqual(' sort descending');
    });

    it('changes state appropriately on click', () => {
      buttons.at(0).simulate('click');
      buttons = wrapper.find('button');

      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.defaultSortedColumn);
      expect(wrapper.state('sortDirection')).toEqual('asc');

      buttons.at(0).simulate('click');
      buttons = wrapper.find('button');

      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.defaultSortedColumn);
      expect(wrapper.state('sortDirection')).toEqual('desc');

      buttons.at(1).simulate('click');
      buttons = wrapper.find('button');

      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.columns[1].key);
      expect(wrapper.state('sortDirection')).toEqual('desc');
    });

    it('calls onSort function correctly on click', () => {
      expect(numSpy).toHaveBeenCalledTimes(0);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      buttons.at(0).simulate('click');
      buttons = wrapper.find('button');

      expect(numSpy).toHaveBeenCalledTimes(1);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      expect(numSpy).toBeCalledWith('asc');

      buttons.at(0).simulate('click');
      buttons = wrapper.find('button');

      expect(numSpy).toHaveBeenCalledTimes(2);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      expect(numSpy).toBeCalledWith('desc');

      buttons.at(1).simulate('click');
      buttons = wrapper.find('button');

      expect(numSpy).toHaveBeenCalledTimes(2);
      expect(x2Spy).toHaveBeenCalledTimes(1);

      expect(x2Spy).toBeCalledWith('desc');
    });
  });
  describe('that is fixed', () => {
    const wrapper = shallow(<Table {...fixedProps} />);

    it('with col width classnames on headings', () => {
      const tableHeadings = wrapper.find('th');

      expect(tableHeadings).toHaveLength(fixedProps.columns.length);
      expect(tableHeadings.at(0).hasClass('col-4')).toEqual(true);
      expect(tableHeadings.at(1).hasClass('col-2')).toEqual(true);
      expect(tableHeadings.at(2).hasClass('col-3')).toEqual(true);
    });

    it('with col width classnames on cells', () => {
      const tableCells = wrapper.find('td');

      expect(tableCells).toHaveLength(fixedProps.columns.length * fixedProps.data.length);
      expect(tableCells.at(0).hasClass('col-4')).toEqual(true);
      expect(tableCells.at(1).hasClass('col-2')).toEqual(true);
      expect(tableCells.at(2).hasClass('col-3')).toEqual(true);
    });
    it('with fixed-related classnames on head, body, and rows', () => {
      const thead = wrapper.find('thead');
      const tbody = wrapper.find('tbody');
      const tr = wrapper.find('tr');

      expect(thead.hasClass('d-inline')).toEqual(true);
      expect(tbody.hasClass('d-inline')).toEqual(true);
      expect(tr.at(0).hasClass('d-flex')).toEqual(true);
    });
  });
  describe('that is not fixed with col widths', () => {
    const wrapper = shallow(<Table {...propsWithColWidths} />);

    it('with no col width classnames on headings', () => {
      const tableHeadings = wrapper.find('th');

      expect(tableHeadings).toHaveLength(fixedProps.columns.length);
      expect(tableHeadings.at(0).hasClass('col-4')).toEqual(false);
      expect(tableHeadings.at(1).hasClass('col-2')).toEqual(false);
      expect(tableHeadings.at(2).hasClass('col-3')).toEqual(false);
    });

    it('with no col width classnames on cells', () => {
      const tableCells = wrapper.find('td');

      expect(tableCells).toHaveLength(fixedProps.columns.length * fixedProps.data.length);
      expect(tableCells.at(0).hasClass('col-4')).toEqual(false);
      expect(tableCells.at(1).hasClass('col-2')).toEqual(false);
      expect(tableCells.at(2).hasClass('col-3')).toEqual(false);
    });
    it('with no fixed-related classnames on head, body, and rows', () => {
      const thead = wrapper.find('thead');
      const tbody = wrapper.find('tbody');
      const tr = wrapper.find('tr');

      expect(thead.hasClass('d-inline')).toEqual(false);
      expect(tbody.hasClass('d-inline')).toEqual(false);
      expect(tr.at(0).hasClass('d-flex')).toEqual(false);
    });
  });
});
