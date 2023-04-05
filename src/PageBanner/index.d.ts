import * as React from 'react';

export type PageBannerVariants = 'light' | 'dark' | 'warning' | 'accentA' | 'accentB';

export interface PageBannerTypes {
  children?: React.ReactNode;
  dismissible?: boolean;
  dismissAltText?: React.ReactNode;
  onDismiss?: () => void;
  show?: boolean;
  variant?: PageBannerVariants;
}

declare const PageBanner: React.FC<PageBannerTypes>;

export default PageBanner;
