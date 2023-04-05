/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';

export interface ToastContainerProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/prefer-stateless-function
declare class ToastContainer extends React.Component<ToastContainerProps> {}

export default ToastContainer;
