import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
  <div className='px-7 pt-7'>
      <div className="navbar bg-bannerBg rounded-t-3xl px-32 py-6">
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
    <a className="btn btn-ghost text-xl font-bold text-white">
        <NavLink to={'/'}>Gadget Heaven</NavLink>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium text-white">
      <li>
        <NavLink to={'/'}>Home</NavLink>
     </li>
      <li>
      <NavLink to={'/statistics'}>Statistics</NavLink>
      </li>
      <li>
      <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end gap-x-4">
    <div className='p-2 bg-white rounded-full text-lg'>
        <BsCart3/>
    </div>
    <div className='p-2 bg-white rounded-full text-lg'>
        <GiSelfLove/>
    </div>
  </div>
</div>
  </div>
  )
}

export default Navbar
