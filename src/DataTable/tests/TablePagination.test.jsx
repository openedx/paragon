import React from 'react';
import { mount } from 'enzyme';

import TablePagination from '../TablePagination';
import SelectionState from '../SelectionState';
import { Button } from '../..';

const props = {
  previousPage: () => {},
  nextPage: () => {},
  canPreviousPage: true,
  canNextPage: true,
  pageIndex: 1,
  pageCount: 3,
};

describe('<TablePagination />', () => {
  it('Shows the page count', () => {
    const wrapper = mount(<TablePagination {...props} />);
    expect(wrapper.text(SelectionState)).toContain(`Page ${props.pageIndex + 1} of ${props.pageCount}`);
  });
  it('disables the previous button when it can\'t be clicked', () => {
    const wrapper = mount(<TablePagination {...props} canPreviousPage={false} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(0);
    expect(prevButton.props().disabled).toEqual(true);
    const nextButton = buttons.at(1);
    expect(nextButton.props().disabled).toEqual(false);
  });
  it('disables the next button when it can\'t be clicked', () => {
    const wrapper = mount(<TablePagination {...props} canNextPage={false} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(0);
    expect(prevButton.props().disabled).toEqual(false);
    const nextButton = wrapper.find(Button).at(1);
    expect(nextButton.props().disabled).toEqual(true);
  });
  it('calls canNextPage when next is clicked', () => {
    const nextSpy = jest.fn();
    const wrapper = mount(<TablePagination {...props} nextPage={nextSpy} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(1);
    prevButton.simulate('click');
    expect(nextSpy).toHaveBeenCalledTimes(1);
  });
  it('calls canPreviousPage when previous is clicked', () => {
    const prevSpy = jest.fn();
    const wrapper = mount(<TablePagination {...props} previousPage={prevSpy} />);
    const buttons = wrapper.find(Button);
    const prevButton = buttons.at(0);
    prevButton.simulate('click');
    expect(prevSpy).toHaveBeenCalledTimes(1);
  });
});
