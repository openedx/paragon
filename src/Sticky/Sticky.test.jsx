import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Sticky from './index';

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('<Sticky />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <Sticky>Sticky</Sticky>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with top positioning', () => {
      render(<Sticky>content</Sticky>);
      const sticky = screen.getByText('content');
      expect(sticky.className).toContain('pgn__sticky-top');

      render(<Sticky position="top">content</Sticky>);
      expect(sticky.className).toContain('pgn__sticky-top');
    });
    it('renders with bottom positioning', () => {
      render(<Sticky position="bottom">content</Sticky>);
      const sticky = screen.getByText('content');
      expect(sticky.className).toContain('pgn__sticky-bottom');
    });
    it('renders with offset', () => {
      const offset = 3;
      render(<Sticky offset={offset}>content</Sticky>);
      const sticky = screen.getByText('content');
      expect(sticky.className).toContain(`pgn__sticky-offset--${offset}`);
    });
    it('observer is initialized during render and detached during unmount', () => {
      render(<Sticky>content</Sticky>);
      expect(observe).toHaveBeenCalled();
      render(null);
      expect(unobserve).toHaveBeenCalled();
    });
  });
});
