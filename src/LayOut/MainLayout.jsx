import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    {/* <Banner/> */}
    <div className='min-h-[calc(100vh-360px)]'>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout
