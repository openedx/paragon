import { act, renderHook } from '@testing-library/react';
import useOverflowScrollEventListeners from '../useOverflowScrollEventListeners';

const divElement = document.createElement('div');
const mockRef = divElement;

const createDivWithLink = () => {
  const element = document.createElement('div');
  const childLink = document.createElement('a');
  childLink.setAttribute('href', 'https://edx.org');
  element.appendChild(childLink);
  return element;
};

const mockOnActiveChildElementIndexChange = jest.fn();
const baseArgs = {
  overflowRef: mockRef,
  childrenElements: [
    createDivWithLink(),
    createDivWithLink(),
  ],
  activeChildElementIndex: 0,
  onActiveChildElementIndexChange: mockOnActiveChildElementIndexChange,
  disableScroll: false,
};

describe('useOverflowScrollElementAttributes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles mousedown and mouseup events', () => {
    const { result } = renderHook(() => useOverflowScrollEventListeners(baseArgs));

    const { handleMouseDownEvent } = result.current;
    act(() => {
      handleMouseDownEvent();
    });
    expect(result.current.isOverflowElementMouseDown).toBeTruthy();

    const { handleMouseUpEvent } = result.current;
    act(() => {
      handleMouseUpEvent();
    });
    expect(result.current.isOverflowElementMouseDown).toBeFalsy();
  });

  it('handles keydown and keyup events', () => {
    const { result } = renderHook(() => useOverflowScrollEventListeners(baseArgs));
    const {
      updateActiveChildElementOnKeyDown,
      updateActiveChildElementOnKeyUp,
    } = result.current;

    const eventArrowLeft = { key: 'ArrowLeft' };
    const eventArrowRight = { key: 'ArrowRight' };

    // mock initial scrolling
    baseArgs.overflowRef.scrollLeft = 25;

    // ArrowRight
    act(() => {
      updateActiveChildElementOnKeyDown(eventArrowRight);
      // mock some right scrolling
      baseArgs.overflowRef.scrollLeft = 50;
      updateActiveChildElementOnKeyUp(eventArrowRight);
    });
    expect(result.current.previousOverflowScrollLeft).toEqual(25);

    // ArrowLeft
    act(() => {
      updateActiveChildElementOnKeyDown(eventArrowLeft);
      // mock some right scrolling
      baseArgs.overflowRef.scrollLeft = 25;
      updateActiveChildElementOnKeyUp(eventArrowLeft);
    });
    expect(result.current.previousOverflowScrollLeft).toEqual(50);
  });

  it('handles focusin event', () => {
    const focusedChildElementIndex = 1;
    Object.defineProperty(document, 'activeElement', {
      value: baseArgs.childrenElements[focusedChildElementIndex],
    });

    const { result } = renderHook(() => useOverflowScrollEventListeners(baseArgs));
    const { updateActiveChildElementOnFocusIn } = result.current;

    act(() => {
      updateActiveChildElementOnFocusIn();
    });

    expect(mockOnActiveChildElementIndexChange).toBeCalledTimes(1);
    expect(mockOnActiveChildElementIndexChange).toBeCalledWith(focusedChildElementIndex);
  });

  it('handles wheel event', () => {
    const { result } = renderHook(() => useOverflowScrollEventListeners(baseArgs));
    const { updateActiveChildElementOnWheel } = result.current;

    const wheelEvent = { deltaX: 25 };
    act(() => {
      updateActiveChildElementOnWheel(wheelEvent);
    });
  });
});
