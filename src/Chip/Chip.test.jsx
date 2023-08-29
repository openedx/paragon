import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Close } from '../../icons';
import Chip from './index';

function TestChip(props) {
  return (
    <Chip {...props}>
      Test
    </Chip>
  );
}

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
      const { getByTestId } = render(<TestChip variant="dark" data-testid="chip" />);
      const chip = getByTestId('chip');
      expect(chip).toHaveClass('pgn__chip pgn__chip-dark');
    });
    it('renders with active class when disabled prop is added', () => {
      const { getByTestId } = render(<TestChip disabled data-testid="chip" />);
      const chip = getByTestId('chip');
      expect(chip).toHaveClass('pgn__chip disabled');
    });
    it('renders with the client\'s className', () => {
      const className = 'testClassName';
      const { getByTestId } = render(<TestChip className={className} data-testid="chip" />);
      const chip = getByTestId('chip');
      expect(chip).toHaveClass(className);
    });
    it('onIconAfterClick is triggered', async () => {
      const func = jest.fn();
      const { getByTestId } = render(
        <TestChip iconAfter={Close} onIconAfterClick={func} />,
      );
      const iconAfter = getByTestId('icon-after');
      userEvent.click(iconAfter);
      expect(func).toHaveBeenCalled();
    });
    it('onIconAfterKeyDown is triggered', async () => {
      const func = jest.fn();
      const { getByTestId } = render(
        <TestChip iconAfter={Close} onIconAfterClick={func} />,
      );
      const iconAfter = getByTestId('icon-after');
      userEvent.type(iconAfter, '{enter}');
      expect(func).toHaveBeenCalled();
    });
  });
});
