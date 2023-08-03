import React from 'react'
import logo from '../assets/KLA logo.png'
import {  NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex flex-row w-full bg-black text-white'>
      <img src={logo} alt="KLA logo" />
      <div>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact Us</NavLink>
      </div>
    </nav>
  )
}

export default Nav
