import * as React from 'react';

interface PortalProps {
  // eslint-disable-next-line react/no-unused-prop-types
  children: React.ReactNode;
}

// eslint-disable-next-line react/prefer-stateless-function
declare class Portal extends React.Component<PortalProps> {}

export default Portal;
