import React from 'react';

export interface BreadcrumbProps {
  links: Array<{
    label: string,
    href?: string,
    className?: string,
  }>,
  activeLabel?: string,
  spacer?: React.ReactElement,
  clickHandler?: Function,
  variant?: 'light' | 'dark',
  isMobile?: boolean,
  ariaLabel?: string,
  linkAs?: React.ElementType,
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
