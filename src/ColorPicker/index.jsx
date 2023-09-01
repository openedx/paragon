import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HexColorPicker } from 'react-colorful';

import Button from '../Button';
import Form from '../Form';
import ModalPopup from '../Modal/ModalPopup';
import { OverlayTrigger } from '../Overlay';
import Tooltip from '../Tooltip';
import useToggle from '../hooks/useToggle';

function ColorPicker({
                         color, setColor, className, size,
                     }) {
    const [isOpen, open, close] = useToggle(false);
    const [target, setTarget] = React.useState(null);

    const colorIsValid = (colorToValidate) => {
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexRegex.test(colorToValidate);
    };

    const formatHexColorString = (colorString) => {
        if (!colorString.startsWith('#')) {
            return `#${colorString}`.slice(0, 7);
        }

        return colorString.slice(0, 7);
    };

    const [hexValid, setHexValid] = React.useState(() => (color === '' || colorIsValid(formatHexColorString(color))));

    const [hexColorString, setHexColorString] = React.useState(() => {
        if (color === '') {
            return '';
        }

        return formatHexColorString(color);
    });
    const [colorToDisplay, setColorToDisplay] = React.useState(() => {
        const formattedColor = formatHexColorString(color);
        if (colorIsValid(formattedColor)) {
            return formattedColor;
        }

        return '#fff';
    });

    const setValidatedColor = (newColor) => {
        if (newColor === '') {
            setHexValid(true);
            setColor('');
            setHexColorString('');
            setColorToDisplay('#fff');
            return;
        }

        const formattedColor = formatHexColorString(newColor);

        if (colorIsValid(formattedColor)) {
            setHexValid(true);
            setColor(formattedColor);
            setHexColorString(formattedColor);
            setColorToDisplay(formattedColor);
            return;
        }

        setHexValid(false);
        setHexColorString(formattedColor);

        // ensure the picker value stays in sync with the textbox
        setColor(formattedColor);
    };

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
                    <HexColorPicker color={colorToDisplay} onChange={setValidatedColor} />
                    <Form.Group className="pgn__hex-form" size="sm">
                        <h5>Hex</h5>
                            <Form.Control
                                className="form-field"
                                isInvalid={!hexValid}
                                value={hexColorString}
                                onChange={(e) => setValidatedColor(e.target.value)}
                                data-testid="hex-input"
                                spellCheck="false"
                            />
                        </div>
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
