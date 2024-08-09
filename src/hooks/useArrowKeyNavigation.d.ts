import React from 'react';

export type UseArrowKeyNavigationProps = {
    selectors?: string;
    ignoredKeys?: string[];
};

export default function useArrowKeyNavigation(props?: UseArrowKeyNavigationProps): React.RefObject<HTMLElement>;
