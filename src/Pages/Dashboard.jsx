import React from 'react'
import Heading from '../components/Heading'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { FaSortAmountDown } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const location = useLocation()

  return (
    <>
    <Helmet>
      <title>Gadget-Heaven | Dashboard</title>
    </Helmet>
      <div className="bg-bannerBg pb-8 pt-4 ">
        <Heading
          title={'Dashboard'}
          subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
        />
        <div className='space-x-5 text-center mt-8 dashboard'>
          <NavLink className={`${location.pathname=='/dashboard'?'active':""}`}  to={'/dashboard/carts'}>
            <button className="border border-white rounded-full px-12 py-2">Cart</button>
          </NavLink>
          <NavLink to={'/dashboard/wishlist'}>
            <button className="border border-white rounded-full px-12 py-2">Wishlist</button>
          </NavLink>
        </div>
      </div>
        <div className='min-h-[calc(100vh-443px)] max-w-screen-lg mx-auto'>
        <Outlet />
      </div>
      
    </>
  )
}

export default Dashboard
