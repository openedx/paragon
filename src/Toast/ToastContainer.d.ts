import React from 'react';

export interface ToastContainerProps {
    children: React.ReactNode;
}

declare class ToastContainer extends React.Component<ToastContainerProps> {}

export default ToastContainer;
