import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { useDrop } from 'react-dnd';
import { Alert, Form, Sheet, IconButton, Icon } from '~paragon-react';
import { Close } from '~paragon-icons';

const initialSheetOptions = {
  show: false,
  uuid: undefined,
  playgroundConfig: {},
  availableOptions: {},
  defaultProps: {},
  currentProps: {},
};

const Dropzone = () => {
  const [sheetOptions, setSheetOptions] = useState(initialSheetOptions);
  const [droppedItems, setDroppedItems] = useState([]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'draggableComponentListItem',
    drop: (item) => {
      const newDroppedItem = {
        uuid: uuidv4(),
        Component: item,
        currentProps: {},
      };
      setDroppedItems(prevDroppedItems => [...prevDroppedItems, newDroppedItem]);
    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }));

  const handleDroppedItemClick = (item) => {
    const { uuid, Component, currentProps } = item;
    const { playgroundConfig, defaultProps } = Component;
    const { availableOptions } = playgroundConfig;

    if (!availableOptions || availableOptions.length === 0) { return; }

    setSheetOptions({
      ...initialSheetOptions,
      show: true,
      uuid,
      playgroundConfig,
      availableOptions,
      defaultProps,
      currentProps,
    });
  };

  const handleSheetOptionsClose = () => {
    setSheetOptions(initialSheetOptions);
  };

  const handleSelectOptionChange = (e, options) => {
    const selectedValue = e.target.value;
    const updatedDroppedItems = [...droppedItems];
    const foundDroppedItemIndex = droppedItems.findIndex(item => item.uuid === options.uuid);
    if (foundDroppedItemIndex !== -1) {
      const updatedItem = droppedItems[foundDroppedItemIndex];
      updatedItem.currentProps[options.key] = selectedValue;
      updatedDroppedItems[foundDroppedItemIndex] = updatedItem;
      setDroppedItems(updatedDroppedItems);
    }
  };

  const handleNodeInputChange = (e, options) => {
    const nodeValue = e.target.value;
    const updatedDroppedItems = [...droppedItems];
    const foundDroppedItemIndex = droppedItems.findIndex(item => item.uuid === options.uuid);
    if (foundDroppedItemIndex !== -1) {
      const updatedItem = droppedItems[foundDroppedItemIndex];
      updatedItem.currentProps[options.key] = [nodeValue];
      console.log('handleNodeInputChange', updatedItem);
      updatedDroppedItems[foundDroppedItemIndex] = updatedItem;
      setDroppedItems(updatedDroppedItems);
    }
  };

  return (
    <div className="w-100 d-flex">
      <div
        className={classNames('w-100 h-100 p-5', {
          'bg-light-200': !isOver,
          'bg-light-400': isOver,
        })}
        ref={drop}
        style={{ overflowY: 'scroll' }}
      >
        {droppedItems.length === 0 && (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            Try dragging some component to start coding without code!
          </div>
        )}
        {droppedItems.map((item) => {
          const { uuid, Component, currentProps } = item;
          const { children: currentChildren } = currentProps;
          const { playgroundConfig } = Component;
          const { initialProps = {} } = playgroundConfig;
          const { children: initialChildren } = initialProps;
          return (
            <Component key={uuid} {...initialProps} {...currentProps} onClick={() => handleDroppedItemClick(item)}>
              {currentChildren || initialChildren}
            </Component>
          );
        })}
      </div>
      <Sheet
        position="right"
        show={sheetOptions.show}
      >
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="mb-0">Options</h3>
          <IconButton
            iconAs={Icon}
            src={Close}
            onClick={handleSheetOptionsClose}
            alt="Close options"
          />
        </div>
        {Object.entries(sheetOptions.availableOptions).map(([key, optionConfig]) => {
          const optionType = optionConfig.type;
          const { playgroundConfig, defaultProps, currentProps } = sheetOptions;
          const { initialProps } = playgroundConfig;

          if (optionType === 'select') {
            const optionValues = optionConfig.values;
            const options = optionValues.map(optionValue => <option key={optionValue} value={optionValue}>{optionValue}</option>);
            const currentValue = currentProps[key] || initialProps[key] || defaultProps[key];
            return (
              <Form.Group className="mb-4.5">
                <Form.Control
                  as="select"
                  value={currentValue}
                  onChange={(e) => handleSelectOptionChange(e, { uuid: sheetOptions.uuid, key })}
                  floatingLabel={key}
                >
                  {options}
                </Form.Control>
              </Form.Group>
            );
          }

          if (optionType === 'node') {
            console.log({
              currentProps, initialProps, defaultProps
            })
            const currentValue = currentProps[key] || initialProps[key] || defaultProps[key];
            console.log(currentValue, typeof currentValue);
            return (
              <Form.Group className="mb-4.5">
                <Form.Control
                  value={currentValue[0]}
                  onChange={(e) => handleNodeInputChange(e, { uuid: sheetOptions.uuid, key })}
                  floatingLabel={key}
                />
              </Form.Group>
            );
          }

          return (
            <Alert variant="danger" className="mb-4.5">
              <code>{optionType}</code> is an unsupported configuration type.
            </Alert>
          );
        })}
      </Sheet>
    </div>
  );
};

export default Dropzone;
