import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import menu3 from '../assets/menu3.png'
import useAppContext from '../utils/useAppContext'

// Title of all the rows and variants to be identified
const ListHead = () => {
    const { listItems } = useAppContext()
    
    const [arr, setArr] = useState<number[]>([1]);
    useEffect(()=>{
        let x = 0
        listItems.forEach(e=>{
            let temp = e.variants.length
            if(temp > x){
                x=temp
            }
        })
        setArr(Array(x).fill(1))
    },[listItems])
    
  return (
    <div className='w-[100%] bg-transparent flex overflow-auto'>
        <div className='w-[40%] border-r-2 font-Corporative text-lg text-[#607d8b] font-semibold flex items-center justify-center text-center'>
            Product Filter
        </div>
        <div className='w-[60%] overflow-scroll flex '>
            {        
                arr?.map((ele, index)=>{
                    return(
                        <div className='w-[33.33%] py-4 flex flex-shrink-0 justify-between items-center border-r-2'>
                            <span className='font-Corporative text-lg text-[#607d8b] font-semibold  ml-6'>
                                {index==0 ? 
                                    <span>Primary Variant</span>
                                    : <span>Variant {index+1}</span>                            
                                }
                            </span>
                            <Image src={menu3} alt='menu' className='h-[1.5rem] w-[1.5rem] mr-4'/>
                        </div>

                    )
                })
            }
        </div>

    </div>
  )
}

export default ListHead