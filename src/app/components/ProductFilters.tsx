import React from 'react'
import { ListItemProps } from '../utils/interfaces'

interface ProductFiltersProps{
    item : ListItemProps
}

const ProductFilters : React.FC<ProductFiltersProps> = ({item}) => {
  return (
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
  )
}

export default ProductFilters