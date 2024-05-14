import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Close } from '../../icons';
import { STYLE_VARIANTS } from './constants';
import Chip from '.';

function TestChip(props: Omit<React.ComponentProps<typeof Chip>, 'children'>) {
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
        <TestChip iconBefore={Close} iconBeforeAlt="close icon" />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconAfter', () => {
      const tree = renderer.create((
        <TestChip iconAfter={Close} iconAfterAlt="close icon" />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconBefore and iconAfter', () => {
      const tree = renderer.create((
        <TestChip
          iconBefore={Close}
          iconBeforeAlt="close icon"
          iconAfter={Close}
          iconAfterAlt="close icon"
        />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders div with "button" role when onClick is provided', () => {
      const tree = renderer.create((
        <TestChip onClick={jest.fn} />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('correct rendering', () => {
    it('render a non-interactive element if onClick handlers are not provided', () => {
      render(<TestChip />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
    it('render an interactive element if onClick handler is provided', () => {
      render(<TestChip onClick={jest.fn} />);
      expect(screen.queryByRole('button')).toBeInTheDocument();
    });
    it('renders with correct class when variant is added', () => {
      render(<TestChip variant={STYLE_VARIANTS.DARK} onClick={jest.fn} />);
      const chip = screen.getByRole('button');
      expect(chip).toHaveClass('pgn__chip pgn__chip-dark');
    });
    it('renders with active class when disabled prop is added', () => {
      render(<TestChip disabled onClick={jest.fn} />);
      const chip = screen.getByRole('button');
      expect(chip).toHaveClass('disabled');
    });
    it('renders with the client\'s className', () => {
      const className = 'testClassName';
      render(<TestChip className={className} onClick={jest.fn} />);
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
      expect(func).toHaveBeenCalledTimes(1);
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
      await userEvent.click(iconAfter);
      expect(func).toHaveBeenCalledTimes(1);
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
      expect(func).toHaveBeenCalledTimes(1);
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
      await userEvent.click(iconBefore);
      expect(func).toHaveBeenCalledTimes(1);
    });
    it('checks the absence of the `selected` class in the chip', async () => {
      render(<TestChip onClick={jest.fn} />);
      const chip = screen.getByRole('button');
      expect(chip).not.toHaveClass('selected');
    });
    it('checks the presence of the `selected` class in the chip', async () => {
      render(<TestChip isSelected onClick={jest.fn} />);
      const chip = screen.getByRole('button');
      expect(chip).toHaveClass('selected');
    });
  });
});
