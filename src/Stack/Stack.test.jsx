import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Stack from '.';

const stackList = ['First', 'Second'];

describe('<Stack />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <Stack>{stackList.map((el) => <div key={el}>{el}</div>)}</Stack>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with the reversed prop', () => {
      const { container } = render(
        <Stack reversed>
          {stackList.reverse().map((el) => <div key={el}>{el}</div>)}
        </Stack>,
      );
      expect(container).toMatchSnapshot();
    });
    it('renders with the vertical direction', () => {
      render(<Stack data-testid="vstack">Content</Stack>);
      const vStack = screen.getByTestId('vstack');
      expect(vStack).toBeTruthy();

      render(<Stack direction="vertical">Content</Stack>);
      expect(vStack).toBeTruthy();
    });
    it('renders with the horizontal direction', () => {
      render(<Stack data-testid="hstack" direction="horizontal">Content</Stack>);
      const hStack = screen.getByTestId('hstack');
      expect(hStack).toBeTruthy();
    });
    it('renders with the correct gap', () => {
      const gap = 3;
      render(<Stack data-testid="vstack" gap={gap}>Content</Stack>);
      const vStack = screen.getByTestId('vstack');
      expect(vStack.className).toContain(`pgn__stack-gap--${gap}`);
    });
    it('renders with the className prop', () => {
      const className = 'className';
      render(<Stack data-testid="vstack" className={className}>Content</Stack>);
      const vStack = screen.getByTestId('vstack');
      expect(vStack.className).toContain(className);
    });
  });
});
