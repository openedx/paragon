import React from 'react';
import { mount } from 'enzyme';

import TablePagination from '../TablePagination';
import SelectionState from '../SelectionState';

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
  // it('disables the previous button when it can\'t be clicked', () => {
  //   const wrapper = mount(<TablePagination {...props} canPreviousPage={false} />);
  //   // const prevButton = wrapper.find
  // });
  // it('disables the next button when it can\'t be clicked', () => {
  //   const wrapper = mount(<TablePagination {...props} />);
  // });
  it('calls canNextPage when next is clicked', () => {

  });
  it('calls canPreviousPage when previous is clicked', () => {

  });
});
