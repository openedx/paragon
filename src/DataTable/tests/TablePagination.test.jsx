import React from 'react';
import { mount } from 'enzyme';

import TablePagination from '../TablePagination';
import { Dropdown } from '../..';
import DataTableContext from '../DataTableContext';

const instance = {
  state: { pageIndex: 1 },
  pageCount: 3,
  gotoPage: () => {},
};

// eslint-disable-next-line react/prop-types
function PaginationWrapper({ value }) {
  return <DataTableContext.Provider value={value}><TablePagination /></DataTableContext.Provider>;
}

describe('<TablePagination />', () => {
  it('returns null if pagination is not possible', () => {
    const wrapper = mount(<PaginationWrapper value={{}} />);
    expect(wrapper.text()).toEqual('');
  });
  it('Shows dropdown button with the page count as label and performs actions when dropdown items are clicked', () => {
    const gotoPageSpy = jest.fn();
    const wrapper = mount(<PaginationWrapper value={{ ...instance, gotoPage: gotoPageSpy }} />);
    const dropdown = wrapper.find(Dropdown);
    expect(dropdown.text()).toContain(`${instance.state.pageIndex + 1} of ${instance.pageCount}`);

    const dropdownButton = wrapper.find('button');
    dropdownButton.simulate('click');
    const dropdownChoices = wrapper.find(Dropdown.Item);
    expect(dropdownChoices.length).toEqual(instance.pageCount);

    const secondPageButton = dropdownChoices.at(1);
    secondPageButton.simulate('click');
    expect(gotoPageSpy).toHaveBeenCalledTimes(1);
    expect(gotoPageSpy).toHaveBeenCalledWith(1);
  });
});
