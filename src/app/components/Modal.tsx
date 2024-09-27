import React, { useState } from "react";
import useAppContext from "../utils/useAppContext";

interface ModalProps {
  currVar : number;
  index: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal, index, currVar }) => {
  const [search, setSearch] = useState<string>("");
  const { listItems, setListItems } = useAppContext()

  
  const handleInsert = (image : string)=>{
    let dummy = [...listItems]
    dummy[index].variants[currVar].image = image
    setListItems(dummy)
    setOpenModal(false)
  }

  const arr = Array(20).fill('https://picsum.photos/100')

  return (
    <div className="absolute left-[25vw] top-[20vh] w-[50vw] h-[60vh] bg-white border-2 rounded-xl">
      <div className="relative w-[100%] h-[100%] p-10">
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          Close
        </div>
        <div className="w-[100%] flex mt-10">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-[80%] font-Corporative text-xl rounded-sm px-4 py-2"
            placeholder="search designs here"
          />
          <span className="bg-[#] w-[20%] py-2 flex justify-center items-center">
            Search
          </span>
        </div>
        <div className="mt-10 w-[100%] h-[70%] flex flex-wrap overflow-auto justify-center">
          {
            arr.map((ele,index)=>{
              const [isVisible, setIsVisible] = useState<boolean>(false);
              return (
                <div className="relative w-[100px] h-[100px] m-2"
                      onMouseEnter={() => setIsVisible(true)}
                      onMouseLeave={() => setIsVisible(false)}
                >
                  { isVisible && 
                    <div className="absolute top-[30px] left-[20px] p-2 text-black bg-white rounded-md cursor-pointer"
                          onClick={() =>handleInsert(ele)} 
                    >
                      Insert
                    </div>
                  }
                  <img src={ele} alt="images" />
                </div>
              )
            })
          }          
        </div>
      </div>
    </div>
  );
};

export default Modal;
