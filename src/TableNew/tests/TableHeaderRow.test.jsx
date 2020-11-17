import React from 'react';
import { mount } from 'enzyme';

import TableHeaderCell from '../TableHeaderCell';
import TableHeaderRow from '../TableHeaderRow';

const header1Name = 'Name';
const header2Name = 'DOB';
const props = {
  headerGroups: [{
    getHeaderGroupProps: () => ({ className: 'red' }),
    headers: [
      {
        Header: header1Name,
        getHeaderProps: () => ({ className: 'bears' }),
        render: () => header1Name,
        isSorted: false,
        isSortedDesc: false,
        getSortByToggleProps: () => ({}),
        canSort: false,
      },
      {
        Header: header2Name,
        getHeaderProps: () => ({ className: 'bears' }),
        render: () => header2Name,
        isSorted: false,
        isSortedDesc: false,
        getSortByToggleProps: () => ({}),
        canSort: true,
      },
    ],
  }],
};

describe('<TableHeaderRow />', () => {
  const wrapper = mount(<table><TableHeaderRow {...props} /></table>);
  it('renders a table head and row', () => {
    const head = wrapper.find('thead');
    expect(head.length).toEqual(1);
    const row = wrapper.find('tr');
    expect(row.length).toEqual(1);
  });
  it('adds props to the row', () => {
    const row = wrapper.find('tr');
    expect(row.props().className).toEqual('red');
  });
  it('adds props to the cell', () => {
    const cells = wrapper.find(TableHeaderCell);
    expect(cells.get(0).props().className).toEqual('bears');
    expect(cells.get(1).props().className).toEqual('bears');
  });
  it('renders cells', () => {
    const cells = wrapper.find('td');
    expect(cells.length).toEqual(2);
    expect(wrapper.text()).toContain('Name');
    expect(wrapper.text()).toContain('DOB');
  });
});
