import React from 'react';
import { mount } from 'enzyme';
import { useIndexOfLastVisibleChild } from '../..';

const dropdownId = 'dropdown';

window.ResizeObserver = window.ResizeObserver
  || jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

function TestComponent() {
  const containerElementRef = React.useRef(null);
  const overflowElementRef = React.useRef(null);
  const indexOfLastVisibleChild = useIndexOfLastVisibleChild(containerElementRef.current, overflowElementRef.current);

  return (
    <div ref={containerElementRef} style={{ display: 'flex' }}>
      <div style={{ width: '250px' }} className="element">Element 1</div>
      <div style={{ width: '250px' }} className="element">Element 2</div>
      <div style={{ width: '250px' }} className="element">Element 3</div>
      <div ref={overflowElementRef} id={dropdownId}>{indexOfLastVisibleChild}</div>
    </div>
  );
}

describe('useIndexOfLastVisibleChild hook', () => {
  it('hooks display correct index', () => {
    const wrapper = mount(<TestComponent />);
    expect(wrapper.find(`#${dropdownId}`).text()).toEqual((wrapper.find('.element').length - 1).toString());
  });
});
