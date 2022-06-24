import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { Close } from '../../icons';
import Chip from './index';

describe('<Chip />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <Chip>Chip</Chip>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with correct class when variant is added', () => {
      const wrapper = mount(<Chip variant="dark" />);
      const chip = wrapper.find('.pgn__chip');
      expect(chip.hasClass('pgn__chip-dark')).toEqual(true);
    });
    it('renders with props iconBefore', () => {
      const tree = renderer.create((
        <Chip iconBefore={Close}>Chip</Chip>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconAfter', () => {
      const tree = renderer.create((
        <Chip iconAfter={Close}>Chip</Chip>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconBefore and iconAfter', () => {
      const tree = renderer.create((
        <Chip iconBefore={Close} iconAfter={Close}>Chip</Chip>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with active class when active prop is added', () => {
      const wrapper = mount(<Chip active />);
      const chip = wrapper.find('.pgn__chip');
      expect(chip.hasClass('active')).toEqual(true);
    });
    it('renders as the button tag', () => {
      const wrapper = mount(<Chip />);
      const wrapperButton = mount(<Chip as="button" />);
      const chipDefault = wrapper.find('.pgn__chip');
      const chipAsButton = wrapperButton.find('.pgn__chip');
      expect(chipDefault.type()).toEqual('button');
      expect(chipAsButton.type()).toEqual('button');
    });
    it('renders as the anchor tag', () => {
      const wrapperHref = mount(<Chip href="#" />);
      const wrapperA = mount(<Chip as="a" />);
      const chipWithHref = wrapperHref.find('.pgn__chip');
      const chipAsA = wrapperA.find('.pgn__chip');
      expect(chipWithHref.type()).toEqual('a');
      expect(chipAsA.type()).toEqual('a');
    });
  });
});
