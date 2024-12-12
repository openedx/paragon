import React from 'react';
import { BadgeProps } from 'react-bootstrap/Badge';

interface IBadge extends BadgeProps {
  children?: React.ReactNode,
}

declare const Badge: React.ForwardRefExoticComponent<IBadge>;
export default Badge;
