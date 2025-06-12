interface BreakpointRange {
  minWidth?: number;
  maxWidth?: number;
}

interface Breakpoints {
  extraSmall: BreakpointRange;
  small: BreakpointRange;
  medium: BreakpointRange;
  large: BreakpointRange;
  extraLarge: BreakpointRange;
  extraExtraLarge: BreakpointRange;
}

export const Size: {
  readonly xs: 'extraSmall';
  readonly sm: 'small';
  readonly md: 'medium';
  readonly lg: 'large';
  readonly xl: 'extraLarge';
  readonly xxl: 'extraExtraLarge';
};

declare const breakpoints: Breakpoints;

export default breakpoints;
