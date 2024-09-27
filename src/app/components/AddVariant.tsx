import Image from "next/image";
import React from "react";
import plus from "../assets/plus.png";
import useAppContext from "../utils/useAppContext";

const AddVariant : React.FC<{index : number}> = ({index}) => {

  const {listItems, setListItems} = useAppContext();

  const handleAddVariant = ()=>{
    let dummy = [...listItems];
    dummy[index].variants.push({id: Math.random(), image: ""})
    setListItems(dummy)
  }
  return (
    <div className="min-w-[5rem] w-[5rem] min-h-[5rem] h-auto flex justify-center items-center cursor-pointer" onClick={handleAddVariant}>
      <Image src={plus} alt="plus" className="h-[2rem] w-[2rem] shadow" />
    </div>
  );
};

export default AddVariant;
