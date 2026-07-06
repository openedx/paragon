import React from 'react';
import classNames from 'classnames';

import type { ComponentWithAsProp, BsPropsWithAs } from '../utils/types/bootstrap';

// @ts-ignore
import CardBody from './CardBody';

const BASE_CARD_CLASSNAME = 'card';

const colorVariants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
] as const;

const textVariants = [
  'white',
  'muted',
] as const;

type ColorVariant = typeof colorVariants[number];
type TextVariant = typeof textVariants[number];
interface Props extends BsPropsWithAs {
  /** Prefix for component CSS classes. */
  prefix?: string;
  /** Background color of the card. */
  bgColor?: ColorVariant;
  /** Text color of the card. */
  textColor?: ColorVariant | TextVariant;
  /** Border color of the card. */
  borderColor?: ColorVariant;
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody?: boolean;
  /** Additional CSS class names to apply to the card element. */
  className?: string;
  /** The content to render inside the card. */
  children: React.ReactNode;
}
type BaseCardType = ComponentWithAsProp<'div', Props>;

const BaseCard : BaseCardType = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      prefix,
      className,
      bgColor,
      textColor,
      borderColor,
      hasBody = false,
      children,
      as: Component = 'div',
      ...props
    },
    ref,
  ) => {
    const classes = classNames(
      className,
      prefix ? `${prefix}-${BASE_CARD_CLASSNAME}` : BASE_CARD_CLASSNAME,
      bgColor && `bg-${bgColor}`,
      textColor && `text-${textColor}`,
      borderColor && `border-${borderColor}`,
    );

    return (
      <Component ref={ref} {...props} className={classes}>
        {hasBody ? <CardBody>{children}</CardBody> : children}
      </Component>
    );
  },
);

export default BaseCard;
