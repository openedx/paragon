import { FC, ReactNode } from 'react';

export interface PageBannerTypes {
  children?: ReactNode;
  dismissible?: boolean;
  dismissAltText?: ReactNode;
  onDismiss?: () => void;
  show?: boolean;
  variant?: 'light' | 'dark' | 'warning' | 'accentA' | 'accentB';
}

declare const PageBanner: FC<PageBannerTypes>;

export default PageBanner;
