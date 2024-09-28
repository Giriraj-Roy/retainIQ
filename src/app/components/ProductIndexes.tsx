import React from 'react'
import deleteImg from '../assets/delete.png'
import menu9 from '../assets/menu9.png';
import Image from 'next/image';


interface ProductIndexesProps {
    index : number,
    handleDelete : () => void,
    isVisible : boolean,
    setIsVisible : React.Dispatch<React.SetStateAction<boolean>>
}

const ProductIndexes : React.FC<ProductIndexesProps> = ({isVisible, setIsVisible, handleDelete, index}) => {
  return (
    <div
        className='w-[5%] border-r-2 flex flex-col justify-center items-center '
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
    >
        {   isVisible &&
            <Image onClick={handleDelete} src={deleteImg} alt='delete' className='h-[2rem] w-[2rem] cursor-pointer'/>
        }

        <div className='flex justify-around items-center font-Recoleta font-[1000] text-3xl text-[#283054] '>
            <span className=''>{index+1}</span>
            <Image src={menu9} alt='menu' className='h-[2rem] w-[2rem]'/>
        </div>
    </div>
  )
}

export default ProductIndexes