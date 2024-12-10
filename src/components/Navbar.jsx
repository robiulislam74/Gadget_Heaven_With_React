import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation()
  return (
    <div className={`${location.pathname=="/dashboard" || location.pathname == "/statistics"|| location.pathname == "/blogs" || location.pathname == "/dashboard/carts" || location.pathname == "/dashboard/wishlist" ? "py-3": "max-w-screen-xl mx-auto pt-7"}`}>
      <div className={`navbar ${location.pathname=="/dashboard" || location.pathname == "/statistics"|| location.pathname == "/blogs"|| location.pathname == "/dashboard/carts" || location.pathname == "/dashboard/wishlist" ?"bg-[#f6f6f6]":"bg-bannerBg rounded-t-3xl px-24 py-6"} "bg-bannerBg rounded-t-3xl px-32 py-6"`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          </div>
          <a className={` text-3xl font-bold ${location.pathname=="/dashboard" || location.pathname == "/statistics" || location.pathname == "/blogs"|| location.pathname == "/dashboard/carts" || location.pathname == "/dashboard/wishlist"?"text-gray-900":"text-white"}`}>
            <NavLink to={'/'}>Gadget_Heaven</NavLink>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 space-x-4 font-medium  ${location.pathname=="/dashboard" || location.pathname == "/statistics" || location.pathname == "/blogs"|| location.pathname == "/dashboard/carts" || location.pathname == "/dashboard/wishlist"?"text-gray-600":"text-white"}`}>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/statistics'}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={'/blogs'}>Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-4">
          <div className='p-2 bg-white rounded-full border text-lg'>
            <BsCart3 />
          </div>
          <div className='p-2 bg-white rounded-full border text-lg'>
            <GiSelfLove />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar
