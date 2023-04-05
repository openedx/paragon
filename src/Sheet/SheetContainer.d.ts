/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';

export interface SheetContainerProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/prefer-stateless-function
declare class SheetContainer extends React.Component<SheetContainerProps> {}

export default SheetContainer;
