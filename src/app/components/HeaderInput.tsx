import Image from 'next/image'
import React, { useState } from 'react'
import arrow from '../assets/arrow.png'

const HeaderInput = () => {
    const [value, setValue] = useState("")
  return (
    <div className='flex items-center'>
        <Image src={arrow} alt='arrow' width={40} height={24}/>
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='font-Recoleta text-3xl text-[#283054] font-bold ml-2 pl-4 py-1 border-b-[#283054] border-b-2 outline-none'
            placeholder='Enter Name'
            maxLength={30}
        />
    </div>
  )
}

export default HeaderInput