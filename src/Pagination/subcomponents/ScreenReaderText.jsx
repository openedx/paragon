import React, { useContext } from 'react';
import PaginationContext from '../PaginationContext';

export default function PaginationScreenReaderText() {
  const { getScreenReaderText } = useContext(PaginationContext);

  return (
    <div
      className="sr-only"
      aria-live="polite"
      aria-relevant="text"
      aria-atomic
    >
      {getScreenReaderText()}
    </div>
  );
}
