import { renderHook } from '@testing-library/react-hooks/dom';
import { act } from '@testing-library/react';
import useIsVisible from '../../../hooks/useIsVisible';
import useOverflowScroll from '../useOverflowScroll';
import useOverflowScrollActions from '../useOverflowScrollActions';
import getChildrenElements from '../getChildrenElements';

const divElement = document.createElement('div');
const mockRef = {
  current: divElement,
};

jest.mock('../../../hooks/useIsVisible');
useIsVisible.mockReturnValue([false, mockRef]);

jest.mock('../useOverflowScrollEventListeners');
jest.mock('../useOverflowScrollElementAttributes');

const mockScrollToPrevious = jest.fn();
const mockScrollToNext = jest.fn();
jest.mock('../useOverflowScrollActions');
useOverflowScrollActions.mockImplementation(({
  onScrollPrevious,
  onScrollNext,
}) => ({
  scrollToPrevious: mockScrollToPrevious.mockImplementation(() => {
    onScrollPrevious();
  }),
  scrollToNext: mockScrollToNext.mockImplementation(() => {
    onScrollNext();
  }),
}));

jest.mock('../getChildrenElements');
getChildrenElements.mockReturnValue([document.createElement('div')]);

describe('useOverflowScroll', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns correct object properties', () => {
    const { result } = renderHook(() => useOverflowScroll({
      childQuerySelector: '.example-item',
    }));
    const actualReturnedValue = result.current;
    expect(actualReturnedValue).toEqual(
      expect.objectContaining({
        overflowRef: mockRef,
        startSentinelRef: mockRef,
        endSentinelRef: mockRef,
        isScrolledToStart: false,
        isScrolledToEnd: false,
        isOverflowElementVisible: false,
        scrollToPrevious: expect.any(Function),
        scrollToNext: expect.any(Function),
        activeChildElementIndex: 0,
      }),
    );
  });

  it('increments active child element index on scrollToPrevious and scrollToNext', async () => {
    getChildrenElements.mockReturnValue([
      document.createElement('div'),
      document.createElement('div'),
    ]);

    const mockOnScrollPrevious = jest.fn();
    const mockOnScrollNext = jest.fn();
    const { result } = renderHook(() => useOverflowScroll({
      childQuerySelector: '.example-item',
      onScrollPrevious: mockOnScrollPrevious,
      onScrollNext: mockOnScrollNext,
    }));
    const { scrollToPrevious, scrollToNext } = result.current;

    act(() => {
      scrollToNext();
    });

    expect(mockScrollToNext).toBeCalledTimes(1);
    expect(mockOnScrollNext).toBeCalledTimes(1);

    expect(result.current).toEqual(
      expect.objectContaining({
        activeChildElementIndex: 1,
      }),
    );

    act(() => {
      scrollToPrevious();
    });

    expect(mockScrollToPrevious).toBeCalledTimes(1);
    expect(mockOnScrollPrevious).toBeCalledTimes(1);

    expect(result.current).toEqual(
      expect.objectContaining({
        activeChildElementIndex: 0,
      }),
    );
  });
});
