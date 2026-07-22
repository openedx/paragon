import type React from 'react';

import { Button, ButtonGroup, ButtonToolbar } from '../Button';

/** A tiny inline icon so live examples can demonstrate icon slots dependency-free. */
export function DotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <circle cx="8" cy="8" r="5" />
    </svg>
  );
}

// Minimal stand-ins for Paragon icons so the mirrored README examples read the
// same (`iconBefore={ArrowBack}` etc.). Sized in `em` so they scale with the button.
const icon = (path: string) => function Icon() {
  return (
    <svg width="1.25em" height="1.25em" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  );
};

export const Add = icon('M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z');
export const Remove = icon('M19 13H5v-2h14v2z');
export const ArrowBack = icon('M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z');
export const ArrowDropDown = icon('M7 10l5 5 5-5z');
export const Highlight = icon('M6 14l3 3v5h6v-5l3-3V9H6v5zM11 2h2v3h-2V2zM3.5 5.87l1.41-1.41 2.12 2.12L5.62 8 3.5 5.87zM16.96 6.58l2.12-2.12 1.41 1.41L18.38 8l-1.42-1.42z');

const SPACERS = [0, 0.25, 0.5, 1, 1.5, 3]; // Bootstrap/Paragon spacer scale (rem)

export interface StackProps {
  children: React.ReactNode;
  /** Spacing between items, on the Paragon spacer scale (0–5). */
  gap?: number;
  /** Layout direction (default: `vertical`). */
  direction?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A minimal stand-in for Paragon's `Stack` so the mirrored README examples keep
 * their original markup. Wraps on small screens instead of the original's
 * `useMediaQuery` direction switch.
 */
export function Stack({
  children, gap = 0, direction = 'vertical', className, style,
}: StackProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        flexWrap: 'wrap',
        alignItems: direction === 'horizontal' ? 'center' : 'stretch',
        gap: `${SPACERS[gap] ?? gap * 0.25}rem`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Everything a react-live snippet may reference must be in `scope` — react-live
 * evaluates a single JSX expression with no `import` statements. This mirrors how
 * Paragon's current Gatsby docs supply component scope in `www/.../CodeBlock.tsx`.
 */
export const scope = {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Stack,
  DotIcon,
  Add,
  Remove,
  ArrowBack,
  ArrowDropDown,
  Highlight,
};
