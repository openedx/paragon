import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/index';
import ModalPopup from '../Modal/ModalPopup';
import useToggle from '../hooks/useToggle';
import Menu from '.';
import { ExpandMore } from '../../icons';

const SelectMenu = ({
  defaultMessage,
  isLink,
  children,
  ...props
}) => {
  const triggerTarget = React.useRef(null);
  const triggerRef = React.useRef(null);
  const className = classNames(props.className, 'pgn__menu-select');
  const [selected, setSelected] = useState();
  const [isOpen, open, close] = useToggle(false);
  const [vertOffset, setOffset] = useState(0);
  const link = isLink; // allow inline link styling

  const prevOpenRef = React.useRef();
  useEffect(() => {
    // logic to always center the selected item.
    if (isOpen && selected) {
      const index = parseInt(selected.id.slice(0, selected.id.indexOf('_')), 10);
      const numItems = children.length;

      const boundingRect = document.getElementById(selected.id).parentElement.getBoundingClientRect();
      if (boundingRect.bottom >= window.innerHeight - 150 || boundingRect.top <= 150) {
        setOffset(0); // if too close to the edge, don't do centering fancyness
      } else {
        switch (true) {
          case numItems < 6: {
            // on small lists, center each element
            setOffset(
              parseInt(selected.id.slice(0, selected.id.indexOf('_') + 1), 10) * -48 + 20,
            );
            break;
          }
          case index < 2: {
            // On first two elements, set offset based on position
            setOffset((index) * -48);
            break;
          }
          case numItems - index < 3: {
            // on n-1 and n-2 elelements, set offset to put most modal elements on top.
            setOffset((6 - (numItems - index)) * -48);
            break;
          }
          case index > 1 && numItems - index > 2: {
            // on "middle elements", set offset to center of block and scroll to center
            document.getElementById(selected.id).scrollIntoView({
              block: 'center',
            });
            setOffset(-125);
            break;
          }
          default: break;
        }
      }
    }
    // case: we are near the bottom and don't want to do any offset
    if (isOpen && !prevOpenRef.current && selected) {
      document.getElementById(selected.id).focus();
    }
    prevOpenRef.current = isOpen;
  });

  return React.createElement(
    className,
    {
      ...props,
      className,
    },
    <>
      <span ref={triggerTarget} />
      <Button
        aria-haspopup="true"
        aria-expanded={isOpen}
        ref={triggerRef}
        className="pgn__menu-select-trigger-btn"
        variant={link ? 'link' : 'tertiary'}
        iconAfter={link ? undefined : ExpandMore}
        onClick={open}
      >{ selected ? selected.innerText : defaultMessage}
      </Button>
      <div className="pgn__menu-select-popup">
        <ModalPopup
          placement="right-start"
          positionRef={triggerTarget}
          isOpen={isOpen}
          onClose={close}
          modifiers={
            [
              {
                name: 'flip',
                enabled: true,
              },
              {
                name: 'offset',
                options: {
                  enabled: true,
                  offset: [vertOffset, 0],
                },
              },
            ]
          }
        >
          <Menu aria-label="Select Menu">
            {React.Children.map(
              children,
              (child => React.cloneElement(child, {
                onClick(e) {
                  if (child.props.onClick) {
                    child.props.onClick(e);
                  }
                  setSelected(e.target);
                  close();
                  triggerRef.current.focus();
                },
                id: `${children.indexOf(child).toString()}_pgn__menu-item`,
                ariaCurrent:
                    selected && `${children.indexOf(child).toString()}_pgn__menu-item` === selected.id,
              })),
            )}
          </Menu>
        </ModalPopup>
      </div>
    </>,
  );
};

SelectMenu.propTypes = {
  defaultMessage: PropTypes.string,
  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SelectMenu.defaultProps = {
  defaultMessage: 'Select...',
  isLink: false,
  className: undefined,
};

export default SelectMenu;
