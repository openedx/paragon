import React from 'react';
import { mount } from 'enzyme';

import { Container, Row, Col } from './index';


describe('correct rendering', () => {
  it('renders Container', () => {
    const wrapper = mount(<Container />).find('.container');
    expect(wrapper).toHaveLength(1);
  });
  it('renders Row', () => {
    const wrapper = mount(<Row />).find('.row');
    expect(wrapper).toHaveLength(1);
  });
  it('renders Column', () => {
    const wrapper = mount(<Col />).find('.col');
    expect(wrapper).toHaveLength(1);
  });
});
