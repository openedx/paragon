import React from 'react';
import { mount } from 'enzyme';

import TableCell from '../TableCell';

const props = {
  getCellProps: () => ({ className: 'red' }),
  render: () => 'Cell data',
};

describe('<TableCell />', () => {
  const wrapper = mount(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
  it('renders a table cell', () => {
    const cell = wrapper.find('td');
    expect(cell.length).toEqual(1);
  });
  it('adds props to the cell', () => {
    const cell = wrapper.find('td');
    expect(cell.props().className).toEqual('red');
  });
  it('renders cell content', () => {
    const cell = wrapper.find('td');
    expect(cell.text()).toEqual('Cell data');
  });
});
