import React from 'react';

declare const useIndexOfLastVisibleChild: (
    containerElementRef: React.RefObject<Element>,
    overflowElementRef?: React.RefObject<Element>
) => number[];

export default useIndexOfLastVisibleChild;
