import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import IndeterminateCheckbox from '../../IndeterminateCheckBox';
import ControlledSelectWithContext from '../ControlledSelectWithContext';
import DataTableContextProvider from '../../DataTableContextProvider';

// eslint-disable-next-line react/prop-types
const ControlledSelectWithContextWrapper = ({ value, props = {} }) => (
  <DataTableContextProvider value={value}><ControlledSelectWithContext {...props} /></DataTableContextProvider>
);

describe('<ControlledSelectWithContext />', () => {
  it('correctly toggles checked prop when checkbox is changed', () => {
    const row = { id: 1 };
    const value = {
      itemCount: 2,
    };
    const props = { row };
    const wrapper = mount(<ControlledSelectWithContextWrapper value={value} props={props} />);

    // select the row checkbox
    act(() => {
      wrapper.find(IndeterminateCheckbox).simulate('change', { target: { checked: true } });
    });
    wrapper.update();

    let isChecked = wrapper.find(IndeterminateCheckbox).prop('checked');
    expect(isChecked).toEqual(true);

    // unselect the row checkbox
    act(() => {
      wrapper.find(IndeterminateCheckbox).simulate('change', { target: { checked: false } });
    });
    wrapper.update();

    isChecked = wrapper.find(IndeterminateCheckbox).prop('checked');
    expect(isChecked).toEqual(false);
  });
});
