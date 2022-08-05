import React from 'react';
import { mount } from 'enzyme';

import Tooltip from './index';

describe('<Tootltip />', () => {
  describe('correct rendering', () => {
    it('renders with correct class when variant is added', () => {
      const wrapper = mount(<Tooltip id="tooltip" variant="light" />);
      const tooltip = wrapper.find('.tooltip');
      expect(tooltip.hasClass('tooltip-light')).toEqual(true);
    });
  });
});
