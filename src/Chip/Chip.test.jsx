import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Close } from '../../icons';
import Chip from '.';

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
      render(<TestChip variant="dark" />);
      const chip = screen.getByRole('button');
      expect(chip).toHaveClass('pgn__chip pgn__chip-dark');
    });
    it('renders with active class when disabled prop is added', () => {
      render(<TestChip disabled />);
      const chip = screen.getByRole('button');
      expect(chip).toHaveClass('disabled');
    });
    it('renders with the client\'s className', () => {
      const className = 'testClassName';
      render(<TestChip className={className} />);
      const chip = screen.getByRole('button');
      expect(chip).toHaveClass(className);
    });
    it('onIconAfterClick is triggered', async () => {
      const func = jest.fn();
      render(
        <TestChip
          iconAfter={Close}
          onIconAfterClick={func}
          iconAfterAlt="icon-after"
        />,
      );
      const iconAfter = screen.getByLabelText('icon-after');
      await userEvent.click(iconAfter);
      expect(func).toHaveBeenCalled();
    });
    it('onIconAfterKeyDown is triggered', async () => {
      const func = jest.fn();
      render(
        <TestChip
          iconAfter={Close}
          onIconAfterClick={func}
          iconAfterAlt="icon-after"
        />,
      );
      const iconAfter = screen.getByLabelText('icon-after');
      await userEvent.type(iconAfter, '{enter}');
      expect(func).toHaveBeenCalled();
    });
    it('onIconBeforeClick is triggered', async () => {
      const func = jest.fn();
      render(
        <TestChip
          iconBefore={Close}
          onIconBeforeClick={func}
          iconBeforeAlt="icon-before"
        />,
      );
      const iconBefore = screen.getByLabelText('icon-before');
      await userEvent.click(iconBefore);
      expect(func).toHaveBeenCalled();
    });
    it('onIconBeforeKeyDown is triggered', async () => {
      const func = jest.fn();
      render(
        <TestChip
          iconBefore={Close}
          onIconBeforeClick={func}
          iconBeforeAlt="icon-before"
        />,
      );
      const iconBefore = screen.getByLabelText('icon-before');
      await userEvent.type(iconBefore, '{enter}');
      expect(func).toHaveBeenCalled();
    });
    it('checks the absence of the `selected` class in the chip', async () => {
      render(<TestChip />);
      const chip = screen.getByRole('button');
      expect(chip).not.toHaveClass('selected');
    });
    it('checks the presence of the `selected` class in the chip', async () => {
      render(<TestChip isSelected />);
      const chip = screen.getByRole('button');
      expect(chip).toHaveClass('selected');
    });
  });
});
