import React from 'react';

export interface PaginationProps {
  onPageSelect: (pageNumber: number) => void;
  pageCount: number;
  paginationLabel: string;
  buttonLabels?: {
    previous?: string;
    next?: string;
    page?: string;
    currentPage?: string;
    pageOfCount?: string;
  };
  className?: string;
  currentPage?: number;
  maxPagesDisplayed?: number;
  icons?: {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
  variant?: 'default' | 'secondary' | 'reduced' | 'minimal';
  invertColors?: boolean;
  size?: 'default' | 'small';
}

declare class Pagination extends React.Component<PaginationProps> {}

export default Pagination;
