import React from 'react'
import logo from '../assets/KLA logo.png'
import {  NavLink, Outlet } from 'react-router-dom'
import Footer from '../pages/SubPages/Footer'

const Nav = () => {
  return (
    <>
     <nav className='flex w-full my-2'>
        <img src={logo} alt="KLA logo" className='ml-2'/>
        <div className='justify-center ml-16 mt-4'>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center" to="/">Home</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center" to="about">About</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center" to="contact">Contact Us</NavLink>
        </div>
        <div>

        </div>
     </nav>
     <Outlet />
     <Footer />
    </>
  )
}

export default Nav
