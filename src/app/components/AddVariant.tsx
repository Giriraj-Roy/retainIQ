import Image from "next/image";
import React from "react";
import plus from "../assets/plus.png";
import useAppContext from "../utils/useAppContext";

/**
 * @returns a plus signed CTA which eventually
 *  will be used to add a new Variant to every item of the list
 */

const AddVariant : React.FC<{index : number}> = () => {

  const {listItems, setListItems} = useAppContext();

  // Function to Add Variant to every element in the listItems array when called upon
  const handleAddVariant = ()=>{
    let dummy = [...listItems];
    dummy.forEach((ele,index)=>{
      ele.variants.push({id: Math.random(), image: ""})
    })
    // dummy[index].variants.push({id: Math.random(), image: ""})
    setListItems(dummy)
  }
  return (
    <div className="min-w-[5rem] w-[5rem] min-h-[5rem] h-auto flex justify-center items-center cursor-pointer" onClick={handleAddVariant}>
      <Image src={plus} alt="plus" className="h-[2rem] w-[2rem] shadow" />
    </div>
  );
};

export default AddVariant;
