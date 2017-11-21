/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './index';

const props = {
  labels: [
    'first',
    'second',
    'third',
  ],
  children: [
    <div>first</div>,
    <div>second</div>,
    <div>third</div>,
  ],
};

const tabSelectedAtIndex = (index, wrapper) => {
  wrapper.find('a').forEach((node, i) => {
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
      wrapper.find('a').forEach((node, i) => {
        node.simulate('click');
        tabSelectedAtIndex(i, wrapper);
      });
    });
  });
});
