import React from 'react';
import { assembleStringFromChildrenArray } from './utils';

interface TruncateProps {
  /** The expected text to which the ellipsis would be applied. */
  children: React.ReactNode;
  /** The number of lines the text to be truncated to. */
  lines?: number;
}

function Truncate({ children, lines = 1 }: TruncateProps) {
  let initialText: string = '';
  if (Array.isArray(children)) {
    const { result } = assembleStringFromChildrenArray(children);
    initialText = result;
  } else {
    initialText = String(children);
  }

  return (
    <p
      title={initialText}
      aria-label={initialText}
      className="truncate-text"
      style={{ '--truncate-prop-lines': lines } as React.CSSProperties}
      data-testid="truncate-element"
    >
      {children}
    </p>
  );
}

export default Truncate;
