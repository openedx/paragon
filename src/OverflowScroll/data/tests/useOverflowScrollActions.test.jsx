import { renderHook } from '@testing-library/react-hooks/dom';
import { act } from 'react-test-renderer';
import useOverflowScrollActions from '../useOverflowScrollActions';

const divElement = document.createElement('div');
const mockRef = divElement;

const mockScrollTo = jest.fn();
Element.prototype.scrollTo = mockScrollTo;

const mockOnScrollPrevious = jest.fn();
const mockOnScrollNext = jest.fn();

const baseArgs = {
  overflowRef: mockRef,
  childrenElements: [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
  ],
  onScrollPrevious: mockOnScrollPrevious,
  onScrollNext: mockOnScrollNext,
  activeChildElementIndex: 0,
};

describe('useOverflowScrollActions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns correct object properties', () => {
    const args = {};
    const { result } = renderHook(() => useOverflowScrollActions(args));
    expect(result.current).toEqual(
      expect.objectContaining({
        scrollToPrevious: expect.any(Function),
        scrollToNext: expect.any(Function),
      }),
    );
  });

  it('handles scrollToPrevious when previous child element is at start', async () => {
    const { result } = renderHook(() => useOverflowScrollActions(baseArgs));
    const { scrollToPrevious } = result.current;

    act(() => {
      scrollToPrevious();
    });

    expect(mockOnScrollPrevious).toBeCalledTimes(1);
    expect(mockOnScrollPrevious).toBeCalledWith(
      expect.objectContaining({
        currentActiveChildElementIndex: 0,
      }),
    );
    expect(mockScrollTo).toBeCalledTimes(1);
  });

  it('handles scrollToPrevious when previous child element is NOT at start', async () => {
    const args = {
      ...baseArgs,
      activeChildElementIndex: 2,
    };
    const { result } = renderHook(() => useOverflowScrollActions(args));
    const { scrollToPrevious } = result.current;

    act(() => {
      scrollToPrevious();
    });

    expect(mockOnScrollPrevious).toBeCalledTimes(1);
    expect(mockOnScrollPrevious).toBeCalledWith(
      expect.objectContaining({
        currentActiveChildElementIndex: 1,
      }),
    );
    expect(mockScrollTo).toBeCalledTimes(1);
  });

  it('handles scrollToNext when next child element is at end', async () => {
    const args = {
      ...baseArgs,
      activeChildElementIndex: 2,
    };
    const { result } = renderHook(() => useOverflowScrollActions(args));
    const { scrollToNext } = result.current;

    act(() => {
      scrollToNext();
    });

    expect(mockOnScrollNext).toBeCalledTimes(1);
    expect(mockOnScrollNext).toBeCalledWith(
      expect.objectContaining({
        currentActiveChildElementIndex: 2,
      }),
    );
    expect(mockScrollTo).toBeCalledTimes(1);
  });

  it('handles scrollToNext when next child element is NOT at end', async () => {
    const { result } = renderHook(() => useOverflowScrollActions(baseArgs));
    const { scrollToNext } = result.current;

    act(() => {
      scrollToNext();
    });

    expect(mockOnScrollNext).toBeCalledTimes(1);
    expect(mockOnScrollNext).toBeCalledWith(
      expect.objectContaining({
        currentActiveChildElementIndex: 1, // by default, it starts at 0
      }),
    );
    expect(mockScrollTo).toBeCalledTimes(1);
  });
});
