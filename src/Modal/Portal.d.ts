import React from 'react';

interface PortalProps {
  children: React.ReactNode;
}

declare class Portal extends React.Component<PortalProps> {}

export default Portal;
