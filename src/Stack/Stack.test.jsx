import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Stack from './index';

describe('<Stack />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <Stack>content</Stack>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with the vertical direction', () => {
      const wrapper = mount(<Stack>Content</Stack>);
      expect(wrapper.find('.pgn__vstack').length).toBeGreaterThan(0);
      wrapper.setProps({ direction: 'vertical' });
      expect(wrapper.find('.pgn__vstack').length).toBeGreaterThan(0);
    });
    it('renders with the horizontal direction', () => {
      const wrapper = mount(<Stack direction="horizontal">Content</Stack>);
      expect(wrapper.find('.pgn__hstack').length).toBeGreaterThan(0);
    });
    it('renders with the correct gap', () => {
      const gap = 3;
      const wrapper = mount(<Stack gap={gap}>Content</Stack>);
      expect(wrapper.find('.pgn__vstack').hasClass(`pgn__stack-gap--${gap}`)).toEqual(true);
    });
    it('renders reversed children with the vertical direction', () => {
      const wrapper = mount(<Stack reversed>Content</Stack>);
      expect(wrapper.find('.pgn__vstack').hasClass('pgn__stack-reversed')).toEqual(true);
    });
    it('renders reversed children with the horizontal direction', () => {
      const wrapper = mount(<Stack direction="horizontal" reversed>Content</Stack>);
      expect(wrapper.find('.pgn__hstack').hasClass('pgn__stack-reversed')).toEqual(true);
    });
    it('renders with the className prop', () => {
      const className = 'className';
      const wrapper = mount(<Stack className={className}>Content</Stack>);
      expect(wrapper.find('.pgn__vstack').hasClass('className')).toEqual(true);
    });
  });
});
