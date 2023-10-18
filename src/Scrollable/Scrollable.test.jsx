import React from 'react';
import { render, screen } from '@testing-library/react'; // (or /dom, /vue, ...)
import useIsVisible from '../hooks/useIsVisible';

import Scrollable, { CLASSNAME_SCROLL_BOTTOM, CLASSNAME_SCROLL_TOP } from '.';

jest.mock('../hooks/useIsVisible');

function rangeOfNumbers() {
  return Array.from({ length: 50 }, (v, k) => k + 1);
}

function renderScrollable(items) {
  render(
    <div style={{ display: 'flex', height: '5vh' }}>
      <Scrollable data-testid="testable-body">
        <div className="content-area">
          {items.map(i => <p key={i} aria-label="hellosayer">Hello{i}</p>)}
          <p className="bottom-elem" data-testid="bottom-elem">bottom element</p>
        </div>
      </Scrollable>
    </div>,
  );
}

describe('<Scroll with height in children/>', () => {
  it('should not render bottom shadow when scrolled to top is true', () => {
    const items = rangeOfNumbers();
    useIsVisible.mockReturnValueOnce([true, null]).mockReturnValueOnce([false, null]);
    renderScrollable(items);
    const bodyElem = screen.getByTestId('testable-body');
    expect(bodyElem.getAttribute('class')).toContain(CLASSNAME_SCROLL_TOP);
    expect(bodyElem.getAttribute('class')).not.toContain(CLASSNAME_SCROLL_BOTTOM);
  });
  it('should not render top shadow when scrolled to bottom is true', () => {
    const items = rangeOfNumbers();
    useIsVisible.mockReturnValueOnce([false, null]).mockReturnValueOnce([true, null]);
    renderScrollable(items);
    const bodyElem = screen.getByTestId('testable-body');
    expect(bodyElem.getAttribute('class')).toContain(CLASSNAME_SCROLL_BOTTOM);
    expect(bodyElem.getAttribute('class')).not.toContain(CLASSNAME_SCROLL_TOP);
  });
  it('should not render any shadow when scrolled to bottom and top are both false', () => {
    const items = rangeOfNumbers();
    useIsVisible.mockReturnValueOnce([false, null]).mockReturnValueOnce([false, null]);
    renderScrollable(items);
    const bodyElem = screen.getByTestId('testable-body');
    expect(bodyElem.getAttribute('class')).not.toContain(CLASSNAME_SCROLL_BOTTOM);
    expect(bodyElem.getAttribute('class')).not.toContain(CLASSNAME_SCROLL_TOP);
  });
});
