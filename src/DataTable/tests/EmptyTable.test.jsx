import React from 'react';
import { mount } from 'enzyme';

import EmptyTableContent from '../EmptyTable';
import DataTableContext from '../DataTableContext';

const props = {
  className: 'foo',
  content: 'Nothing here',
};

describe('<EmptyTableContent />', () => {
  const wrapper = mount(
    <DataTableContext.Provider value={{ rows: [] }}>
      <EmptyTableContent {...props} />
    </DataTableContext.Provider>,
  );
  it('displays the content', () => {
    expect(wrapper.text()).toEqual(props.content);
  });
  it('adds props to the div', () => {
    const cell = wrapper.find('div');
    expect(cell.props().className).toEqual(`pgn__data-table-empty ${props.className}`);
  });
  it('does not display if there are rows', () => {
    const nonEmptyWrapper = mount(
      <DataTableContext.Provider value={{ rows: Array(1) }}>
        <EmptyTableContent {...props} />
      </DataTableContext.Provider>,
    );
    expect(nonEmptyWrapper.text()).toEqual('');
  });
  it('does not display if the table data is loading', () => {
    const loadingWrapper = mount(
      <DataTableContext.Provider value={{ isLoading: true }}>
        <EmptyTableContent {...props} />
      </DataTableContext.Provider>,
    );
    expect(loadingWrapper.text()).toEqual('');
  });
});
