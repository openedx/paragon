import React from 'react';
import { ContainerProps as BaseContainerProps } from 'react-bootstrap/Container';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface ContainerProps extends BsPrefixProps, BaseContainerProps {
    children?: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

declare const Container: React.FC<ContainerProps>;

export default Container;
