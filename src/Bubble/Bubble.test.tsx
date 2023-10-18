import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Bubble from '.';

describe('<Bubble />', () => {
  describe('correct rendering', () => {
    it('successfully renders', () => {
      const tree = renderer.create(<Bubble>1</Bubble>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with variant', () => {
      render(<Bubble variant="error">1</Bubble>);
      const bubble = screen.getByText('1');
      expect(bubble.className).toContain('pgn__bubble-error');
    });

    it('renders with default variant', () => {
      render(<Bubble>1</Bubble>);
      const bubble = screen.getByText('1');
      expect(bubble.className).toContain('pgn__bubble-primary');
    });

    it('renders with disabled variant', () => {
      render(<Bubble disabled>1</Bubble>);
      const bubble = screen.getByText('1');
      expect(bubble.className).toContain('disabled');
    });

    it('renders with expandable variant', () => {
      render(<Bubble expandable>1</Bubble>);
      const bubble = screen.getByText('1');
      expect(bubble.className).toContain('expandable');
    });
  });
});
