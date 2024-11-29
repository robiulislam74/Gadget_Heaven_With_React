import React from 'react'
import Heading from '../components/Heading'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { FaSortAmountDown } from "react-icons/fa";

const Dashboard = () => {
  const location = useLocation()

  return (
    <>
      <div className="bg-bannerBg pb-8 ">
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
          {/* <div className='flex justify-between items-center my-8'>
            {
              location.pathname == "/dashboard/carts" || location.pathname == "/dashboard"
              ?
              <h3 className='text-2xl font-bold'>Cart</h3>
              :
              <h3 className='text-2xl font-bold'>WishList</h3>
            }
            {
              location.pathname == "/dashboard/carts" || location.pathname == "/dashboard"
              ?
            <div className='flex gap-x-4 items-center'>
              <p className='text-2xl font-bold'>Total Cost: 453</p>
              <button className="btn btn-outline btn-primary rounded-full">Sort by Price <FaSortAmountDown/> </button>
              <button className="btn btn-outline btn-primary rounded-full">Purchase</button>
            </div>
              :
              ""
            }
          </div> */}
        <Outlet />
      </div>
      
    </>
  )
}

export default Dashboard
