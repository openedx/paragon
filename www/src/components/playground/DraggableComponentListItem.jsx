import React from 'react';
import { useDrag } from 'react-dnd';
import { Button } from '~paragon-react';
import { DragIndicator } from '~paragon-icons';

const DraggableComponentListItem = ({ item, children, rest }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'draggableComponentListItem',
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }));

  const listItemOpacity = isDragging ? 0.5 : 1;

  return (
    <li role="handle" ref={drag} style={{ opacity: listItemOpacity }} {...rest}>
      <Button variant="inverse-primary" size="sm" iconBefore={DragIndicator} block>
        {children}
      </Button>
    </li>
  );
};

export default DraggableComponentListItem;
