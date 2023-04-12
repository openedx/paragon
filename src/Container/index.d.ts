import React from 'react';
import { ContainerProps as BaseContainerProps } from 'react-bootstrap/Container';

export interface ContainerProps extends BaseContainerProps {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

declare const Container: React.FC<ContainerProps>;

export default Container;
