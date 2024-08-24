import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = <>

  <li><NavLink to='/' className='text-white font-semibold text-xl'>Home</NavLink></li>
  <li><NavLink to='/services' className='text-white font-semibold text-xl'>Our Services</NavLink></li>
  <li><NavLink to='/blogs' className='text-white font-semibold text-xl'>Blog</NavLink></li>
  <li><NavLink to='/contact' className='text-white font-semibold text-xl'>Contact Us</NavLink></li>
</>

const Navbar = () => {
  return (
    <div>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className="navbar">
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
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {navLinks}
                </ul>
              </div>
              <a className="btn btn-ghost text-5xl font-bold text-white">ATOIT</a>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;