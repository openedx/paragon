import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '.';

describe('Spinner', () => {
  it('should render a spinner', () => {
    const wrapper = shallow(<Spinner animation="border" />);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should render a spinner with screen reader text', () => {
    const wrapper = shallow(<Spinner animation="border" screenReaderText="loading" />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
