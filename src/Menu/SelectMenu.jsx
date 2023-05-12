import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ExpandMore } from '../../icons';
import Button from '../Button';
import ModalPopup from '../Modal/ModalPopup';
import useToggle from '../hooks/useToggle';
import Menu from '.';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

export const SELECT_MENU_DEFAULT_MESSAGE = 'Select...';

function SelectMenu({
  defaultMessage,
  children,
  className,
  variant,
  disabled,
  ...props
}) {
  const [triggerTarget, setTriggerTarget] = useState(null);
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

  const prevOpenRef = React.useRef();

  useEffect(() => {
    if (isOpen && selected) {
      const numItems = children.length;
      if (numItems > 6 && selected > 1 && numItems - selected > 2) {
        // on "middle elements", set offset to center of block and scroll to center
        itemsCollection[selected].current.children[0].scrollIntoView({
          block: 'center',
        });
      }
    }
    // set focus on open
    if (isOpen && !prevOpenRef.current && selected) {
      itemsCollection[selected].current.children[0].focus({ preventScroll: (defaultIndex() === selected) });
    }
    if (focusMenuRef.current) {
      triggerTarget.focus();
      focusMenuRef.current = false;
    }
    prevOpenRef.current = isOpen;
  }, [isOpen, children.length, defaultIndex, itemsCollection, selected, triggerTarget]);

  return (
    <div className={classNames('pgn__menu-select', className)} {...props}>
      <Button
        aria-haspopup="true"
        aria-expanded={isOpen}
        ref={triggerTarget}
        variant={link ? 'link' : 'outline-primary'}
        iconAfter={ExpandMore}
        onClick={open}
        disabled={disabled}
      >
        {selected !== undefined && children[selected] ? children[selected].props.children : defaultMessage}
      </Button>
      <div className="pgn__menu-select-popup">
        <ModalPopup
          placement="bottom-start"
          positionRef={triggerTarget}
          isOpen={isOpen}
          onClose={close}
          modifiers={
            [
              {
                name: 'flip',
                options: {
                  padding: { top: 150, bottom: 150 },
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
  /** Specifies the content of the ``SelectMenu`` */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Specifies variant to use. */
  variant: PropTypes.string,
  /** Specifies if the `SelectMenu` is disabled. */
  disabled: PropTypes.bool,
};

SelectMenu.defaultProps = {
  defaultMessage: SELECT_MENU_DEFAULT_MESSAGE,
  className: undefined,
  variant: 'outline-primary',
  disabled: false,
};

const SelectMenuWithDeprecatedProp = withDeprecatedProps(SelectMenu, 'SelectMenu', {
  isLink: {
    deprType: DeprTypes.MOVED_AND_FORMAT,
    message: 'Use "variant" prop instead, i.e. variant="link"',
    newName: 'variant',
    transform: () => 'link',
  },
});

export default SelectMenuWithDeprecatedProp;
