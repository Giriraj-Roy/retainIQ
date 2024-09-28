import React, { useState } from 'react';
import ListHead from './ListHead';
import ListItem from './ListItem';
import ListFooter from './ListFooter';
import useAppContext from '../utils/useAppContext';

const DragDropList: React.FC = () => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const {listItems, setListItems} = useAppContext();

  // Logic handled to drag and drop items in the listItems
  // Set the Draggable index to curr index when drag starts
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };
  // We a using conventional replace and push back method to ensure the drag feature
  const handleDragOver = (index: number) => {
    if (draggedIndex === null) return;
    if (index !== draggedIndex) {
      const updatedItems = [...listItems]; // copy elements with new reference
      const draggedItem = updatedItems[draggedIndex];

      //  Replace and Push Back
      updatedItems.splice(draggedIndex, 1);
      updatedItems.splice(index, 0, draggedItem);
      
      // Update the elements
      setListItems(updatedItems);
      setDraggedIndex(index);
    }
  };
  // update the drag index to null to ensure avoiding any confusion
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
            className={`bg-gray-200 rounded cursor-move ${ draggedIndex === index ? 'bg-transparent' : 'bg-transparent' }`}
          >
            <ListItem item={item} index={index}/>
          </li>
        ))}
        <ListFooter/>
      </ul>
    </div>
  );
};

export default DragDropList;