import React from 'react'
import logo from '../assets/KLA logo.png'
import {  NavLink, Outlet } from 'react-router-dom'
import Footer from '../pages/SubPages/Footer'

const Nav = () => {
  return (
    <>
     <nav className='flex w-full my-2 nav'>
        <img src={logo} alt="KLA logo" className='ml-2'/><p className='font-arimo mt-8 text-sm italic text-gray4'>Handmade Perfection...</p>
        <div className='justify-center ml-16 mt-4'>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="/">Home</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="about">About</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="contact">Contact Us</NavLink>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
     </nav>
     <Outlet />
     <Footer />
    </>
  )
}

export default Nav
