import React from 'react';

import { render, screen } from '@testing-library/react'; // (or /dom, /vue, ...)

// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect';

import Scrollable from './index';

describe('<Scroll with height in children/>', () => {
  it('should not render shadows when initially rendered', () => {
    const items = Array.from({ length: 50 }, (v, k) => k + 1);
    render(
      <div style={{ display: 'flex', height: '5vh' }}>
        <Scrollable data-testid="testable-body">
          <div className="content-area">
            { items.map(i => <p key={i} aria-label="hellosayer">Hello{i}</p>) }
            <p className="bottom-elem" data-testid="bottom-elem">bottom element</p>
          </div>
        </Scrollable>
      </div>,
    );
    const bodyElem = screen.getByTestId('testable-body');
    expect(bodyElem.getAttribute('class')).toBe('pgn__scrollable-body pgn__scrollable-body-scroll-top pgn__scrollable-body-scroll-bottom');
  });
});
