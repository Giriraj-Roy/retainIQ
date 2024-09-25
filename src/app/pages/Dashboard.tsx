import React from 'react'
import Header from '../components/Header'
import FilterBody from '../components/FilterBody'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div className='w-[100%] h-[100vh] flex'>
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