import React, { useState } from 'react';
import useAppContext from '../utils/useAppContext'
import Modal from './Modal'
import { ListItemProps } from '../utils/interfaces'
import AddVariant from './AddVariant'
import ProductFilters from './ProductFilters';
import ProductIndexes from './ProductIndexes';
import ProductVariants from './ProductVariants';

interface ListItemsProps{
    item : ListItemProps
    index: number
}

const ListItem : React.FC<ListItemsProps> = ({item,index}) => {

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [currVar, setCurrVar] = useState<number>(0)
    
    const { listItems, setListItems } = useAppContext()

    // Deletes the ListItems of Current Index using basic filtering method
    const handleDelete = ()=>{
        let dummy = [...listItems]
        dummy = dummy.filter(ele=> ele.id!==item.id)
        setListItems(dummy)
    }

  return (
    <div className='flex w-[100%] bg-transparent'>
        <ProductIndexes index={index} handleDelete={handleDelete} isVisible={isVisible} setIsVisible={setIsVisible} />
        <ProductFilters item={item} />

        <div className='w-[60%] overflow-auto flex flex-shrink-0'>
        {
            listItems[index]?.variants.map((ele,idx)=>{
                return(
                    <ProductVariants setCurrVar={setCurrVar} setOpenModal={setOpenModal} idx={idx} ele={ele} />
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