import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import IndeterminateCheckbox from '../../IndeterminateCheckBox';
import ControlledSelectWithContext from '../ControlledSelectWithContext';
import DataTable from '../..';

// eslint-disable-next-line react/prop-types
const ControlledSelectWithContextWrapper = ({ tableProps, selectProps = {} }) => (
  <DataTable {...tableProps}>
    <ControlledSelectWithContext {...selectProps} />
  </DataTable>
);

describe('<ControlledSelectWithContext />', () => {
  it('correctly toggles checked prop when checkbox is changed', () => {
    const row = { id: 1 };
    const value = {
      columns: [],
      data: [],
      itemCount: 2,
    };
    const props = { row };
    const wrapper = mount(<ControlledSelectWithContextWrapper tableProps={value} selectProps={props} />);

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
