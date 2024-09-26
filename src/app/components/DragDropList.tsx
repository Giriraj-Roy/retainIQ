// import { useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

// const ItemType = 'ITEM';

// interface DragItem {
//   index: number;
//   id: string;
//   type: string;
// }

// interface ListItemProps {
//   id: string;
//   text: string;
//   index: number;
//   moveItem: (dragIndex: number, hoverIndex: number) => void;
// }

// const ListItem: React.FC<ListItemProps> = ({ id, text, index, moveItem }) => {
//   const [, ref] = useDrop({
//     accept: ItemType,
//     hover(item: DragItem) {
//       if (item.index !== index) {
//         moveItem(item.index, index);
//         item.index = index;
//       }
//     },
//   });

//   const [{ isDragging }, drag] = useDrag({
//     type: ItemType,
//     item: { id, index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const opacity = isDragging ? 0.5 : 1;

//   return (
//     <div
//       ref={(node) => drag(ref(node))}
//       className="border p-4 mb-2 bg-white cursor-move"
//       style={{ opacity }}
//     >
//       {text}
//     </div>
//   );
// };

// const DragDropList: React.FC = () => {
//   const [items, setItems] = useState([
//     { id: '1', text: 'Item 1' },
//     { id: '2', text: 'Item 2' },
//     { id: '3', text: 'Item 3' },
//     { id: '4', text: 'Item 4' },
//   ]);

//   const moveItem = (dragIndex: number, hoverIndex: number) => {
//     const newItems = [...items];
//     const [draggedItem] = newItems.splice(dragIndex, 1);
//     newItems.splice(hoverIndex, 0, draggedItem);
//     setItems(newItems);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="w-1/3">
//           {items.map((item, index) => (
//             <ListItem
//               key={item.id}
//               id={item.id}
//               index={index}
//               text={item.text}
//               moveItem={moveItem}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default DragDropList;

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