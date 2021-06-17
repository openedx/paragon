import React, { useContext } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import DataTableContextProvider from '../DataTableContextProvider';
import DataTableContext from '../DataTableContext';

import { addSelectedRowAction } from '../selection/data/actions';

const DataTableContextChild = () => {
  const value = useContext(DataTableContext);
  return <div data-contextvalue={value} />;
};

describe('<DataTableContextProvider />', () => {
  it('passes initial value through to context', () => {
    const value = { fake: true };
    const wrapper = mount(<DataTableContextProvider value={value}><DataTableContextChild /></DataTableContextProvider>);
    const actualValue = wrapper.find('div').prop('data-contextvalue');
    const dispatch = actualValue.controlledTableSelections[1];
    const expectedValue = {
      ...value,
      controlledTableSelections: [
        { selectedRows: [], isEntireTableSelected: false },
        dispatch,
      ],
    };
    expect(actualValue).toEqual(expectedValue);
  });
  it('passes controlled table selections to selectedFlatRows', () => {
    const value = { fake: true };
    const wrapper = mount(<DataTableContextProvider value={value}><DataTableContextChild /></DataTableContextProvider>);

    let actualValue;
    actualValue = wrapper.find('div').prop('data-contextvalue');
    const dispatch = actualValue.controlledTableSelections[1];

    const rowToSelect = { id: 1 };
    const itemCount = 1;
    act(() => {
      dispatch(addSelectedRowAction(rowToSelect, itemCount));
    });

    wrapper.update();

    actualValue = wrapper.find('div').prop('data-contextvalue');
    const expectedValue = {
      ...value,
      controlledTableSelections: [
        {
          selectedRows: [rowToSelect],
          isEntireTableSelected: true,
        },
        dispatch,
      ],
      selectedFlatRows: [rowToSelect],
    };
    expect(actualValue).toEqual(expectedValue);
  });
});
