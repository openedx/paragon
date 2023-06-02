import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Tabs, { MORE_TAB_TEXT } from './index';
import Tab from './Tab';

jest.mock('../hooks/useIndexOfLastVisibleChild', () => ({
  __esModule: true,
  default: () => 0,
}));

let getAttributeValue = 'true';

const disconnect = jest.fn();
const observeMutation = jest.fn((callback) => callback([{
  target: {
    getAttribute: () => getAttributeValue,
  },
}]));
const observeResize = jest.fn();
const unobserve = jest.fn();

window.MutationObserver = jest.fn((callback) => ({
  disconnect,
  observe: () => observeMutation(callback),
  unobserve,
}));

window.ResizeObserver = jest.fn(() => ({
  disconnect,
  observe: observeResize,
  unobserve,
}));

function TabsTestComponent(props) {
  return (
    <Tabs {...props} defaultActiveKey="tab_1">
      <Tab title="Tab 1" notification={4} eventKey="tab_1" />
      <Tab title="Tab 2" eventKey="tab_2" />
      <Tab title="Tab 3" eventKey="tab_3" />
    </Tabs>
  );
}

describe('<Tabs />', () => {
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
    observeMutation.mockClear();
  });

  describe('correct rendering', () => {
    it('renders successfully', () => {
      const tree = renderer.create(<TabsTestComponent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders notification property', () => {
      const wrapper = mount(<TabsTestComponent />);
      expect(wrapper.find('.pgn__tab-notification').length).toBeGreaterThan(0);
    });
    it('MutationObserver is initialized', () => {
      mount(<TabsTestComponent />);
      expect(observeMutation).toHaveBeenCalledTimes(1);
      getAttributeValue = 'false';
      mount(<TabsTestComponent />);
      expect(observeMutation).toHaveBeenCalledTimes(2);
    });
    it('dropdown menu is displayed', () => {
      const wrapper = mount(<TabsTestComponent />);
      expect(wrapper.find('.pgn__tab_more').at(0).hasClass('pgn__tab_invisible')).toBe(false);
    });
    it('moreTabText is displayed', () => {
      const text = 'Mehr...';
      const wrapper = mount(<TabsTestComponent />);
      expect(wrapper.find('#pgn__tab-toggle').at(0).text()).toEqual(MORE_TAB_TEXT);
      wrapper.setProps({ moreTabText: text });
      expect(wrapper.find('#pgn__tab-toggle').at(0).text()).toEqual(text);
    });
    it('click on the dropdown item activates tab', () => {
      const wrapper = mount(<TabsTestComponent />);
      wrapper.find('#pgn__tab-toggle').at(0).simulate('click');
      wrapper.find('.dropdown-item').at(0).simulate('click');
      expect(wrapper.find('[data-rb-event-key="tab_2"]').at(0).hasClass('active')).toEqual(true);
    });
    it('select dropdown item after pressing Enter', () => {
      const wrapper = mount(<TabsTestComponent />);
      wrapper.find('#pgn__tab-toggle').at(0).at(0).simulate('click');
      wrapper.find('.dropdown-item').at(0).simulate('keyPress', { key: 'Enter' });
      expect(wrapper.find('[data-rb-event-key="tab_2"]').at(0).hasClass('active')).toEqual(true);
    });
    it('invalid child does not render', () => {
      const wrapper = mount((
        <Tabs>
          {[false, undefined]}
        </Tabs>
      ));
      expect(wrapper.find('nav').children().length).toEqual(1);
    });
  });
});
