import React from 'react'
import FeedBtn from './FeedBtn'
import HeaderInput from './HeaderInput'

/**
 * @returns a Input field to add Title of the design
 *          a CTA to Publish the Feed designed
 */
const Header = () => {
  return (
    <div className='w-[100%] my-6 px-8 pb-6 flex font-Recoleta justify-between border-b-[1px]'>
      <HeaderInput/>
      <FeedBtn/>
    </div>
  )
}

export default Header