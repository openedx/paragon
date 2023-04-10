import React from 'react';

export interface PageBannerTypes {
  children?: React.ReactNode;
  dismissible?: boolean;
  dismissAltText?: React.ReactNode;
  onDismiss?: () => void;
  show?: boolean;
  variant?: 'light' | 'dark' | 'warning' | 'accentA' | 'accentB';
}

declare const PageBanner: React.FC<PageBannerTypes>;

export default PageBanner;
