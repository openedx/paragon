import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ExpandMore} from '../../icons';
import Button from '../Button/index';
import Input from '../Input';
import Chip from '../Chip';
import {Close} from '@edx/paragon/icons'
import FormControlFloatingLabel from './FormControlFloatingLabel';

const FormMultiselect = ({floatingLabel, selectOptionsData}) => {
    const [selectField, setSelectField] = useState([]),
        [selectItems, setSelectItems] = useState(selectOptionsData),
        [selectVisible, setSelectVisible] = useState('none'),
        [filterSelect, setFilterSelect] = useState(''),
        someRef = useRef(null),
        selectFieldBox = [...selectField],
        selectItemsTotal = [...selectItems],
        SELECT_ITEM_BOX_COUNT = 1;

    function setNewSelectVisibleItem() {
        let selectVisibleClass = selectVisible === 'none' ? 'show' : 'none';
        setSelectVisible(selectVisibleClass);
    }

    function addItemSelect(e, element, ref) {
        setSelectItems(prevState => prevState.filter((item) => {
            return item !== element;
        }));

        selectFieldBox.push(element);
        setSelectField(selectFieldBox);
    }

    function returnItemSelect(e, element) {
        let selectItemIndex = selectFieldBox.findIndex((item) => {
            return item === element;
        });

        setSelectItems([...selectItemsTotal, element]);
        selectFieldBox.splice(selectItemIndex, SELECT_ITEM_BOX_COUNT);
        setSelectField(selectFieldBox);
    }

    function searchSelectItems(e) {
        setFilterSelect(e.target.value);
    }

    return (
        <div className={classNames('form__multiselect')}>
            <div className={classNames('form__multiselect-field')}>
                {selectField.length === 0 &&
                    <FormControlFloatingLabel className={classNames('form__multiselect-field--lable')}>
                        {floatingLabel}
                    </FormControlFloatingLabel>
                }
                {selectField.length > 0 &&
                    <div className={classNames('form__multiselect-field--wrapper')}>
                        {selectField.length > 0 && selectField.map((item, index) => {
                            return <Chip
                                iconAfter={Close}
                                onClick={(e) => returnItemSelect(e, item)}
                                className={classNames('form__multiselect-field--chip')}
                                key={index + item + 'is'}
                            >
                                <h4 className={classNames('form__multiselect-field--chip-title')}>
                                    {item}
                                </h4>
                            </Chip>
                        })}
                        <Input
                            className={classNames('form__multiselect-search')}
                            type='text'
                            value={filterSelect}
                            onChange={searchSelectItems}
                        />
                    </div>
                }
                <Button
                    className={classNames('form__multiselect-field--btn')}
                    onClick={setNewSelectVisibleItem}
                    iconAfter={ExpandMore}>
                </Button>
            </div>
            <div className={classNames('form__multiselect-items' + ' noflex ' + selectVisible)}>
                {selectItems.map((item, index) => {
                    if (item.includes(filterSelect))
                        return <div
                            className={classNames('form__multiselect-item ')}
                            key={index + item}
                            ref={someRef}
                            onClick={(e) => {
                                addItemSelect(e, item, someRef);
                            }}>
                            <span>{item}</span>
                        </div>
                })}
            </div>
        </div>
    );
}

FormMultiselect.propTypes = {
    floatingLabel: PropTypes.node,
    selectOptionsData: PropTypes.array,
};

FormMultiselect.defaultProps = {
    floatingLabel: 'Label',
    selectOptionsData: undefined
};

export default FormMultiselect;
