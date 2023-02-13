import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HexColorPicker } from 'react-colorful';

import {
  Button,
  Form,
  ModalPopup,
  OverlayTrigger,
  Tooltip,
  useToggle,
} from '..';

function ColorPicker({
  color, setColor, className, size,
}) {
  const [isOpen, open, close] = useToggle(false);
  const [target, setTarget] = React.useState(null);
  const [hexValid, setHexValid] = React.useState(true);

  const validateHex = useCallback((input) => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (input.length > 1 && !input.startsWith('#')) {
      setColor(`#${input}`);
    } else {
      setColor(input);
    }
    if (input === '' || hexRegex.test(input) === true) {
      setHexValid(true);
    } else {
      setHexValid(false);
    }
  }, [setColor]);

  // this is needed for when a user changes the color through the sliders
  useEffect(() => validateHex(color), [validateHex, color]);

  return (
    <>
      <span className="d-flex">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="color-picker-tooltip">Color picker</Tooltip>}
        >
          <Button
            ref={setTarget}
            className={classNames(
              className,
              'pgn__color-picker',
              `pgn__color-picker-${size}`,
            )}
            style={{
              ...(color && hexValid ? { background: `${color}` } : {}),
            }}
            onClick={open}
          />
        </OverlayTrigger>
      </span>
      <ModalPopup
        positionRef={target}
        isOpen={isOpen}
        style={{ background: 'black' }}
        onClose={close}
      >
        <div
          className="pgn__color-modal rounded shadow"
          style={{ textAlign: 'start' }}
        >
          <HexColorPicker color={color || ''} onChange={setColor} />
          <Form.Group className="pgn__hex-form" size="sm">
            <h5>Hex</h5>
            <Form.Control
              className="form-field"
              isInvalid={!hexValid}
              value={color}
              onChange={(e) => validateHex(e.target.value)}
              data-testid="hex-input"
            />
            {!hexValid && (
              <Form.Control.Feedback
                className="pgn__color-error"
                type="invalid"
              >
                Colors must be in hexadecimal format.
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </div>
      </ModalPopup>
    </>
  );
}

ColorPicker.defaultProps = {
  color: '',
  className: undefined,
  size: 'md',
};

ColorPicker.propTypes = {
  /** A default hex code to preset the picker to display. */
  color: PropTypes.string,
  /** Passing setState function allows parent to alter the color. */
  setColor: PropTypes.func.isRequired,
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Size of the color picker */
  size: PropTypes.oneOf(['sm', 'md']),
};

export default ColorPicker;
