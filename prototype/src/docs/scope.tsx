import { Button, ButtonGroup, ButtonToolbar } from '../Button';

/** A tiny inline icon so live examples can demonstrate icon slots dependency-free. */
export function DotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <circle cx="8" cy="8" r="5" />
    </svg>
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
  DotIcon,
};
