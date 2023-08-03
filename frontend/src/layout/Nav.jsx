import React from 'react'
import logo from '../assets/KLA logo.png'
import {  NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
     <nav className='flex w-full'>
        <img src={logo} alt="KLA logo" />
        <div className='justify-center'>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact Us</NavLink>
        </div>
     </nav>
     <Outlet />
    </>
  )
}

export default Nav
