import React from 'react';
import PropTypes from 'prop-types';

import { OverlayTrigger } from '../';
import InteractiveIcon from './InteractiveIcon';


const IconButton = ({
  alt,
  invertColors,
  icon,
  iconClassNames,
  onClick,
  overlay,
  overlayPlacement,
  variant,
}) => {
  const iconProps = {
    alt,
    invertColors,
    icon,
    iconClassNames,
    onClick,
    key: icon.iconName,
    variant,
  };
  const overlayTrigger = ['hover', 'focus'];
  // if there's not a click handler, click should trigger the popover;
  if (!onClick) {
    overlayTrigger.push('click');
  }

  if (overlay) {
    return (
      <OverlayTrigger
        trigger={overlayTrigger}
        placement={overlayPlacement}
        flip
        overlay={overlay}
      >
        <div className="iconbutton-refwrapper">
          <InteractiveIcon {...iconProps} />
        </div>
      </OverlayTrigger>
    );
  }
  return (<InteractiveIcon {...iconProps} />);
};

IconButton.defaultProps = {
  overlayPlacement: 'right',
  iconClassNames: '',
  onClick: null,
  invertColors: false,
  overlay: null,
  variant: 'primary',
};

IconButton.propTypes = {
  /** Alt text for your icon  */
  alt: PropTypes.string.isRequired,
  /** Changes icon styles for dark background */
  invertColors: PropTypes.bool,
  /** Accepts a React fontawesome icon. https://fontawesome.com/how-to-use/on-the-web/using-with/react */
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.array,
  }).isRequired,
  /** Extra class names that will be added to the icon */
  iconClassNames: PropTypes.string,
  /** Click handler for the button */
  onClick: PropTypes.func,
  overlay: PropTypes.node,
  /** Location of overlay relative to the icon */
  overlayPlacement: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  /** Type of button (uses Bootstrap options) */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
};

export default IconButton;
