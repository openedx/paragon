import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FocusOn } from 'react-focus-on';

import SheetContainer from './SheetContainer';

export const POSITIONS = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
};

export const VARIANTS = {
  light: 'light',
  dark: 'dark',
};

class Sheet extends React.Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.renderSheet = this.renderSheet.bind(this);
  }

  renderSheet() {
    const {
      children, position, variant, sheetClassName,
    } = this.props;
    return (
      <div
        className={classNames(
          'pgn__sheet-component',
          `pgn__sheet__${variant}`,
          position,
          sheetClassName,
        )}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="pgn__sheet-content">
          { children }
        </div>
      </div>
    );
  }

  render() {
    const {
      blocking,
      show,
      onClose,
      className,
    } = this.props;
    if (!show) {
      return null;
    }
    return (
      <SheetContainer className={classNames(className)}>
        <div
          className={classNames(
            'pgn__sheet-skrim',
            { hidden: !blocking },
          )}
          role="presentation"
        />
        <FocusOn
          onClickOutside={blocking ? () => {} : onClose}
          onEscapeKey={blocking ? () => {} : onClose}
          shards={[this.wrapperRef]}
        >
          {this.renderSheet()}
        </FocusOn>
      </SheetContainer>
    );
  }
}

Sheet.propTypes = {
  /** specifies whether the sheet provides a click-blocking scrim */
  blocking: PropTypes.bool,
  /** an element rendered inside the sheet */
  children: PropTypes.node,
  /** a string designating the sheet's position on the window */
  position: PropTypes.oneOf([
    POSITIONS.left,
    POSITIONS.right,
    POSITIONS.top,
    POSITIONS.bottom,
  ]),
  /** Boolean used to control whether the Sheet shows. */
  show: PropTypes.bool,
  /** Specifies function that controls `show` value. */
  onClose: PropTypes.func,
  /** a string designating which version of the sheet to show (light vs dark) */
  variant: PropTypes.oneOf([VARIANTS.light, VARIANTS.dark]),
  /** A class that is appended to the base element. */
  className: PropTypes.string,
  /** A class that is appended to the sheet element. */
  sheetClassName: PropTypes.string,
};

Sheet.defaultProps = {
  blocking: false,
  children: undefined,
  position: POSITIONS.bottom,
  show: true,
  onClose: () => {},
  variant: VARIANTS.light,
  className: undefined,
  sheetClassName: undefined,
};

export default Sheet;
