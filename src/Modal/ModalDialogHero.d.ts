import * as React from 'react';

export interface ModalDialogHeroProps extends React.HTMLProps<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

declare const ModalDialogHero: React.FC<ModalDialogHeroProps>;

export default ModalDialogHero;
