import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MoreVert } from '../../icons';
import {
  Button, Dropdown, useWindowSize, Icon, breakpoints,
} from '..';

export const DROPDOWN_BUTTON_TEXT = 'More actions';
export const SMALL_SCREEN_DROPDOWN_BUTTON_TEXT = 'Actions';

// eslint-disable-next-line react/prop-types
const CustomDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    variant="tertiary"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </Button>
));

const CollapsibleButtonGroup = ({
  className,
  actionData,
  actions,
}) => {
  const { width } = useWindowSize();
  const [visibleActions, dropdownActions] = useMemo(() => {
    if (width < breakpoints.small.minWidth) {
      // On a small screen, all actions will be in the overflow menu
      return [[], [...actions]];
    }
    // The first two actions will be displayed as buttons, the rest will go in an overflow menu
    const firstTwoActions = [...actions].splice(0, 2);
    const extraActions = [...actions].slice(2);

    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */
    return [firstTwoActions.reverse(), extraActions];
  }, [actions, width]);

  if (!actionData) {
    return null;
  }

  return (
    <div className={className}>
      {dropdownActions.length > 0 && (
      <Dropdown>
        <Dropdown.Toggle as={CustomDropdownToggle}>
          <Icon
            src={MoreVert}
            screenReaderText={width > breakpoints.small.minWidth
              ? DROPDOWN_BUTTON_TEXT : SMALL_SCREEN_DROPDOWN_BUTTON_TEXT}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight>
          {dropdownActions.map((action) => (
            <Dropdown.Item
              className={action.className}
              key={action.buttonText}
              onClick={() => action.handleClick(actionData)}
              disabled={action.disabled}
            >
              {action.buttonText}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      )}

      {visibleActions.map((action, idx) => {
        let { variant } = action;
        if (!variant) {
          // use the variant defined on the button if it exists, if not, use these styles.
          variant = (idx === 1 && visibleActions.length === 2) ? 'brand' : 'outline-primary';
        }

        return (
          <Button
            variant={variant}
            className={classNames('ml-2', action.className)}
            onClick={() => action.handleClick(actionData)}
            key={action.buttonText}
            disabled={action.disabled}
          >
            {action.buttonText}
          </Button>
        );
      })}
    </div>
  );
};

CollapsibleButtonGroup.defaultProps = {
  className: null,
  actionData: null,
};

CollapsibleButtonGroup.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  actionData: PropTypes.any,
  actions: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    buttonText: PropTypes.string.isRequired,
  })).isRequired,
};

export default CollapsibleButtonGroup;
