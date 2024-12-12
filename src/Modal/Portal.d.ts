import React from 'react';

export interface PortalProps {
    children: React.ReactNode;
}

declare class Portal extends React.Component<PortalProps> {}

export default Portal;
