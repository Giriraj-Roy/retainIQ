import React, { useState } from 'react';
import ListHead from './ListHead';
import ListItem from './ListItem';
import ListFooter from './ListFooter';
import useAppContext from '../utils/useAppContext';

const DragDropList: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const {listItems, setListItems} = useAppContext();


  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null) return;
    if (index !== draggedIndex) {
      const updatedItems = [...listItems];
      const draggedItem = updatedItems[draggedIndex];
      updatedItems.splice(draggedIndex, 1);
      updatedItems.splice(index, 0, draggedItem);
      setListItems(updatedItems);
      setDraggedIndex(index);
    }
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="p-4">
      <ul className="space-y-2 w-[100%]">
        <ListHead/>
        {listItems?.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDrop={handleDrop}
            className={`bg-gray-200 rounded cursor-move ${
              draggedIndex === index ? 'bg-transparent' : 'bg-transparent'
            }`}
          >
            {/* {item} */}
            <ListItem item={item} index={index}/>
          </li>
        ))}
        <ListFooter/>
      </ul>
    </div>
  );
};

export default DragDropList;