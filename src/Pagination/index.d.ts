/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';

export interface ButtonLabels {
  previous?: string;
  next?: string;
  page?: string;
  currentPage?: string;
  pageOfCount?: string;
}

export interface Icons {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export type PaginationVariants = 'default' | 'secondary' | 'reduced' | 'minimal';
export type PaginationSizes = 'default' | 'small';

export interface PaginationProps {
  onPageSelect: (pageNumber: number) => void;
  pageCount: number;
  paginationLabel: string;
  buttonLabels?: ButtonLabels;
  className?: string;
  currentPage?: number;
  maxPagesDisplayed?: number;
  icons?: Icons;
  variant?: PaginationVariants;
  invertColors?: boolean;
  size?: PaginationSizes;
}

// eslint-disable-next-line react/prefer-stateless-function
declare class Pagination extends React.Component<PaginationProps> {}

export default Pagination;
