import Image from 'next/image';
import React from 'react'
import plus from '../assets/plus.png'
import { getRandomWords } from '../utils/wordGenerator';
import { variant } from '../utils/interfaces';

interface ProductVariantsProps {
    idx: number,
    setOpenModal : React.Dispatch<React.SetStateAction<boolean>>,
    setCurrVar : React.Dispatch<React.SetStateAction<number>> ,
    ele : variant
}

const ProductVariants : React.FC<ProductVariantsProps> = ({setCurrVar, setOpenModal, idx, ele}) => {
  return (
    <div key={idx} className='w-[33.33%] border-r-2 flex justify-center items-center flex-shrink-0'>
        <div className='w-[70%] h-[90%] bg-white border-dashed border-4 rounded-md flex justify-center items-center'>
        {
            ele.image.length>0 ?
                <div className='flex flex-col justify-center items-center'>
                    <img src={ele.image} alt="design" 
                            className='my-1'
                            width={100}
                            height={100}
                    />
                    <div className='flex'>
                        {getRandomWords(2).map((e,i)=><span key={i}>{e+" ,"}</span>)}
                    </div>
                </div>
                
                :
                <div onClick={()=>{setOpenModal(true); setCurrVar(idx);}} className='py-2 flex justify-center items-center w-[70%] border-2 rounded-md bg-white font-Corporative text-sm cursor-pointer'>
                    <Image src={plus} alt='plus' className='h-[1.25rem] w-[1.25rem]'/> Add Design
                </div>
        }
        </div>
    </div>
  )
}

export default ProductVariants