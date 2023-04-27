import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ExpandMore } from '../../icons';
import Button from '../Button';
import ModalPopup from '../Modal/ModalPopup';
import useToggle from '../hooks/useToggle';
import Menu from '.';

export const SELECT_MENU_DEFAULT_MESSAGE = 'Select...';

function SelectMenu({
  defaultMessage,
  isLink,
  children,
  className,
  ...props
}) {
  const triggerTarget = React.useRef(null);
  // this ref is used to focus the menu open button after any menu option is clicked.
  // triggerTarget.current.focus() inside the onCLick() function didn't guarantee element focus.
  const focusMenuRef = React.useRef(false);
  const itemsCollection = React.useMemo(
    () => Array.from({ length: children.length }).map(() => React.createRef()),
    [children.length],
  );

  const defaultIndex = useCallback(() => {
    for (let i = 0; i < children.length; i++) {
      if (children[i].props && children[i].props.defaultSelected) {
        return i;
      }
    }
    return undefined;
  }, [children]);

  const [selected, setSelected] = useState(defaultIndex());
  const [isOpen, open, close] = useToggle(false);
  const [vertOffset, setOffset] = useState(0);

  const createMenuItems = () => React.Children.map(children, (child, index) => {
    const newProps = {
      onClick(e) {
        if (child.props.onClick) {
          child.props.onClick(e);
        }
        setSelected(index);
        close();
        focusMenuRef.current = true;
      },
      id: `${index.toString()}_pgn__menu-item`,
      role: 'link',
    };
    if (selected === index) {
      newProps['aria-current'] = 'page';
    }
    return React.cloneElement(child, newProps);
  });

  const link = isLink; // allow inline link styling
  const prevOpenRef = React.useRef();

  useEffect(() => {
    // logic to always center the selected item.
    if (isOpen && selected) {
      const numItems = children.length;
      const boundingRect = itemsCollection[selected].current.parentElement.getBoundingClientRect();
      if (boundingRect.bottom >= window.innerHeight - 150 || boundingRect.top <= 150) {
        setOffset(0); // if too close to the edge, don't do centering fancyness
      } else {
        switch (true) {
          case numItems < 6: {
            // on small lists, center each element
            setOffset(
              (selected) * -48,
            );
            break;
          }
          case selected < 2: {
            // On first two elements, set offset based on position
            setOffset((selected) * -48);
            break;
          }
          case numItems - selected < 3: {
            // on n-1 and n-2 elelements, set offset to put most modal elements on top.
            setOffset((6 - (numItems - selected)) * -48);
            break;
          }
          case selected > 1 && numItems - selected > 2: {
            // on "middle elements", set offset to center of block and scroll to center
            itemsCollection[selected].current.children[0].scrollIntoView({
              block: 'center',
            });
            setOffset(2 * -48);
            break;
          }
          default: break;
        }
      }
    }
    // set focus on open
    if (isOpen && !prevOpenRef.current && selected) {
      itemsCollection[selected].current.children[0].focus({ preventScroll: (defaultIndex() === selected) });
    }
    if (focusMenuRef.current) {
      triggerTarget.current.focus();
      focusMenuRef.current = false;
    }
    prevOpenRef.current = isOpen;
  }, [isOpen, children.length, defaultIndex, itemsCollection, selected]);

  return (
    <div className={classNames('pgn__menu-select', className)} {...props}>
      <Button
        aria-haspopup="true"
        aria-expanded={isOpen}
        ref={triggerTarget}
        className="pgn__menu-select-trigger-btn"
        variant={link ? 'link' : 'tertiary'}
        iconAfter={link ? undefined : ExpandMore}
        onClick={open}
      >
        {selected !== undefined && children[selected] ? children[selected].props.children : defaultMessage}
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
                  offset: [vertOffset, triggerTarget.current ? -1 * triggerTarget.current.offsetWidth : 0],
                },
              },
            ]
          }
        >
          <Menu aria-label="Select Menu">
            {createMenuItems().map((child, index) => (
              <div key={child.props.id} ref={itemsCollection[index]}>
                {child}
              </div>
            ))}
          </Menu>
        </ModalPopup>
      </div>
    </div>
  );
}

SelectMenu.propTypes = {
  /** String that is displayed for default value of the ``SelectMenu`` */
  defaultMessage: PropTypes.string,
  /** Displays chosen value of the ``SelectMenu`` as a link */
  isLink: PropTypes.bool,
  /** Specifies the content of the ``SelectMenu`` */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
};

SelectMenu.defaultProps = {
  defaultMessage: SELECT_MENU_DEFAULT_MESSAGE,
  isLink: false,
  className: undefined,
};

export default SelectMenu;
