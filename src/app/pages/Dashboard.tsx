import React from 'react'
import Header from '../components/Header'
import FilterBody from '../components/FilterBody'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

/**
 * 
 * @returns the base UI element to be rendered 
 *  Divided into - Header , FilterBody(the rows) , Footer
 *  There is Also the NavBar component aligned to the left vertically
 */

const Dashboard = () => {
  return (
    <div className='w-[100%] min-h-[100vh] flex'>
      <Navbar />
      <div className='w-[95vw] px-8'>
        <Header/>
        <FilterBody/>
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard