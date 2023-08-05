import React from 'react'
import logo from '../assets/KLA logo.png'
import {  NavLink, Outlet } from 'react-router-dom'
import Footer from '../pages/SubPages/Footer'

const Nav = () => {
  return (
    <>
     <nav className='flex w-full my-2'>
        <img src={logo} alt="KLA logo" className='ml-2'/>
        <div className='justify-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </div>
     </nav>
     <Outlet />
     <Footer />
    </>
  )
}

export default Nav
