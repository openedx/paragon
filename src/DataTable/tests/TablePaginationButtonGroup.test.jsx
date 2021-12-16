import React from 'react';
import { mount } from 'enzyme';

import TablePaginationButtonGroup from '../TablePaginationButtonGroup';
import { IconButton } from '../..';
import DataTableContext from '../DataTableContext';

const instance = {
  previousPage: () => {},
  nextPage: () => {},
  canPreviousPage: true,
  canNextPage: true,
  state: { pageIndex: 1 },
  pageCount: 3,
};

// eslint-disable-next-line react/prop-types
const PaginationWrapper = ({ value }) => (
  <DataTableContext.Provider value={value}><TablePaginationButtonGroup /></DataTableContext.Provider>);

describe('<TablePaginationButtonGroup />', () => {
  it('returns null if pagination is not possible', () => {
    const wrapper = mount(<PaginationWrapper value={{}} />);
    expect(wrapper.text()).toEqual('');
  });
  it('disables the previous button when it can\'t be clicked', () => {
    const wrapper = mount(<PaginationWrapper value={{ ...instance, canPreviousPage: false }} />);
    const iconButtons = wrapper.find(IconButton);
    const prevButton = iconButtons.at(0);
    expect(prevButton.props().disabled).toEqual(true);
    const nextButton = iconButtons.at(1);
    expect(nextButton.props().disabled).toEqual(false);
  });
  it('disables the next button when it can\'t be clicked', () => {
    const wrapper = mount(<PaginationWrapper value={{ ...instance, canNextPage: false }} />);
    const iconButtons = wrapper.find(IconButton);
    const prevButton = iconButtons.at(0);
    expect(prevButton.props().disabled).toEqual(false);
    const nextButton = iconButtons.at(1);
    expect(nextButton.props().disabled).toEqual(true);
  });
  it('calls canNextPage when next is clicked', () => {
    const nextSpy = jest.fn();
    const wrapper = mount(<PaginationWrapper value={{ ...instance, nextPage: nextSpy }} />);
    const iconButtons = wrapper.find(IconButton);
    const nextButton = iconButtons.at(1);
    nextButton.simulate('click');
    expect(nextSpy).toHaveBeenCalledTimes(1);
  });
  it('calls canPreviousPage when previous is clicked', () => {
    const prevSpy = jest.fn();
    const wrapper = mount(<PaginationWrapper value={{ ...instance, previousPage: prevSpy }} />);
    const buttons = wrapper.find(IconButton);
    const prevButton = buttons.at(0);
    prevButton.simulate('click');
    expect(prevSpy).toHaveBeenCalledTimes(1);
  });
});
