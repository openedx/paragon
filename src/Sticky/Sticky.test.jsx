import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Sticky from './index';

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('<Sticky />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <Sticky>Sticky</Sticky>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with top positioning', () => {
      const wrapper = mount(<Sticky>content</Sticky>);
      const sticky = wrapper.find('.pgn__sticky');
      expect(sticky.hasClass('pgn__sticky-top')).toEqual(true);
      wrapper.setProps({ position: 'top' });
      expect(sticky.hasClass('pgn__sticky-top')).toEqual(true);
    });
    it('renders with bottom positioning', () => {
      const wrapper = mount(<Sticky position="bottom">content</Sticky>);
      const sticky = wrapper.find('.pgn__sticky');
      expect(sticky.hasClass('pgn__sticky-bottom')).toEqual(true);
    });
    it('renders with offset', () => {
      const offset = 3;
      const wrapper = mount(<Sticky offset={offset}>content</Sticky>);
      const sticky = wrapper.find('.pgn__sticky');
      expect(sticky.hasClass(`pgn__sticky-offset--${offset}`)).toEqual(true);
    });
    it('observer is initialized during render and detached during unmount', () => {
      const wrapper = mount(<Sticky>content</Sticky>);
      expect(observe).toHaveBeenCalled();
      wrapper.unmount();
      expect(unobserve).toHaveBeenCalled();
    });
  });
});
