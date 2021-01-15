import React from 'react';
import { mount } from 'enzyme';

import TableRow from '../TableRow';

const props = {
  id: '1',
  getRowProps: () => ({ className: 'red' }),
  cells: [
    {
      column: {
        Header: 'Name',
      },
      getCellProps: () => ({}),
      render: () => 'Fido',
    },
    {
      column: {
        Header: 'Favorite food',
      },
      getCellProps: () => ({}),
      render: () => 'Bones',
    },
  ],
};

describe('<TableRow />', () => {
  const wrapper = mount(<table><tbody><TableRow {...props} /></tbody></table>);
  it('renders a table row', () => {
    const row = wrapper.find('tr');
    expect(row.length).toEqual(1);
  });
  it('adds props to the row', () => {
    const row = wrapper.find('tr');
    expect(row.props().className).toEqual('red');
  });
  it('renders cells', () => {
    const cells = wrapper.find('td');
    expect(cells.length).toEqual(2);
    expect(wrapper.text()).toContain('Fido');
    expect(wrapper.text()).toContain('Bones');
  });
});
