import React from 'react';
import classNames from 'classnames';

import { ExpandLess, ExpandMore } from '../../icons';
import CollapsibleAdvanced, { CollapsibleContext } from './CollapsibleAdvanced';
import CollapsibleBody from './CollapsibleBody';
import CollapsibleTrigger from './CollapsibleTrigger';
import CollapsibleVisible from './CollapsibleVisible';
import Icon from '../Icon';

interface StyleIcons {
  iconWhenClosed: React.ReactElement;
  iconWhenOpen: React.ReactElement;
}

const styleIcons: Record<string, StyleIcons> = {
  basic: {
    iconWhenClosed: <Icon src={ExpandMore} />,
    iconWhenOpen: <Icon src={ExpandLess} />,
  },
};

export interface CollapsibleProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  iconWhenClosed?: React.ReactElement;
  iconWhenOpen?: React.ReactElement;
  onClose?: () => void;
  onOpen?: () => void;
  onToggle?: (isOpen: boolean) => void;
  open?: boolean;
  styling?: 'basic' | 'card' | 'card-lg';
  title: React.ReactNode;
  unmountOnExit?: boolean;
}

const Collapsible = React.forwardRef<CollapsibleAdvanced, CollapsibleProps>((props, ref) => {
  const {
    children,
    className,
    title,
    styling = 'card',
    iconWhenClosed = <Icon src={ExpandMore} />,
    iconWhenOpen = <Icon src={ExpandLess} />,
    ...other
  } = props;

  const icons = { ...(styleIcons[styling] || {}), iconWhenClosed, iconWhenOpen };
  const titleElement = React.isValidElement(title) ? title : <span>{title}</span>;

  return (
    <Collapsible.Advanced
      {...other}
      className={classNames(className, `collapsible-${styling}`)}
      // @ts-ignore - ref type mismatch between class component and forwardRef
      ref={ref}
    >
      <Collapsible.Trigger className="collapsible-trigger">
        {titleElement}
        <span className="collapsible-icon">
          <Collapsible.Visible whenClosed>{icons.iconWhenClosed}</Collapsible.Visible>
          <Collapsible.Visible whenOpen>{icons.iconWhenOpen}</Collapsible.Visible>
        </span>
      </Collapsible.Trigger>

      <Collapsible.Body className="collapsible-body">{children}</Collapsible.Body>
    </Collapsible.Advanced>
  );
}) as CollapsibleComponent;

interface CollapsibleComponent extends React.ForwardRefExoticComponent<
CollapsibleProps & React.RefAttributes<CollapsibleAdvanced>
> {
  Advanced: typeof CollapsibleAdvanced;
  Body: typeof CollapsibleBody;
  Trigger: typeof CollapsibleTrigger;
  Visible: typeof CollapsibleVisible;
  Context: typeof CollapsibleContext;
}

Collapsible.Advanced = CollapsibleAdvanced;
Collapsible.Body = CollapsibleBody;
Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Visible = CollapsibleVisible;
Collapsible.Context = CollapsibleContext;

export default Collapsible;
