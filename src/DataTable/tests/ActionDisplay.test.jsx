import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../..';
import ActionDisplay from '../ActionDisplay';
import DataTableContext from '../DataTableContext';
import BulkActions from '../BulkActions';
import TableActions from '../TableActions';

const instance = {
  selectedFlatRows: null,
  bulkActions: [],
  tableActions: [],
  controlledTableSelections: [
    {
      selectedRows: [],
      isEntireTableSelected: false,
    },
    jest.fn(),
  ],
};

const firstAction = ({ as }) => React.createElement(
  as || Button,
  {
    key: 'First Action',
    onClick: () => {},
    className: 'class1',
  },
  'First Action',
);

const secondAction = ({ as }) => React.createElement(
  as || Button,
  {
    key: 'Second Action',
    onClick: () => {},
    className: 'class2',
  },
  'Second Action',
);

// eslint-disable-next-line react/prop-types
const ActionDisplayWrapper = ({ value = instance, props = {} }) => (
  <DataTableContext.Provider value={value}><ActionDisplay {...props} /></DataTableContext.Provider>
);

describe('<ActionDisplay />', () => {
  it('renders null if there are no actions', () => {
    const wrapper = mount(<ActionDisplayWrapper />);
    expect(wrapper.find(ActionDisplay).text()).toEqual('');
  });
  it('renders null if there are no rows', () => {
    const wrapper = mount(
      <ActionDisplayWrapper
        value={{
          ...instance, rows: null, tableActions: [firstAction], bulkActions: [secondAction],
        }}
      />,
    );
    const button = wrapper.find(Button);
    expect(button.length).toEqual(0);
  });
  it('displays bulk actions when rows are selected', () => {
    const wrapper = mount(
      <ActionDisplayWrapper
        value={{ ...instance, bulkActions: [firstAction, secondAction], selectedFlatRows: [{}, {}] }}
      />,
    );
    expect(wrapper.find(BulkActions)).toHaveLength(1);
  });
  it('does not display bulk actions when no rows are selected (no table actions)', () => {
    const wrapper = mount(
      <ActionDisplayWrapper
        value={{ ...instance, bulkActions: [firstAction, secondAction], selectedFlatRows: [] }}
      />,
    );
    expect(wrapper.find(ActionDisplay).text()).toEqual('');
  });
  it('displays tableActions', () => {
    const wrapper = mount(
      <ActionDisplayWrapper
        value={{ ...instance, tableActions: [firstAction, secondAction], selectedFlatRows: [] }}
      />,
    );
    expect(wrapper.find(TableActions)).toHaveLength(1);
  });
  it('displays table actions when both bulk actions and table actions are present - no selected rows', () => {
    const wrapper = mount(
      <ActionDisplayWrapper
        value={{
          ...instance,
          bulkActions: [firstAction],
          tableActions: [secondAction],
          selectedFlatRows: [],
        }}
      />,
    );
    expect(wrapper.find(TableActions)).toHaveLength(1);
  });
  it('displays table actions with rows selected and no bulk actions', () => {
    // This is an edge case
    const wrapper = mount(
      <ActionDisplayWrapper
        value={{ ...instance, tableActions: [firstAction, secondAction], selectedFlatRows: [{}, {}] }}
      />,
    );
    expect(wrapper.find(TableActions)).toHaveLength(1);
  });
  it('displays bulk actions instead of table actions when rows are selected', () => {
    const wrapper = mount(
      <ActionDisplayWrapper
        value={{
          ...instance,
          bulkActions: [firstAction],
          tableActions: [secondAction],
          selectedFlatRows: [{}, {}],
        }}
      />,
    );
    expect(wrapper.find(BulkActions)).toHaveLength(1);
  });
});
