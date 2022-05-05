import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Bubble from './index';

describe('<Bubble />', () => {
  describe('correct rendering', () => {
    it('successfully renders', () => {
      const tree = renderer.create(<Bubble>1</Bubble>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with variant', () => {
      const wrapper = mount(<Bubble variant="error">1</Bubble>);
      const bubble = wrapper.find('.pgn__bubble');
      expect(bubble.hasClass('pgn__bubble-error')).toEqual(true);
    });
    it('renders with default variant', () => {
      const wrapper = mount(<Bubble>1</Bubble>);
      const bubble = wrapper.find('.pgn__bubble');
      expect(bubble.hasClass('pgn__bubble-primary')).toEqual(true);
    });
    it('renders with disabled variant', () => {
      const wrapper = mount(<Bubble disabled>1</Bubble>);
      const bubble = wrapper.find('.pgn__bubble');
      expect(bubble.hasClass('disabled')).toEqual(true);
    });
  });
});
