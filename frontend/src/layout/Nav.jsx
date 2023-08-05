import React from 'react'
import logo from '../assets/KLA logo.png'
import {  NavLink, Outlet } from 'react-router-dom'
import Footer from '../pages/SubPages/Footer'
import user from '../assets/user 1.svg'
import cart from '../assets/cart.png'
import menu from '../assets/menu 1.png'

const Nav = () => {
  return (
    <>
     <nav className='flex w-full my-2'>
        <img src={logo} alt="KLA logo" className='ml-2'/><p className='font-arimo mt-9 text-sm -ml-2'>Handmade Perfection</p>
        <div className='justify-center ml-16 mt-4'>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="/">Home</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="about">About</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="contact">Contact Us</NavLink>
        </div>
        <div className='flex justify-end'>
          <NavLink to=''><img src={user} alt="user icon" /></NavLink>
          <NavLink to=''><img src={cart} alt="cart icon" /></NavLink>
          <NavLink to=''><img src={menu} alt="menu icon" /></NavLink>
        </div>
     </nav>
     <Outlet />
     <Footer />
    </>
  )
}

export default Nav
