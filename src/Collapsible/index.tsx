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
  /** Specifies contents of the component. */
  children: React.ReactNode;
  /** Specifies class name to append to the base element. */
  className?: string;
  /** Specifies whether the `Collapsible` should be initially open. */
  defaultOpen?: boolean;
  /** Specifies icon to show when `Collapsible` is closed. */
  iconWhenClosed?: React.ReactElement;
  /** Specifies icon to show when `Collapsible` is open. */
  iconWhenOpen?: React.ReactElement;
  /** Callback fired when `Collapsible` closes. */
  onClose?: () => void;
  /** Callback fired when `Collapsible` opens. */
  onOpen?: () => void;
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle?: (isOpen: boolean) => void;
  /** Specifies whether `Collapsible` is open. */
  open?: boolean;
  /** Specifies style variant. */
  styling?: 'basic' | 'card' | 'card-lg';
  /** Specifies title. */
  title: React.ReactNode;
  /** Unmount the component (remove it from the DOM) when it is collapsed */
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
