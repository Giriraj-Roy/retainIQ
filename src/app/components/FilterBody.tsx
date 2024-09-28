import React from 'react'
import DragDropList from './DragDropList'

// The Body which displays all the Lists of rows and Design patters

const FilterBody = () => {
  return (
    <div className='w-[100%] px-8 py-8 bg-[#f9fbfc] border-2 border-[#d6d6d7] rounded-md'>
      <DragDropList/>
    </div>
  )
}

export default FilterBody