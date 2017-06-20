import React from 'react';
import {shallow, mount} from 'enzyme';
import CheckBox from '../src/CheckBox';

test('aria-label changes after click', () => {
  const wrapper = shallow(
    <CheckBox name="checkbox" descibedBy="checkbox"
      label="check me out!" checked="false" />
    );

    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);
    wrapper.find('input').simulate('click');
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(false);
    expect(wrapper.find('[aria-checked=true]').exists()).toEqual(true);
});
