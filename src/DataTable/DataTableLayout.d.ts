import React from 'react';

export interface DataTableLayoutProps {
    className?: string;
    children: React.ReactNode;
    filtersTitle?: string | React.ReactElement;
}

declare const DataTableLayout: React.FC<DataTableLayoutProps>;

export default DataTableLayout;
