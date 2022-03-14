import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ExpandMore, Close } from '../../icons';
import Button from '../Button/index';
import Input from '../Input';
import Chip from '../Chip';

const FormMultiselect = ({
  floatingLabel, children, hasError, errorMessage, disabled, variant,
}) => {
  const [selectField, setSelectField] = useState([]);
  const [selectItems, setSelectItems] = useState(children);
  const [selectVisible, setSelectVisible] = useState('none');
  const [filterSelect, setFilterSelect] = useState('');
  const someRef = useRef(null);
  const selectFieldBox = [...selectField];
  const selectItemsTotal = [...selectItems];
  const SELECT_ITEM_BOX_COUNT = 1;

  const setNewSelectVisibleItem = () => {
    const selectVisibleClass = selectVisible === 'none' ? 'show' : 'none';
    setSelectVisible(selectVisibleClass);
  };

  const addItemSelect = (e, element) => {
    setSelectItems(prevState => prevState.filter((item) => item !== element));
    selectFieldBox.push(element);
    setSelectField(selectFieldBox);
  };

  const returnItemSelect = (e, element) => {
    const selectItemIndex = selectFieldBox.findIndex((item) => item === element);
    setSelectItems([...selectItemsTotal, element]);
    selectFieldBox.splice(selectItemIndex, SELECT_ITEM_BOX_COUNT);
    setSelectField(selectFieldBox);
  };

  const returnItemsSelect = (e, elements) => {
    setSelectField([]);
    setSelectItems([...selectItemsTotal.concat(elements)]);
  };

  return (
    <div className={classNames('form__multiselect')}>
      <div
        className={classNames('form__multiselect-field', {
          errors: hasError,
          disabled,
        })}
      >
        {selectField.length === 0
          ? (
            <div className={classNames('form__multiselect-field--label')}>
              {floatingLabel}
            </div>
          ) : (
            <div className={classNames('form__multiselect-field--wrapper')}>
              <div className={classNames('form__multiselect-field--label-float', {
                dark: variant,
              })}
              >
                {floatingLabel}
              </div>
              {selectField.length > 0 && selectField.map((item) => (
                <Chip
                  iconAfter={Close}
                  onClick={(e) => returnItemSelect(e, item)}
                  className={classNames('form__multiselect-field--chip')}
                  key={item}
                >
                  <h4 className={classNames('form__multiselect-field--chip-title')}>
                    {item}
                  </h4>
                </Chip>
              ))}
              <Input
                className={classNames('form__multiselect-search')}
                type="text"
                value={filterSelect}
                onChange={(e) => setFilterSelect(e.target.value)}
              />
            </div>
          )}
        <Button
          className={classNames(`form__multiselect-field--hide-btn ${selectVisible}`)}
          iconAfter={Close}
          onClick={(e) => returnItemsSelect(e, selectField)}
        />
        <Button
          className={classNames('form__multiselect-field--show-btn')}
          onClick={setNewSelectVisibleItem}
          iconAfter={ExpandMore}
        />
      </div>
      <span className={classNames('form__multiselect-field-error', {
        errors: hasError,
      })}
      >
        {errorMessage}
      </span>
      <div className={classNames(`form__multiselect-items ${selectVisible}`)}>
        {selectItems.map((item) => {
          if (item.includes(filterSelect)) {
            return (
              <button
                className={classNames('form__multiselect-item ')}
                key={item}
                type="button"
                ref={someRef}
                onClick={(e) => {
                  addItemSelect(e, item, someRef);
                  setFilterSelect('');
                }}
              >
                {item}
              </button>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

FormMultiselect.propTypes = {
  /** Specifies floating label to display for the select component. */
  floatingLabel: PropTypes.node,
  /** Specifies the contents of the option rows */
  children: PropTypes.arrayOf(PropTypes.string),
  /** Informs user if this `Step` has errors. */
  hasError: PropTypes.bool,
  /** Error message text. */
  errorMessage: PropTypes.string,
  /** Specifies whether the `Multiselect` is disabled. */
  disabled: PropTypes.bool,
  /** The Multiselect style variant to use */
  variant: PropTypes.bool,
};

FormMultiselect.defaultProps = {
  floatingLabel: 'Label',
  children: [],
  hasError: false,
  errorMessage: 'Error text',
  disabled: false,
  variant: false,
};

export default FormMultiselect;
