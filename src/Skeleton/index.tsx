import React from 'react';
import BaseSkeleton, { SkeletonTheme as BaseSkeletonTheme } from 'react-loading-skeleton';

// Note: the props below are re-declared from `react-loading-skeleton` so that they appear in the
// documentation on the Paragon docs site. We intentionally do NOT specify default values for the
// style-related props here, because any value passed explicitly would override the values provided
// by a parent `<SkeletonTheme>`.

export interface SkeletonProps {
  /** The number of lines of skeletons to render. If `count` is a decimal number like 3.5, three
   * full skeletons and one half-width skeleton will be rendered. Defaults to `1`. */
  count?: number;
  /** A custom wrapper component that goes around the individual skeleton elements. */
  wrapper?: React.FunctionComponent<React.PropsWithChildren<unknown>>;
  /** A custom class name for the individual skeleton elements which is used alongside the default class,
   * `react-loading-skeleton`. */
  className?: string;
  /** A custom class name for the `<span>` that wraps the individual skeleton elements. */
  containerClassName?: string;
  /** A string that is added to the container element as a `data-testid` attribute. */
  containerTestId?: string;
  /** Makes the skeleton circular by setting `border-radius` to `50%`. Defaults to `false`. */
  circle?: boolean;
  /** This is an escape hatch for advanced use cases and is not the preferred way to style the skeleton.
   * Props (e.g. `width`, `borderRadius`) take priority over this style object. */
  style?: React.CSSProperties;
  /** The background color of the skeleton. */
  baseColor?: string;
  /** The highlight color in the skeleton animation. */
  highlightColor?: string;
  /** The width of the skeleton. Defaults to `100%`. */
  width?: string | number;
  /** The height of each skeleton line. Defaults to the font size. */
  height?: string | number;
  /** The border radius of the skeleton. Defaults to `0.25rem`. */
  borderRadius?: string | number;
  /** By default, a `<br />` is inserted after each skeleton so that each skeleton gets its own line.
   * When `inline` is true, no line breaks are inserted. Defaults to `false`. */
  inline?: boolean;
  /** The length of the animation in seconds. Defaults to `1.5`. */
  duration?: number;
  /** The direction of the animation, either left-to-right or right-to-left. Defaults to `'ltr'`. */
  direction?: 'ltr' | 'rtl';
  /** Whether the animation should play. The skeleton will be a solid color when this is `false`.
   * You could use this prop to stop the animation if an error occurs. Defaults to `true`. */
  enableAnimation?: boolean;
  /** Allows you to override the `background-image` property of the highlight element, enabling you
   * to fully customize the gradient. */
  customHighlightBackground?: string;
}

/**
 * Displays a placeholder in place of content that is loading.
 * This is a wrapper around [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton).
 */
function Skeleton(props: SkeletonProps) {
  return <BaseSkeleton {...props} />;
}

export interface SkeletonThemeProps {
  /** The `Skeleton` components that should be styled by this theme. */
  children?: React.ReactNode;
  /** The background color of the skeleton. */
  baseColor?: string;
  /** The highlight color in the skeleton animation. */
  highlightColor?: string;
  /** The width of the skeleton. Defaults to `100%`. */
  width?: string | number;
  /** The height of each skeleton line. Defaults to the font size. */
  height?: string | number;
  /** The border radius of the skeleton. Defaults to `0.25rem`. */
  borderRadius?: string | number;
  /** By default, a `<br />` is inserted after each skeleton so that each skeleton gets its own line.
   * When `inline` is true, no line breaks are inserted. Defaults to `false`. */
  inline?: boolean;
  /** The length of the animation in seconds. Defaults to `1.5`. */
  duration?: number;
  /** The direction of the animation, either left-to-right or right-to-left. Defaults to `'ltr'`. */
  direction?: 'ltr' | 'rtl';
  /** Whether the animation should play. The skeleton will be a solid color when this is `false`.
   * You could use this prop to stop the animation if an error occurs. Defaults to `true`. */
  enableAnimation?: boolean;
  /** Allows you to override the `background-image` property of the highlight element, enabling you
   * to fully customize the gradient. */
  customHighlightBackground?: string;
}

/**
 * Applies styling options (colors, animation, etc.) to all of the `Skeleton` components nested inside it.
 */
export function SkeletonTheme(props: SkeletonThemeProps) {
  return <BaseSkeletonTheme {...props} />;
}

export default Skeleton;
