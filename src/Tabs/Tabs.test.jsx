import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './index';

const props = {
  tabs: [{
    label: 'First',
    content: 'I am the first',
  }, {
    label: 'Second',
    content: 'I am the second',
  }, {
    label: 'Third',
    content: 'I am the third',
  }],
};

const tabSelectedAtIndex = (index, wrapper) => {
  wrapper.find('button').forEach((node, i) => {
    expect(node.prop('aria-selected')).toEqual(i === index);
  });

  wrapper.find('.tab-pane').forEach((node, i) => {
    expect(node.hasClass('active')).toEqual(i === index);
  });
};

describe('<Tabs />', () => {
  it('renders with first tab selected', () => {
    const wrapper = shallow(<Tabs {...props} />);
    tabSelectedAtIndex(0, wrapper);
  });

  describe('switches tab selection', () => {
    it('on click', () => {
      const wrapper = shallow(<Tabs {...props} />);
      wrapper.find('button').forEach((node, i) => {
        node.simulate('click');
        tabSelectedAtIndex(i, wrapper);
      });
    });
  });
});
