import React from 'react';
import { mount } from 'enzyme';

import Popover from './index';

describe('<Popover />', () => {
  describe('correct rendering', () => {
    it('renders with correct class for variant success', () => {
      const wrapper = mount(<Popover id="popover-id" variant="success" />);
      const popover = wrapper.find('.popover');
      expect(popover.hasClass('popover-success')).toEqual(true);
    });
    it('renders with correct class for variant warning', () => {
      const wrapper = mount(<Popover id="popover-id" variant="warning" />);
      const popover = wrapper.find('.popover');
      expect(popover.hasClass('popover-warning')).toEqual(true);
    });
    it('renders with correct class for variant danger', () => {
      const wrapper = mount(<Popover id="popover-id" variant="danger" />);
      const popover = wrapper.find('.popover');
      expect(popover.hasClass('popover-danger')).toEqual(true);
    });
  });
});
