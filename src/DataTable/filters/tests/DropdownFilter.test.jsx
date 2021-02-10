import React from 'react';
import { mount } from 'enzyme';

import DropdownFilter from '../DropdownFilter';

const setFilterMock = jest.fn();
const roan = { name: 'roan', number: 3, value: '0' };
const palomino = { name: 'palomino', value: '1' };
const props = {
  column: {
    filterValue: [],
    setFilter: setFilterMock,
    Header: 'Horse colors',
    getHeaderProps: () => ({ key: 'foo' }),
    filterChoices: [
      roan,
      palomino,
      { name: 'dappled grey', value: '10' },
    ],
  },
};

describe('<DropdownFilter />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('renders a select button', () => {
    const wrapper = mount(<DropdownFilter {...props} />);
    expect(wrapper.text()).toContain(props.column.Header);
  });
  it('sets a filter - no initial filters', () => {
    const wrapper = mount(<DropdownFilter {...props} />);
    wrapper.find('select').simulate('click');
    wrapper.find('option').at(2).simulate('change');
    expect(setFilterMock).toHaveBeenCalledWith(palomino.value);
  });
  it('sets a filter - initial filters', () => {
    const wrapper = mount(<DropdownFilter {...props} />);
    wrapper.find('select').simulate('click');
    wrapper.find('option').at(2).simulate('change');
    expect(setFilterMock).toHaveBeenCalledWith(palomino.value);
  });
  it('removes filters when default option is clicked', () => {
    const wrapper = mount(<DropdownFilter column={{ ...props.column, filterValue: palomino.value }} />);
    wrapper.find('select').simulate('click');
    wrapper.find('option').at(0).simulate('change');
    expect(setFilterMock).toHaveBeenCalledWith(undefined);
  });
  it('displays a number if a number is provided', () => {
    const wrapper = mount(<DropdownFilter {...props} />);
    wrapper.find('select').simulate('click');
    const option = wrapper.find('option').at(1);
    expect(option.text()).toEqual(`${roan.name} (${roan.number})`);
  });
});
