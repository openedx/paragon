import React from 'react';
import { mount } from 'enzyme';

import TableHeaderRow from '../TableHeaderRow';

const header1Name = 'Name';
const header2Name = 'DOB';
const props = {
  headerGroups: [{
    getHeaderGroupProps: () => ({ className: 'red', key: '1' }),
    headers: [
      {
        Header: header1Name,
        getHeaderProps: () => ({ className: 'bears', key: '1' }),
        render: () => header1Name,
        isSorted: false,
        isSortedDesc: false,
        getSortByToggleProps: () => ({}),
        canSort: false,
      },
      {
        Header: header2Name,
        getHeaderProps: () => ({ className: 'bears', key: '2' }),
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
  it('renders cells', () => {
    const cells = wrapper.find('th');
    expect(cells.length).toEqual(2);
    expect(wrapper.text()).toContain(header1Name);
    expect(wrapper.text()).toContain(header2Name);
  });
});
