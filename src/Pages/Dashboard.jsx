import React from 'react'
import Heading from '../components/Heading'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className="bg-bannerBg pb-8 mb-[calc(100vh-100px)]">
        <Heading
          title={'Dashboard'}
          subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
        />
        <div className='space-x-5 text-center mt-8 dashboard'>
          <NavLink to={'/dashboard/carts'}>
            <button className="border border-white rounded-full px-12 py-2">Cart</button>
          </NavLink>
          <NavLink to={'/dashboard/wishlist'}>
            <button className="  px-12 py-2">Wishlist</button>
          </NavLink>
        </div>
        <div>
        <Outlet />
      </div>
      </div>
      
    </>
  )
}

export default Dashboard
