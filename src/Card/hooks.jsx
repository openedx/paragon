import React, { useMemo } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useReversedChildren = (children) => {
  const reversedChildren = useMemo(
    () => React.Children.toArray(children).reverse(),
    [children],
  );

  return reversedChildren;
};
