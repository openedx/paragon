import React from "react";
import { assembleStringFromChildrenArray } from './utils';

interface TruncateProps {
    /** The expected text to which the ellipsis would be applied. */
    children: React.ReactNode;
    /** The number of lines the text to be truncated to. */
    lines?: number;
}

function Truncate({ children, lines = 1}: TruncateProps) {
  const style = {
    WebkitLineClamp: lines,
  }
  const initialText = typeof children === 'string' ? children : assembleStringFromChildrenArray(children);

  return (
    <p
      title={initialText}
      aria-label={initialText}
      className="truncate-text"
      style={style}
      data-testid="truncate-element"
    >
      {children}
    </p>
  )
}

export default Truncate;
