import * as React from 'react';

export interface ModalDialogHeroBackgroundProps extends React.HTMLProps<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  backgroundSrc?: string;
  children?: React.ReactNode;
}

declare const ModalDialogHeroBackground: React.FC<ModalDialogHeroBackgroundProps>;

export default ModalDialogHeroBackground;
