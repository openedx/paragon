import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import IndeterminateCheckbox from '../../IndeterminateCheckBox';
import ControlledSelectWithContextHeader from '../ControlledSelectWithContextHeader';
import DataTableContextProvider from '../../DataTableContextProvider';

// eslint-disable-next-line react/prop-types
const ControlledSelectWithContextHeaderWrapper = ({ value, props = {} }) => (
  <DataTableContextProvider value={value}><ControlledSelectWithContextHeader {...props} /></DataTableContextProvider>
);

describe('<ControlledSelectWithContextHeader />', () => {
  it('correctly toggles checked prop when checkbox is changed', () => {
    const rows = [{ id: 1 }, { id: 2 }];
    const value = {
      itemCount: 2,
    };
    const props = { rows };
    const wrapper = mount(<ControlledSelectWithContextHeaderWrapper value={value} props={props} />);

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
    const value = {
      itemCount: 2,
      controlledTableSelections: [
        { selectedRows: [{ id: 1 }], isEntireTableSelected: false },
        jest.fn(),
      ],
    };
    const props = { rows };
    const wrapper = mount(<ControlledSelectWithContextHeaderWrapper value={value} props={props} />);
    const isIndeterminate = wrapper.find(IndeterminateCheckbox).prop('indeterminate');
    expect(isIndeterminate).toEqual(true);
  });
});
