import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Tabs from './index';
import Tab from './Tab';

describe('<Tabs />', () => {
  describe('correct rendering', () => {
    it('renders successfully', () => {
      const tree = renderer.create((
        <Tabs>
          <Tab title="Tab 1" />
          <Tab title="Tab 2" />
        </Tabs>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders notification property', () => {
      const wrapper = mount((
        <Tabs>
          <Tab title="Tab 1" notification={4} />
          <Tab title="Tab 2" />
        </Tabs>
      ));
      expect(wrapper.find('.pgn__tab-notification').length).toBeGreaterThan(0);
    });
  });
});
