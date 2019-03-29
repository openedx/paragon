import React from 'react';
import { mount } from 'enzyme';

import Container from './index';


describe('correct rendering', () => {
  it('renders Container', () => {
    const wrapper = mount(<Container />).find('.container');
    expect(wrapper).toHaveLength(1);
  });

  it('renders fluid Container', () => {
    const wrapper = mount(<Container fluid />).find('.container-fluid');

    expect(wrapper).toHaveLength(1);
  });
});
