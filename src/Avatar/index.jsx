import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import defaultAvatar from './default-avatar.svg';

const Avatar = ({
  alt,
  size,
  src,
  ...attrs
}) => (
  <div
    {...attrs}
    className={classNames(
      'pgn__avatar',
      `pgn__avatar-${size}`,
      attrs.className,
    )}
  >
    <img src={src || defaultAvatar} alt={alt} />
  </div>
);

Avatar.propTypes = {
  /** Alt text. Usually the user's name */
  alt: PropTypes.string,
  /** Size of the avatar */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Image src of the avatar image */
  src: PropTypes.string,
};

Avatar.defaultProps = {
  alt: '',
  size: 'md',
  src: undefined,
};

export default Avatar;
