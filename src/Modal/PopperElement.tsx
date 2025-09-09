import { Placement, PositioningStrategy, VirtualElement } from '@popperjs/core';
import React, { useState } from 'react';
import { Modifier, usePopper } from 'react-popper';

function PopperElement({
  children,
  target,
  strategy = 'absolute',
  placement = 'bottom-start',
  modifiers = [
    {
      name: 'flip',
      enabled: true,
    },
    {
      name: 'preventOverflow',
      options: {
        tether: false,
      },
    },
  ],
}: PopperElementProps) {
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const popperOptions = { modifiers, strategy, placement };
  const {
    styles,
    attributes,
  } = usePopper(target, popperElement, popperOptions);

  if (!target) {
    return null;
  }

  return (
    <div ref={setPopperElement} style={{ ...styles.popper, zIndex: 2000 }} {...attributes.popper}>
      {children}
    </div>
  );
}

export interface PopperElementProps {
  children?: React.ReactNode,
  target?: Element | VirtualElement | null,
  strategy?: PositioningStrategy,
  placement?: Placement,
  modifiers?: Array<Modifier<string>>;
}

export default PopperElement;
