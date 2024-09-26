import Image from "next/image";
import React from "react";
import plus from "../assets/plus.png";
import useAppContext from "../utils/useAppContext";
import { getRandomWords } from "../utils/wordGenerator";

const ListFooter = () => {

  const {listItems, setListItems} = useAppContext();

  const handleAddItem = ()=>{
    let dummy = [...listItems];
    dummy.push({id: Math.random(), filters: getRandomWords(3), variants : [{id: Math.random(), image: "https://picsum.photos/100"}]});
    setListItems(dummy)
  }
  return (
    <div className="cursor-pointer" onClick={handleAddItem}>
      <Image src={plus} alt="plus" className="h-[2rem] w-[2rem] shadow" />
    </div>
  );
};

export default ListFooter;
