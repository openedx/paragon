import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Chip from './index';

import { Close } from '../../icons';

const TestChip = (props) => (
  <Chip {...props}>
    Test
  </Chip>
);

describe('<Chip />', () => {
  describe('snapshots', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <TestChip />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconBefore', () => {
      const tree = renderer.create((
        <TestChip iconBefore={Close} />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconAfter', () => {
      const tree = renderer.create((
        <TestChip iconAfter={Close} />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconBefore and iconAfter', () => {
      const tree = renderer.create((
        <TestChip iconBefore={Close} iconAfter={Close}>Chip</TestChip>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('correct rendering', () => {
    it('renders with correct class when variant is added', () => {
      const wrapper = mount(<TestChip variant="dark" />);
      const chip = wrapper.find('.pgn__chip');
      expect(chip.hasClass('pgn__chip-dark')).toEqual(true);
    });
    it('renders with active class when disabled prop is added', () => {
      const wrapper = mount(<TestChip disabled />);
      const chip = wrapper.find('.pgn__chip');
      expect(chip.hasClass('disabled')).toEqual(true);
    });
    it('renders with the client\'s className', () => {
      const className = 'testClassName';
      const wrapper = mount(<TestChip className={className} />);
      const chip = wrapper.find('.pgn__chip');
      expect(chip.hasClass(className)).toEqual(true);
    });
    it('onIconAfterClick is triggered', () => {
      const func = jest.fn();
      const wrapper = mount(<TestChip iconAfter={Close} onIconAfterClick={func} />);
      const iconAfter = wrapper.find('.pgn__chip__icon-after');
      iconAfter.simulate('click');
      iconAfter.simulate('keypress');
      expect(func).toHaveBeenCalledTimes(2);
    });
  });
});
