import React from 'react';
import { mount } from 'enzyme';

import DataTable from '..';

import TableControlBar from '../TableControlBar';
import EmptyTable from '../EmptyTableContent';
import Table from '../Table';
import TableFooter from '../TableFooter';

const props = {
  data: [
    {
      name: 'Lil Bub',
      color: 'brown tabby',
      famous_for: 'weird tongue',
    },
    {
      name: 'Grumpy Cat',
      color: 'siamese',
      famous_for: 'serving moods',
    },
    {
      name: 'Smoothie',
      color: 'orange tabby',
      famous_for: 'modeling',
    },
    {
      name: 'Maru',
      color: 'brown tabby',
      famous_for: 'being a lovable oaf',
    },
    {
      name: 'Keyboard Cat',
      color: 'orange tabby',
      famous_for: 'piano virtuoso',
    },
    {
      name: 'Long Cat',
      color: 'russian white',
      famous_for:
        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
    },
    {
      name: 'Zeno',
      color: 'brown tabby',
      famous_for: 'getting halfway there'
    },
  ],
  columns: [
    {
      Header: 'Name',
      accessor: 'name',

    },
    {
      Header: 'Famous For',
      accessor: 'famous_for',
    },
    {
      Header: 'Coat Color',
      accessor: 'color',
    },
  ],
  itemCount: 7,
};

const emptyTestText = 'We love bears';
const EmptyTest = () => <div>{emptyTestText}</div>;

describe('<DataTable />', () => {
  it('displays the empty table component if empty', () => {
    const wrapper = mount(<DataTable {...props} data={[]} />);
    expect(wrapper.find(EmptyTable).length).toEqual(1);
  });
  it('accepts an empty table component', () => {
    const wrapper = mount(<DataTable {...props} data={[]} EmptyTableComponent={EmptyTest} />);
    expect(wrapper.find(EmptyTable).length).toEqual(0);
    expect(wrapper.find(EmptyTest).length).toEqual(1);
  });
  it('displays a control bar', () => {
    const wrapper = mount(<DataTable {...props} />);
    const controlBar = wrapper.find(TableControlBar);
    expect(controlBar.length).toEqual(1);
    expect(controlBar.text()).toEqual('Showing 7 of 7');
  });
  it('passes the correct default props to the control bar', () => {
    const wrapper = mount(<DataTable {...props} />);
    const controlBarProps = wrapper.find(TableControlBar).props();
    expect(controlBarProps.isFilterable).toEqual(DataTable.defaultProps.isFilterable);
    expect(controlBarProps.isSelectable).toEqual(DataTable.defaultProps.isSelectable);
  });
  it('displays a table', () => {
    const wrapper = mount(<DataTable {...props} />);
    const table = wrapper.find(Table);
    expect(table.length).toEqual(1);
    expect(table.find('th').length).toEqual(3);
    expect(table.find('tr').length).toEqual(8);
  });
  it('displays a table footer', () => {
    const wrapper = mount(<DataTable {...props} />);
    expect(wrapper.find(TableFooter).length).toEqual(1);
  });
  // TODO: test that useTable is called with the correct arguments
  // TODO: test that fetchData is called correctly
  // TODO: test that isSelectable adds a row
  // TODO: test that additional columns are displayed
});
