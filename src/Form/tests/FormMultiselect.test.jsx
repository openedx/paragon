import React from 'react';
import { mount } from 'enzyme';
import FormMultiselect from '../FormMultiselect';

describe('FormMultiselect renders correctly', () => {
  it('renders as just a div With empty usage', () => {
    const wrapper = mount(<FormMultiselect />);
    expect(wrapper.find('div').exists()).toEqual(true);
  });
});
