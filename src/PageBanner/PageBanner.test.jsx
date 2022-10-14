import React from 'react';
import { mount } from 'enzyme';

import PageBanner from './index';

describe('<PageBanner />', () => {
  describe('correct rendering', () => {
    it('renders with correct class for default variant (accentA)', () => {
      const wrapper = mount(<PageBanner />);
      const pageBanner = wrapper.find('.pgn__pageBanner-component');
      expect(pageBanner.hasClass('pgn__pageBanner__accentA')).toEqual(true);
    });
    it('renders with correct class for default variant (accentB)', () => {
      const wrapper = mount(<PageBanner variant="accentB" />);
      const pageBanner = wrapper.find('.pgn__pageBanner-component');
      expect(pageBanner.hasClass('pgn__pageBanner__accentB')).toEqual(true);
    });
    it('renders with correct class for variant warning', () => {
      const wrapper = mount(<PageBanner variant="warning" />);
      const pageBanner = wrapper.find('.pgn__pageBanner-component');
      expect(pageBanner.hasClass('pgn__pageBanner__warning')).toEqual(true);
    });
    it('renders with correct class for variant dark', () => {
      const wrapper = mount(<PageBanner variant="dark" />);
      const pageBanner = wrapper.find('.pgn__pageBanner-component');
      expect(pageBanner.hasClass('pgn__pageBanner__dark')).toEqual(true);
    });
    it('renders with correct class for variant light', () => {
      const wrapper = mount(<PageBanner variant="light" />);
      const pageBanner = wrapper.find('.pgn__pageBanner-component');
      expect(pageBanner.hasClass('pgn__pageBanner__light')).toEqual(true);
    });
    it('does not render page banner when show is false', () => {
      const wrapper = mount(<PageBanner show={false} />);
      const pageBanner = wrapper.find('.pgn__pageBanner-component');
      expect(pageBanner).toHaveLength(0);
    });
    it('passes the alt text to the dismiss button aria-label', () => {
      const wrapper = mount(<PageBanner dismissible dismissAltText="Test dismiss alt text" onDismiss={() => {}} />);
      const dismissButton = wrapper.find('.pgn__pageBanner-dismissButtonContainer button.btn-icon');
      expect(dismissButton.prop('aria-label')).toEqual('Test dismiss alt text');
    });
  });

  describe('onDismiss', () => {
    it('performs the onDismiss action on click', () => {
      const spy = jest.fn();
      const wrapper = mount(<PageBanner dismissible onDismiss={spy} />);
      expect(spy).toHaveBeenCalledTimes(0);
      const dismissButton = wrapper.find('.pgn__pageBanner-dismissButtonContainer button.btn-icon');
      dismissButton.simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
