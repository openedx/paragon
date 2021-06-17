import React, { useContext } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import IndeterminateCheckbox from '../../IndeterminateCheckBox';
import ControlledSelectWithContextHeader from '../ControlledSelectWithContextHeader';
import DataTable from '../..';
import DataTableContext from '../../DataTableContext';
import { addSelectedRowAction } from '../data/actions';

// eslint-disable-next-line react/prop-types
const ControlledSelectWithContextHeaderWrapper = ({ tableProps, selectProps = {} }) => (
  <DataTable {...tableProps}>
    <ControlledSelectWithContextHeader {...selectProps} />
    <DataTableContextChild />
  </DataTable>
);

const DataTableContextChild = () => {
  const contextValue = useContext(DataTableContext);
  return (
    <div className="context-value" data-contextvalue={contextValue} />
  );
};

describe('<ControlledSelectWithContextHeader />', () => {
  it('correctly toggles checked prop when checkbox is changed', () => {
    const rows = [{ id: 1 }, { id: 2 }];
    const tableProps = {
      itemCount: 2,
      data: [],
      columns: [],
    };
    const selectProps = { rows };
    const wrapper = mount(
      <ControlledSelectWithContextHeaderWrapper tableProps={tableProps} selectProps={selectProps} />,
    );

    // select the header checkbox
    act(() => {
      wrapper.find(IndeterminateCheckbox).simulate('change', { target: { checked: true } });
    });
    wrapper.update();

    let isChecked = wrapper.find(IndeterminateCheckbox).prop('checked');
    expect(isChecked).toEqual(true);

    // unselect the header checkbox
    act(() => {
      wrapper.find(IndeterminateCheckbox).simulate('change', { target: { checked: false } });
    });
    wrapper.update();

    isChecked = wrapper.find(IndeterminateCheckbox).prop('checked');
    expect(isChecked).toEqual(false);
  });
  it('correctly toggles indeterminate prop when some page rows (not all) are selected', () => {
    const rows = [{ id: 1 }, { id: 2 }];
    const tableProps = {
      itemCount: 2,
      data: [],
      columns: [],
    };
    const selectProps = { rows };
    const wrapper = mount(
      <ControlledSelectWithContextHeaderWrapper tableProps={tableProps} selectProps={selectProps} />,
    );

    const contextValue = wrapper.find('div.context-value').prop('data-contextvalue');
    const [, selectionsDispatch] = contextValue.controlledTableSelections;
    const selectedRow = { id: 1 };
    const action = addSelectedRowAction(selectedRow, tableProps.itemCount);
    act(() => {
      selectionsDispatch(action);
    });
    wrapper.update();

    const isIndeterminate = wrapper.find(IndeterminateCheckbox).prop('indeterminate');
    expect(isIndeterminate).toEqual(true);
  });
});
