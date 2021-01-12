import React from 'react';
import { mount } from 'enzyme';

import TableHeaderCell, { SortIndicator } from '../TableHeaderCell';

const sortByToggleProps = { foo: 'bar' };
const columnProps = {
  getHeaderProps: () => ({ className: 'red' }),
  render: () => 'Title',
  isSorted: false,
  isSortedDesc: false,
  getSortByToggleProps: () => (sortByToggleProps),
  canSort: false,
};
const props = {
  column: columnProps,
};

// eslint-disable-next-line react/prop-types
const FakeTable = ({ children }) => (<table><thead><tr>{children}</tr></thead></table>);

describe('<TableHeaderCell />', () => {
  describe('unsorted', () => {
    const wrapper = mount(<FakeTable><TableHeaderCell {...props} /></FakeTable>);
    it('renders a table header cell', () => {
      const cell = wrapper.find('th');
      expect(cell.length).toEqual(1);
    });
    it('adds props to the cell', () => {
      const cell = wrapper.find('th');
      expect(cell.props().className).toEqual('red');
    });
    it('renders cell content', () => {
      const cell = wrapper.find('th');
      expect(cell.text()).toEqual('Title');
    });
  });
  describe('with sorting', () => {
    it('renders a sortable indicator if sorting is available', () => {
      const wrapper = mount(<FakeTable><TableHeaderCell column={{ ...columnProps, canSort: true }} /></FakeTable>);
      expect(wrapper.find(SortIndicator).props().isSorted).toBe(false);
      expect(wrapper.find(SortIndicator).props().isSortedDesc).toBe(false);
    });
    it('renders a sorted ascending indicator when sorted ascending', () => {
      const wrapper = mount(
        <FakeTable>
          <TableHeaderCell column={{ ...columnProps, canSort: true, isSorted: true }} />
        </FakeTable>,
      );
      expect(wrapper.find(SortIndicator).props().isSorted).toBe(true);
      expect(wrapper.find(SortIndicator).props().isSortedDesc).toBe(false);
    });
    it('renders a sorted descending indicator when sorted ascending', () => {
      const wrapper = mount(
        <FakeTable>
          <TableHeaderCell column={{
            ...columnProps, canSort: true, isSorted: true, isSortedDesc: true,
          }}
          />
        </FakeTable>,
      );
      expect(wrapper.find(SortIndicator).props().isSorted).toBe(true);
      expect(wrapper.find(SortIndicator).props().isSortedDesc).toBe(true);
    });
    it('adds the toggle props to the header props if toggle props are available', () => {
      const headerPropsSpy = jest.fn().mockReturnValueOnce({});
      mount(
        <FakeTable>
          <TableHeaderCell column={{ ...columnProps, canSort: true, getHeaderProps: headerPropsSpy }} />
        </FakeTable>,
      );
      expect(headerPropsSpy).toHaveBeenCalledWith(sortByToggleProps);
    });
  });
});
