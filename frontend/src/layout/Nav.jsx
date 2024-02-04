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
    <div className='w-[100vw] h-[100vh] relative' >
      <nav className = 'flex w-full my-2 nav justify-between items-center gap-64 px-8 '>
        
        <div className = 'flex relative w-[160px] gap-2'>
          <img src = { logo } alt = " KLA logo " className = ' mix-blend-multiply w-20 '/>
          <span className = 'font-arimo text-[8px] absolute bottom-0 right-0  text-gray4'> ..Handmade Perfection... </span>
        </div>

        {/*  */}

        <div className = 'mt-4 -ml-16'>
          <NavLink 
            className = "font-arimo font-bold text-base text-center hover:text-header" 
            to = "/"> 
              Home 
          </NavLink>

          <NavLink 
            className = "ml-9 font-arimo font-bold text-base text-center hover:text-header" 
            to = "about">
                About
          </NavLink>

          <NavLink 
            className = "ml-9 font-arimo font-bold text-base text-center hover:text-header" 
            to = "contact">
                Contact Us
          </NavLink>
        </div>

        {/* flex ml-auto mr-10 mt-4 */}

        <div className = 'flex  gap-2 mt-4'>
            <NavLink to = '' >
              <img src = { user } alt = " user icon " />
            </NavLink>

            <NavLink to = '' className = 'ml-4 -mt-4'>
              <img src = { cart } alt = "cart icon" />
            </NavLink>

            <NavLink to = '' className = 'ml-3'>
              <img src = { menu } alt = "menu icon" />
            </NavLink>
        </div>
      </nav>

      <Outlet />
      <Footer className="absolute bottom-0" />
    </div>
    </>
  )
}

export default Nav
