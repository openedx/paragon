import React from 'react';
import { mount } from 'enzyme';

import TableRow from '../TableRow';
import DataTableContext from '../DataTableContext';

const props = {
  id: '1',
  getRowProps: () => ({ className: 'red' }),
  cells: [
    {
      column: {
        Header: 'Name',
      },
      getCellProps: () => ({}),
      render: () => 'Fido',
    },
    {
      column: {
        Header: 'Favorite food',
      },
      getCellProps: () => ({}),
      render: () => 'Bones',
    },
  ],
  values: {
    name: 'Fido',
    favorite_food: 'Bones',
  },
};

const contextValue = {
  /* eslint-disable-next-line react/prop-types */
  renderRowSubComponent: ({ row }) => <div>{row.values.name}</div>,
  visibleColumns: [...props.cells],
};

/* eslint-disable-next-line react/prop-types */
function TableRowWrapper({ value, row }) {
  return (
    <DataTableContext.Provider value={value}>
      <table><tbody><TableRow row={row} /></tbody></table>
    </DataTableContext.Provider>
  );
}

describe('<TableRow />', () => {
  const wrapper = mount(<TableRowWrapper value={contextValue} row={props} />);
  it('renders a table row', () => {
    const row = wrapper.find('tr');
    expect(row.length).toEqual(1);
  });
  it('adds props to the row', () => {
    const row = wrapper.find('tr');
    expect(row.props().className).toEqual('red');
  });
  it('renders cells', () => {
    const cells = wrapper.find('td');
    expect(cells.length).toEqual(2);
    expect(wrapper.text()).toContain('Fido');
    expect(wrapper.text()).toContain('Bones');
  });
  it('renders subcomponent if row is in expanded state and has a renderRowSubComponent function defined', () => {
    const tableWrapper = mount(<TableRowWrapper value={contextValue} row={{ ...props, isExpanded: true }} />);
    const rows = tableWrapper.find('tr');
    expect(rows.length).toEqual(2);
    const subcomponentWrapper = rows.at(1);
    expect(subcomponentWrapper.find('div').exists()).toEqual(true);
    expect(subcomponentWrapper.text()).toContain('Fido');
    expect(subcomponentWrapper.find('td').props().colSpan).toEqual(2);
  });
  it('does not render subcomponent if row is in expanded state and does not have renderRowSubComponent function defined', () => {
    const tableWrapper = mount(<TableRowWrapper value={{}} row={{ ...props, isExpanded: true }} />);
    const rows = tableWrapper.find('tr');
    expect(rows.length).toEqual(1);
    expect(tableWrapper.find('div').exists()).toEqual(false);
  });
});
