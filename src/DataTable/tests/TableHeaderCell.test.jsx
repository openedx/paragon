import React from 'react';
import { mount } from 'enzyme';

import TableHeaderCell, { SortIndicator } from '../TableHeaderCell';

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
    it('adds the headerClassName to inner span', () => {
      const innerCell = wrapper.find('th span').at(0);
      expect(innerCell.props().className).toContain(props.headerClassName);
    });
  });
  describe('with sorting', () => {
    it('renders a sortable indicator if sorting is available', () => {
      const wrapper = mount(<FakeTable><TableHeaderCell {...props} canSort /></FakeTable>);
      expect(wrapper.find(SortIndicator).props().isSorted).toBe(false);
      expect(wrapper.find(SortIndicator).props().isSortedDesc).toBe(false);
    });
    it('renders a sorted ascending indicator when sorted ascending', () => {
      const wrapper = mount(
        <FakeTable>
          <TableHeaderCell {...props} canSort isSorted />
        </FakeTable>,
      );
      expect(wrapper.find(SortIndicator).props().isSorted).toBe(true);
      expect(wrapper.find(SortIndicator).props().isSortedDesc).toBe(false);
    });
    it('renders a sorted descending indicator when sorted ascending', () => {
      const wrapper = mount(
        <FakeTable>
          <TableHeaderCell {...props} canSort isSorted isSortedDesc />
        </FakeTable>,
      );
      expect(wrapper.find(SortIndicator).props().isSorted).toBe(true);
      expect(wrapper.find(SortIndicator).props().isSortedDesc).toBe(true);
    });
    it('adds the toggle props to the header props if toggle props are available', () => {
      const headerPropsSpy = jest.fn().mockReturnValueOnce({});
      mount(
        <FakeTable>
          <TableHeaderCell {...props} canSort getHeaderProps={headerPropsSpy} />
        </FakeTable>,
      );
      expect(headerPropsSpy).toHaveBeenCalledWith(sortByToggleProps);
    });
  });
});
