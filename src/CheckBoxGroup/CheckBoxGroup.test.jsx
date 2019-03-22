/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import CheckBoxGroup from './index';
import CheckBox from '../CheckBox';

describe('<CheckBoxGroup />', () => {
  it('correct number of children displayed in group', () => {
    const checkBoxGroup = (
      <CheckBoxGroup>
        <CheckBox
          id="checkbox1"
          name="basicCheckBox"
          label="CheckBox 1"
        />
        <CheckBox
          id="checkbox2"
          name="basicCheckBox"
          label="CheckBox 2"
        />
        <CheckBox
          id="checkbox3"
          name="basicCheckBox"
          label="CheckBox 3"
        />
      </CheckBoxGroup>
    );
    const wrapper = mount(checkBoxGroup);

    expect(wrapper.find('[id="checkbox1"]').exists()).toEqual(true);
    expect(wrapper.find('[id="checkbox2"]').exists()).toEqual(true);
    expect(wrapper.find('[id="checkbox3"]').exists()).toEqual(true);
  });
});
