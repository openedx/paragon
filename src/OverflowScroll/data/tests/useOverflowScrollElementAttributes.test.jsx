import { renderHook } from '@testing-library/react';
import useOverflowScrollElementAttributes, {
  OVERFLOW_SCROLL_OVERFLOW_CONTAINER_CLASS,
  OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START,
  OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_END,
  OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START_END,
} from '../useOverflowScrollElementAttributes';

const divElement = document.createElement('div');
const mockRef = divElement;

const baseArgs = {
  overflowRef: mockRef,
  hasInteractiveChildren: false,
  disableScroll: false,
  disableOpacityMasks: false,
  isScrolledToStart: false,
  isScrolledToEnd: false,
};

describe('useOverflowScrollElementAttributes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns correct base object properties', () => {
    renderHook(() => useOverflowScrollElementAttributes(baseArgs));
    const overflowRefStyles = global.getComputedStyle(baseArgs.overflowRef);
    const hasOverflowClass = baseArgs.overflowRef.classList.contains(OVERFLOW_SCROLL_OVERFLOW_CONTAINER_CLASS);

    // class name
    expect(hasOverflowClass).toBeTruthy();

    // styles
    const positionStyle = overflowRefStyles.getPropertyValue('position');
    expect(positionStyle).toEqual('relative');
    const overflowXStyle = overflowRefStyles.getPropertyValue('overflow-x');
    expect(overflowXStyle).toEqual('scroll');
    const maskImageStyle = overflowRefStyles.getPropertyValue('mask-image');
    expect(maskImageStyle).toBeTruthy();
    const webkitMaskImageStyle = overflowRefStyles.getPropertyValue('webkit-mask-image');
    expect(webkitMaskImageStyle).toBeTruthy();

    // a11y
    expect(baseArgs.overflowRef.tabIndex).toEqual(0);
  });

  it('tabIndex={-1} if `hasInteractiveChildren` is true', () => {
    const args = {
      ...baseArgs,
      hasInteractiveChildren: true,
    };
    renderHook(() => useOverflowScrollElementAttributes(args));
    expect(baseArgs.overflowRef.tabIndex).toEqual(-1);
  });

  it('applies `overflow-x: hidden` on the overflow container element when `disableScroll=true`', () => {
    const args = {
      ...baseArgs,
      disableScroll: true,
    };
    renderHook(() => useOverflowScrollElementAttributes(args));
    const overflowRefStyles = global.getComputedStyle(baseArgs.overflowRef);
    const overflowXStyle = overflowRefStyles.getPropertyValue('overflow-x');
    expect(overflowXStyle).toEqual('hidden');
  });

  it('disables the opacity mask styles on overflow container element when `disableOpacityMasks=true`', () => {
    const args = {
      ...baseArgs,
      disableOpacityMasks: true,
    };
    renderHook(() => useOverflowScrollElementAttributes(args));
    const overflowRefStyles = global.getComputedStyle(baseArgs.overflowRef);
    const maskImageStyle = overflowRefStyles.getPropertyValue('mask-image');
    expect(maskImageStyle).toBeFalsy();
    const webkitMaskImageStyle = overflowRefStyles.getPropertyValue('webkit-mask-image');
    expect(webkitMaskImageStyle).toBeFalsy();
  });

  it('only shows the end opacity mask styles on overflow container element when `isScrolledToStart=true` and `isScrolledToEnd=false`', () => {
    const args = {
      ...baseArgs,
      isScrolledToStart: true,
      isScrolledToEnd: false,
    };
    renderHook(() => useOverflowScrollElementAttributes(args));
    const overflowRefStyles = global.getComputedStyle(baseArgs.overflowRef);
    const maskImageStyle = overflowRefStyles.getPropertyValue('mask-image');
    expect(maskImageStyle).toEqual(OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_END);
    const webkitMaskImageStyle = overflowRefStyles.getPropertyValue('webkit-mask-image');
    expect(webkitMaskImageStyle).toEqual(OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_END);
  });

  it('only shows the start opacity mask styles on overflow container element when `isScrolledToStart=false` and `isScrolledToEnd=true`', () => {
    const args = {
      ...baseArgs,
      isScrolledToStart: false,
      isScrolledToEnd: true,
    };
    renderHook(() => useOverflowScrollElementAttributes(args));
    const overflowRefStyles = global.getComputedStyle(baseArgs.overflowRef);
    const maskImageStyle = overflowRefStyles.getPropertyValue('mask-image');
    expect(maskImageStyle).toEqual(OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START);
    const webkitMaskImageStyle = overflowRefStyles.getPropertyValue('webkit-mask-image');
    expect(webkitMaskImageStyle).toEqual(OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START);
  });

  it('shows both start/end opacity mask styles on overflow container element when `isScrolledToStart=true` and `isScrolledToEnd=false`', () => {
    const args = {
      ...baseArgs,
      isScrolledToStart: false,
      isScrolledToEnd: false,
    };
    renderHook(() => useOverflowScrollElementAttributes(args));
    const overflowRefStyles = global.getComputedStyle(baseArgs.overflowRef);
    const maskImageStyle = overflowRefStyles.getPropertyValue('mask-image');
    expect(maskImageStyle).toEqual(OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START_END);
    const webkitMaskImageStyle = overflowRefStyles.getPropertyValue('webkit-mask-image');
    expect(webkitMaskImageStyle).toEqual(OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START_END);
  });

  it('shows no opacity mask styles on overflow container element when `isScrolledToStart=true` and `isScrolledToEnd=true`', () => {
    const args = {
      ...baseArgs,
      isScrolledToStart: true,
      isScrolledToEnd: true,
    };
    renderHook(() => useOverflowScrollElementAttributes(args));
    const overflowRefStyles = global.getComputedStyle(baseArgs.overflowRef);
    const maskImageStyle = overflowRefStyles.getPropertyValue('mask-image');
    expect(maskImageStyle).toBeFalsy();
    const webkitMaskImageStyle = overflowRefStyles.getPropertyValue('webkit-mask-image');
    expect(webkitMaskImageStyle).toBeFalsy();
  });
});
