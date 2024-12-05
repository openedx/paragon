import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardBody from './CardBody';

const BASE_CARD_CLASSNAME = 'card';

const BaseCard = React.forwardRef(
  (
    {
      prefix,
      className,
      bgColor,
      textColor,
      borderColor,
      hasBody,
      children,
      as: Component,
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

const colorVariants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
];

BaseCard.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: PropTypes.string,
  /** Background color of the card. */
  bgColor: PropTypes.oneOf(colorVariants),
  /** Text color of the card. */
  textColor: PropTypes.oneOf([...colorVariants, 'white', 'muted']),
  /** Border color of the card. */
  borderColor: PropTypes.oneOf(colorVariants),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: PropTypes.bool,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: PropTypes.string,
  /** The content to render inside the card. */
  children: PropTypes.node,
};

BaseCard.defaultProps = {
  prefix: undefined,
  hasBody: false,
  as: 'div',
  borderColor: undefined,
  className: undefined,
  children: undefined,
  bgColor: undefined,
  textColor: undefined,
};

export default BaseCard;
