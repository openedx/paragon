import React from 'react';

export interface TableFooterProps {
    children?: React.ReactNode | React.ReactNodeArray;
    className?: string;
}

declare function TableFooter(props: TableFooterProps): JSX.Element;

export default TableFooter;
