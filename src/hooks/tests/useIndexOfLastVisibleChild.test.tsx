import React from 'react';
import { render } from '@testing-library/react';
import { useIndexOfLastVisibleChild } from '../..';

const dropdownId = 'dropdown';

window.ResizeObserver = window.ResizeObserver
  || jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

function TestComponent() {
  const [containerElementRef, setContainerElementRef] = React.useState<HTMLDivElement | null>(null);
  const overflowElementRef = React.useRef<HTMLDivElement>(null);
  const indexOfLastVisibleChild = useIndexOfLastVisibleChild(containerElementRef, overflowElementRef.current);

  return (
    <div ref={setContainerElementRef} style={{ display: 'flex' }}>
      <div style={{ width: '250px' }} className="element">Element 1</div>
      <div style={{ width: '250px' }} className="element">Element 2</div>
      <div style={{ width: '250px' }} className="element">Element 3</div>
      <div ref={overflowElementRef} data-testid={dropdownId} id={dropdownId}>{indexOfLastVisibleChild}</div>
    </div>
  );
}

describe('useIndexOfLastVisibleChild hook', () => {
  it('hooks display correct index', () => {
    const { getByTestId } = render(<TestComponent />);
    const dropdownElement = getByTestId(dropdownId);
    const elements = document.querySelectorAll('.element');
    expect(dropdownElement.textContent).toEqual((elements.length - 1).toString());
  });
});
