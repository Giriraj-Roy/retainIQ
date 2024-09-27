import React, { useEffect, useState } from 'react';
import menu9 from '../assets/menu9.png';
import deleteImg from '../assets/delete.png'
import Image from 'next/image'
import plus from '../assets/plus.png'
import useAppContext from '../utils/useAppContext'
import Modal from './Modal'
import { ListItemProps } from '../utils/interfaces'
import { getRandomWords } from '../utils/wordGenerator'
import AddVariant from './AddVariant'

interface ListItemsProps{
    item : ListItemProps
    index: number
}

const ListItem : React.FC<ListItemsProps> = ({item,index}) => {

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [currVar, setCurrVar] = useState<number>(0)
    
    const { listItems, setListItems } = useAppContext()

    const handleDelete = ()=>{
        let dummy = [...listItems]
        dummy = dummy.filter(ele=> ele.id!==item.id)
        setListItems(dummy)
    }

    // useEffect(()=>{
    //     let dummy = [...listItems]
    //     dummy[index].variants[currVar].image = image
    //     setListItems(dummy)        
    // },[image])

  return (
    <div className='flex w-[100%] bg-transparent'>
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

        <div className='w-[35%] border-r-2 flex justify-center items-center flex-shrink-0'>
            <div className='w-[90%] h-[10rem] bg-white flex justify-center items-center text-sm font-Corporative border-dashed border-2 rounded-md 
            [&>*]:px-2 [&>*]:py-1 [&>*]:mx-1 [&>*]:border-[1px] [&>*]:rounded-md [&>*]:font-bold
            '>
                {   item.filters?.length > 0 ?
                    item?.filters.map((ele,index)=>{
                        return <div key={index}>{ele}</div>
                    })
                    :
                    <div>
                        Add Product Filters
                    </div>
                }
            </div>
        </div>
        <div className='w-[60%] overflow-auto flex flex-shrink-0'>
        {
            listItems[index]?.variants.map((ele,idx)=>{
                return(
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
            })
        }
        <AddVariant index={index} />

        {
            openModal && <Modal setOpenModal={setOpenModal} index={index} currVar={currVar} />
        }
        </div>

    </div>
  )
}

export default ListItem