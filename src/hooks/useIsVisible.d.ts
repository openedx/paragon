import React from 'react';

declare const useIsVisible: (defaultIsVisible?: boolean) => [boolean, React.RefObject<HTMLDivElement>];

export default useIsVisible;
