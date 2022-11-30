import React from 'react';
import { mount } from 'enzyme';
import TableFooter from '../TableFooter';
import RowStatus from '../RowStatus';
import TablePagination from '../TablePagination';
import DataTableContext from '../DataTableContext';

const footerInstance = {
  previousPage: () => {},
  nextPage: () => {},
  canPreviousPage: true,
  canNextPage: true,
  state: { pageIndex: 1 },
  pageCount: 3,
  itemCount: 30,
  RowStatusComponent: undefined,
};

// eslint-disable-next-line react/prop-types
function TableFooterWrapper({ value = footerInstance, props = {}, children }) {
  return (
    <DataTableContext.Provider value={value}>
      <TableFooter {...props}>{children}</TableFooter>
    </DataTableContext.Provider>
  );
}

describe('<TableFooter />', () => {
  it('Renders the default footer', () => {
    const wrapper = mount(<TableFooterWrapper />);
    expect(wrapper.find(RowStatus)).toHaveLength(1);
    expect(wrapper.find(TablePagination)).toHaveLength(1);
  });
  it('accepts a class name', () => {
    const fakeClass = 'fancy-class';
    const wrapper = mount(<TableFooterWrapper props={{ className: fakeClass }} />);
    expect(wrapper.find(TableFooter).props().className).toContain(fakeClass);
  });
  it('renders a children', () => {
    const leftText = "I'm on the left";
    const wrapper = mount(<TableFooterWrapper><div>{leftText}</div></TableFooterWrapper>);
    expect(wrapper.text()).toContain(leftText);
  });
  it('uses custom RowStatus component, if provided', () => {
    const dataTableContextValue = {
      ...footerInstance,
      RowStatusComponent: () => <p>Hello world</p>,
    };
    const wrapper = mount(<TableFooterWrapper value={dataTableContextValue} />);
    expect(wrapper.text()).toContain('Hello world');
  });
});
