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
     <nav className='flex w-full my-2 nav'>
      <div className='flex'>
        <img src={logo} alt="KLA logo" className='ml-2'/><p className='font-arimo mt-8 text-xs italic text-gray4'>Handmade Perfection...</p>
        </div>
        <div className='mt-4  ml-48'>
            <NavLink className="font-arimo font-bold text-base text-center hover:text-header" to="/">Home</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="about">About</NavLink>
            <NavLink className="ml-9 font-arimo font-bold text-base text-center hover:text-header" to="contact">Contact Us</NavLink>
        </div>
        <div className='flex ml-auto'>
          <NavLink to='' ><img src={user} alt="user icon" /></NavLink>
          <NavLink to='' className='ml-2 h-'><img src={cart} alt="cart icon" /></NavLink>
          <NavLink to='' className='ml-2'><img src={menu} alt="menu icon" /></NavLink>
        </div>
     </nav>
     <Outlet />
     <Footer />
    </>
  )
}

export default Nav
