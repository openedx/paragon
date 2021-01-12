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
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    href=""
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

const BulkActions = ({
  actions, selectedRows, className, ...rest
}) => {
  const { width } = useWindowSize();
  const [visibleActions, dropdownActions] = useMemo(() => {
    const buttonActions = [...actions];
    if (width < breakpoints.small.minWidth) {
      return [[], buttonActions];
    }
    let firstTwoActions = [];
    let extraActions = [];
    if (buttonActions.length <= 2) {
      firstTwoActions = buttonActions;
    } else {
      firstTwoActions = buttonActions.splice(0, 2);
      extraActions = buttonActions;
    }
    /*  Reversing the array because to the user it makes sense to put the primary button first,
        but we want it on the right */
    return [firstTwoActions.reverse(), extraActions];
  }, [actions, width]);

  return (
    <div className={`pgn__bulk-actions ${className}`} {...rest}>
      {dropdownActions.length > 0 && (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
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
              onClick={() => action.handleClick(selectedRows)}
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
            className={classNames({
              [action.className]: action.className,
              'ml-2': true,
            })}
            onClick={() => action.handleClick(selectedRows)}
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

BulkActions.defaultProps = {
  className: '',
};

BulkActions.propTypes = {
  /** Bulk actions to be performed on the selected rows */
  actions: PropTypes.arrayOf(PropTypes.shape({
    /** Bulk action button text */
    buttonText: PropTypes.string.isRequired,
    /** handleClick will be passed the selected rows */
    handleClick: PropTypes.func.isRequired,
    /** classnames for button class */
    className: PropTypes.string,
    /** optional button variant; only relevant for the first two buttons */
    variant: PropTypes.string,
    /** disables button */
    disabled: PropTypes.disabled,
  })).isRequired,
  /** User selected rows that actions will be performed on */
  selectedRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /** class names for the div wrapping the button components */
  className: PropTypes.string,
};

export default BulkActions;
