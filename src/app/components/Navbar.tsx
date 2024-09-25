import Image from 'next/image'
import React from 'react'
import gallery from '../assets/gallery.png'

const Navbar = () => {
  return (
    <div className='w-[5vw] bg-[#0E0E0E] text-white flex flex-col items-center '>
        <div className='my-[3rem]'>
            LOGO
        </div>
        <div className='[&>*]:my-4'>
            <Image src={gallery} alt='arrow' width={40} height={40}/>
            <Image src={gallery} alt='arrow' width={40} height={40}/>
            <Image src={gallery} alt='arrow' width={40} height={40}/>
            <Image src={gallery} alt='arrow' width={40} height={40}/>
            <Image src={gallery} alt='arrow' width={40} height={40}/>
        </div>        
    </div>
  )
}

export default Navbar