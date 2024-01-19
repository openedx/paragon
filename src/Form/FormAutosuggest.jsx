import React, {
  useEffect, useState, useRef, forwardRef, useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useIntl } from 'react-intl';
import { requiredWhen } from '../utils/propTypes';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormControl from './FormControl';
import FormControlFeedback from './FormControlFeedback';
import IconButton from '../IconButton';
import Spinner from '../Spinner';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';
import messages from './messages';

const FormAutosuggest = forwardRef(
  (
    {
      children,
      arrowKeyNavigationSelector,
      ignoredArrowKeysNames,
      screenReaderText,
      value,
      isLoading,
      isValueRequired,
      valueRequiredErrorMessageText,
      isSelectionRequired,
      selectionRequiredErrorMessageText,
      hasCustomError,
      customErrorMessageText,
      onChange,
      helpMessage,
      ...props
    },
    ref,
  ) => {
    const intl = useIntl();
    const formControlRef = useRef();
    const parentRef = useArrowKeyNavigation({
      selectors: arrowKeyNavigationSelector,
      ignoredKeys: ignoredArrowKeysNames,
    });
    const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [hasSelection, setHasSelection] = useState(false);
    const [displayValue, setDisplayValue] = useState(value?.userProvidedText || '');
    const [dropdownItems, setDropdownItems] = useState([]);
    const [activeMenuItemId, setActiveMenuItemId] = useState(null);
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleMenuItemFocus = (menuItemId) => {
      setActiveMenuItemId(menuItemId);
    };

    const collapseDropdown = () => {
      setDropdownItems([]);
      setIsDropdownExpanded(false);
      setActiveMenuItemId(null);
    };

    const handleItemSelect = (e, onClick) => {
      const selectedValue = e.currentTarget.getAttribute('data-value');
      const selectedId = e.currentTarget.id;

      setHasValue(true);
      setHasSelection(true);
      setDisplayValue(selectedValue);

      if (onChange && (!value || (value && selectedValue !== value.selectionValue))) {
        onChange({
          userProvidedText: selectedValue,
          selectionValue: selectedValue,
          selectionId: selectedId,
        });
      }

      collapseDropdown();

      if (onClick) {
        onClick(e);
      }
    };

    function getItems(strToFind = '') {
      let childrenOpt = React.Children.map(children, (child) => {
        const { children: childChildren, onClick, ...rest } = child.props;
        const menuItemId = child.props.id ?? uuidv4();

        return React.cloneElement(child, {
          ...rest,
          childChildren,
          'data-value': childChildren,
          onClick: (e) => handleItemSelect(e, onClick),
          id: menuItemId,
          onFocus: () => handleMenuItemFocus(menuItemId),
        });
      });

      if (strToFind.length > 0) {
        childrenOpt = childrenOpt
          .filter((opt) => (opt.props.children.toLowerCase().includes(strToFind.toLowerCase())));
      }

      return childrenOpt;
    }

    const expandDropdown = () => {
      setDropdownItems(getItems(displayValue));
      setIsValid(true);
      setErrorMessage('');
      setIsDropdownExpanded(true);
    };

    const toggleDropdown = () => {
      if (isDropdownExpanded) {
        collapseDropdown();
      } else {
        expandDropdown();
      }
    };

    const iconToggle = (
      <IconButton
        className="pgn__form-autosuggest__icon-button"
        data-testid="autosuggest-iconbutton"
        tabIndex="-1"
        src={isDropdownExpanded ? KeyboardArrowUp : KeyboardArrowDown}
        iconAs={Icon}
        size="sm"
        variant="secondary"
        alt={isDropdownExpanded
          ? intl.formatMessage(messages.iconButtonClosed)
          : intl.formatMessage(messages.iconButtonOpened)}
        onClick={toggleDropdown}
      />
    );

    const enterControl = () => {
      setIsActive(true);
    };

    const updateErrorStateAndErrorMessage = () => {
      if (hasCustomError) {
        setIsValid(false);
        setErrorMessage(customErrorMessageText);
        return;
      }

      if (isValueRequired && !hasValue) {
        setIsValid(false);
        setErrorMessage(valueRequiredErrorMessageText);
        return;
      }

      if (hasValue && isSelectionRequired && !hasSelection) {
        setIsValid(false);
        setErrorMessage(selectionRequiredErrorMessageText);
        return;
      }

      setIsValid(true);
      setErrorMessage('');
    };

    useImperativeHandle(ref, () => ({
      // expose updateErrorStateAndErrorMessage so consumers can trigger validation
      // when changing the value of the control externally
      updateErrorStateAndErrorMessage,
    }));

    const leaveControl = () => {
      setIsActive(false);
      collapseDropdown();
      updateErrorStateAndErrorMessage();
    };

    const keyDownHandler = e => {
      if (!isActive) {
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();

        if (formControlRef) {
          formControlRef.current.focus();
        }

        collapseDropdown();
        return;
      }

      if (e.key === 'Tab') {
        leaveControl();
      }
    };

    const handleDocumentClick = (e) => {
      if (parentRef.current && !parentRef.current.contains(e.target) && isActive) {
        leaveControl();
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', keyDownHandler);
      document.addEventListener('click', handleDocumentClick, true);

      return () => {
        document.removeEventListener('click', handleDocumentClick, true);
        document.removeEventListener('keydown', keyDownHandler);
      };
    });

    useEffect(() => {
      setDisplayValue(value ? value.userProvidedText ?? '' : '');
      setHasValue(!!value && !!value.userProvidedText);
      setHasSelection(!!value && !!value.selectionValue);
    }, [value]);

    const handleTextboxClick = () => {
      expandDropdown();
    };

    const handleTextInput = (e) => {
      const userProvidedText = e.target.value;

      // If the user has removed all text from the textbox
      if (!userProvidedText.length) {
      // reset to a "no text, nothing selected" state
        setDisplayValue('');
        setHasValue(false);
        setHasSelection(false);

        // clear and close the dropdown
        setDropdownItems([]);
        collapseDropdown();

        // if the consumer has provided an onChange handler
        if (onChange) {
        // send a default empty object
          onChange({
            userProvidedText: '',
            selectionValue: '',
            selectionId: '',
          });
        }
        return;
      }

      // the user has entered text, we have a value
      setHasValue(true);

      // filter dropdown based on entered text
      const filteredItems = getItems(userProvidedText);
      setDropdownItems(filteredItems);

      // check for matches in the dropdown
      const matchingDropdownItem = filteredItems.find((o) => (
        o.props.children.toLowerCase() === userProvidedText.toLowerCase()
      ));

      // if we didn't find a match
      if (!matchingDropdownItem) {
      // no match means no selection
        setHasSelection(false);

        // set the text in the state
        setDisplayValue(userProvidedText);

        // if the consumer has provided an onChange handler
        if (onChange) {
        // send an object with the user provided text only
          onChange({
            userProvidedText,
            selectionValue: '',
            selectionId: '',
          });
        }
        return;
      }

      // we found a match, we have a selection!
      setHasSelection(true);

      // set the display value based on the item in the dropdown
      // this matters because we match case insensitively
      setDisplayValue(matchingDropdownItem.props.children);

      // if the consumer has provided an onChange handler
      if (onChange) {
      // send an object with the selected item values
        onChange({
          userProvidedText: matchingDropdownItem.props.children,
          selectionValue: matchingDropdownItem.props.children,
          selectionId: matchingDropdownItem.props.id,
        });
      }
    };

    const { getControlProps } = useFormGroupContext();
    const controlProps = getControlProps(props);

    return (
      <div className="pgn__form-autosuggest__wrapper" ref={parentRef} onFocus={enterControl}>
        <div aria-live="assertive" className="sr-only" data-testid="autosuggest-screen-reader-options-count">
          {`${dropdownItems.length} options found`}
        </div>
        <FormGroupContextProvider
          controlId={controlProps.id}
          isInvalid={!isValid}
        >
          <FormControl
            ref={formControlRef}
            aria-expanded={(dropdownItems.length > 0).toString()}
            aria-owns="pgn__form-autosuggest__dropdown-box"
            role="combobox"
            aria-autocomplete="list"
            autoComplete="off"
            value={displayValue}
            aria-invalid={errorMessage}
            aria-activedescendant={activeMenuItemId}
            onChange={handleTextInput}
            onClick={handleTextboxClick}
            trailingElement={iconToggle}
            data-testid="autosuggest-textbox-input"
            {...controlProps}
          />

          {helpMessage && isValid && (
          <FormControlFeedback type="default">
            {helpMessage}
          </FormControlFeedback>
          )}

          {!isValid && (
          <FormControlFeedback type="invalid" feedback-for={controlProps.name}>
            {errorMessage}
          </FormControlFeedback>
          )}
        </FormGroupContextProvider>
        <ul
          id="pgn__form-autosuggest__dropdown-box"
          className="pgn__form-autosuggest__dropdown"
          role="listbox"
        >
          {isLoading ? (
            <div className="pgn__form-autosuggest__dropdown-loading">
              <Spinner
                animation="border"
                variant="dark"
                screenReaderText={screenReaderText}
                data-testid="autosuggest-loading-spinner"
              />
            </div>
          ) : dropdownItems.length > 0 && dropdownItems}
        </ul>
      </div>
    );
  },
);

FormAutosuggest.defaultProps = {
  arrowKeyNavigationSelector: 'a:not(:disabled),li:not(:disabled, .btn-icon),input:not(:disabled)',
  ignoredArrowKeysNames: ['ArrowRight', 'ArrowLeft'],
  isLoading: false,
  className: null,
  floatingLabel: null,
  onChange: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  isValueRequired: false,
  valueRequiredErrorMessageText: null,
  isSelectionRequired: false,
  selectionRequiredErrorMessageText: null,
  hasCustomError: false,
  customErrorMessageText: null,
  readOnly: false,
  children: null,
  name: 'form-autosuggest',
  screenReaderText: 'loading',
};

FormAutosuggest.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: PropTypes.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: PropTypes.arrayOf(PropTypes.string),
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: PropTypes.string,
  /** Specifies onChange event handler. */
  onChange: PropTypes.func,
  /** Specifies help information for the user. */
  helpMessage: PropTypes.string,
  /** Specifies the placeholder text for the input. */
  placeholder: PropTypes.string,
  /** Specifies values for the input. */
  value: PropTypes.shape({
    userProvidedText: PropTypes.string,
    selectionValue: PropTypes.string,
    selectionId: PropTypes.string,
  }),
  /** Specifies if empty values trigger an error state */
  isValueRequired: PropTypes.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: requiredWhen(PropTypes.string, 'isValueRequired'),
  /** Specifies if freeform values trigger an error state */
  isSelectionRequired: PropTypes.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: requiredWhen(PropTypes.string, 'isSelectionRequired'),
  /** Specifies the control is in a consumer provided error state */
  hasCustomError: PropTypes.bool,
  /** Informs user of other errors. */
  customErrorMessageText: requiredWhen(PropTypes.string, 'hasCustomError'),
  /** Specifies the name of the base input element. */
  name: PropTypes.string,
  /** Selected list item is read-only. */
  readOnly: PropTypes.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: PropTypes.node,
  /** Specifies the screen reader text */
  screenReaderText: PropTypes.string,
};

export default FormAutosuggest;
