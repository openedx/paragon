import React from 'react';
import { mount } from 'enzyme';

import TablePagination from '../TablePagination';
import SelectionState from '../SelectionStatus';
import { Button } from '../..';
import DataTableContext from '../TableContext';

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
  <DataTableContext.Provider value={value}><TablePagination /></DataTableContext.Provider>);

describe('<TablePagination />', () => {
  it('returns null if pagination is not possible', () => {
    const wrapper = mount(<PaginationWrapper value={{}} />);
    expect(wrapper).toEqual({});
  });
  it('Shows the page count', () => {
    const wrapper = mount(<PaginationWrapper value={instance} />);
    expect(wrapper.text(SelectionState)).toContain(`Page ${instance.state.pageIndex + 1} of ${instance.pageCount}`);
  });
  it('disables the previous button when it can\'t be clicked', () => {
    const wrapper = mount(<PaginationWrapper value={{ ...instance, canPreviousPage: false }} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(0);
    expect(prevButton.props().disabled).toEqual(true);
    const nextButton = buttons.at(1);
    expect(nextButton.props().disabled).toEqual(false);
  });
  it('disables the next button when it can\'t be clicked', () => {
    const wrapper = mount(<PaginationWrapper value={{ ...instance, canNextPage: false }} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(0);
    expect(prevButton.props().disabled).toEqual(false);
    const nextButton = wrapper.find(Button).at(1);
    expect(nextButton.props().disabled).toEqual(true);
  });
  it('calls canNextPage when next is clicked', () => {
    const nextSpy = jest.fn();
    const wrapper = mount(<PaginationWrapper value={{ ...instance, nextPage: nextSpy }} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(1);
    prevButton.simulate('click');
    expect(nextSpy).toHaveBeenCalledTimes(1);
  });
  it('calls canPreviousPage when previous is clicked', () => {
    const prevSpy = jest.fn();
    const wrapper = mount(<PaginationWrapper value={{ ...instance, previousPage: prevSpy }} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(0);
    prevButton.simulate('click');
    expect(prevSpy).toHaveBeenCalledTimes(1);
  });
});
