import React from 'react';
import { mount } from 'enzyme';

import MultiSelectDropdownFilter from '../MultiSelectDropdownFilter';
import Badge from '../../../Badge';

const setFilterMock = jest.fn();
const roan = { name: 'roan', number: 3, value: 10 };
const palomino = { name: 'palomino', value: 2 };
const props = {
  column: {
    filterValue: [],
    setFilter: setFilterMock,
    Header: 'Horse colors',
    dropdownFilters: [
      roan,
      palomino,
      { name: 'dappled grey', number: 4, value: 7 },
    ],
    getHeaderProps: () => ({ key: 'foo' }),
  },
};

describe('<MultiSelectDropdownFilter />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('renders a list of checkboxes', () => {
    const wrapper = mount(<MultiSelectDropdownFilter {...props} />);
    wrapper.find('button').simulate('click');
    const checkbox = wrapper.find({ type: 'checkbox' }).find('input');
    expect(checkbox.length).toEqual(3);
  });
  it('renders a title', () => {
    const wrapper = mount(<MultiSelectDropdownFilter {...props} />);
    expect(wrapper.text()).toContain(props.column.Header.toLowerCase());
  });
  it('sets a filter - no initial filters', () => {
    const wrapper = mount(<MultiSelectDropdownFilter {...props} />);
    wrapper.find('button').simulate('click');
    const checkbox = wrapper.find({ type: 'checkbox' }).find('input').at(1);
    checkbox.simulate('change');
    expect(setFilterMock).toHaveBeenCalledWith([palomino.value]);
  });
  it('sets a filter - initial filters', () => {
    const wrapper = mount(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    wrapper.find('button').simulate('click');
    const checkbox = wrapper.find({ type: 'checkbox' }).find('input').at(1);
    checkbox.simulate('change');
    expect(setFilterMock).toHaveBeenCalledWith([roan.value, palomino.value]);
  });
  it('removes a filter', () => {
    const wrapper = mount(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [palomino.value] }} />);
    wrapper.find('button').simulate('click');
    const checkbox = wrapper.find({ type: 'checkbox' }).find('input').at(1);
    checkbox.simulate('change');
    expect(setFilterMock).toHaveBeenCalledWith([]);
  });
  it('renders checkbox label with filter name', () => {
    const wrapper = mount(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    wrapper.find('button').simulate('click');
    const label = wrapper.find('.form-check-label').at(0);
    expect(label.text()).toContain(roan.name);
  });
  it('renders checkbox label with number', () => {
    const wrapper = mount(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    wrapper.find('button').simulate('click');
    const label = wrapper.find('.pgn__checkbox-filter').at(0);
    const badge = label.find(Badge);
    expect(badge).toHaveLength(1);
    expect(badge.text()).toEqual(String(roan.number));
  });
  it('renders checkbox label with number', () => {
    const wrapper = mount(<MultiSelectDropdownFilter column={{ ...props.column, filterValue: [roan.value] }} />);
    wrapper.find('button').simulate('click');
    const label = wrapper.find('.pgn__checkbox-filter').at(1);
    const badge = label.find(Badge);
    expect(badge).toHaveLength(0);
  });
});
