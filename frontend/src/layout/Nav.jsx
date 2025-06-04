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
      <nav className = 'flex w-full my-2 nav justify-between items-center gap-4 md:gap-32 lg:gap-64 px-4 md:px-8 flex-wrap md:flex-nowrap'>
        
        <div className = 'flex relative w-[120px] md:w-[160px] gap-2'>
          <img src = { logo } alt = " KLA logo " className = ' mix-blend-multiply w-16 md:w-20 '/>
          <span className = 'font-arimo text-[6px] md:text-[8px] absolute bottom-0 right-0  text-gray4 hidden sm:block'> ..Handmade Perfection... </span>
        </div>

        {/*  */}

        <div className = 'mt-4 -ml-4 md:-ml-16 hidden md:block'>
          <NavLink 
            className = "font-arimo font-bold text-sm md:text-base text-center hover:text-header" 
            to = "/"> 
              Home 
          </NavLink>

          <NavLink 
            className = "ml-6 md:ml-9 font-arimo font-bold text-sm md:text-base text-center hover:text-header" 
            to = "about">
                About
          </NavLink>

          <NavLink 
            className = "ml-6 md:ml-9 font-arimo font-bold text-sm md:text-base text-center hover:text-header" 
            to = "shop">
                Shop
          </NavLink>

          <NavLink 
            className = "ml-6 md:ml-9 font-arimo font-bold text-sm md:text-base text-center hover:text-header" 
            to = "contact">
                Contact Us
          </NavLink>
        </div>

        {/* Mobile navigation links */}
        <div className = 'md:hidden w-full order-3 mt-4'>
          <div className="flex justify-center gap-6">
            <NavLink 
              className = "font-arimo font-bold text-sm text-center hover:text-header" 
              to = "/"> 
                Home 
            </NavLink>

            <NavLink 
              className = "font-arimo font-bold text-sm text-center hover:text-header" 
              to = "about">
                  About
            </NavLink>

            <NavLink 
              className = "font-arimo font-bold text-sm text-center hover:text-header" 
              to = "shop">
                  Shop
            </NavLink>

            <NavLink 
              className = "font-arimo font-bold text-sm text-center hover:text-header" 
              to = "contact">
                  Contact Us
            </NavLink>
          </div>
        </div>

        {/* flex ml-auto mr-10 mt-4 */}

        <div className = 'flex gap-2 mt-4 items-center justify-center'>
            <NavLink to = '' >
              <img src = { user } alt = " user icon " className="w-5 h-5 md:w-6 md:h-6" />
            </NavLink>

            <NavLink to = 'shop' className = 'ml-2 md:ml-4 -mt-2'>
              <img src = { cart } alt = "cart icon" className="w-5 h-5 md:w-6 md:h-6" />
            </NavLink>

            <NavLink to = '' className = 'ml-2 md:ml-3'>
              <img src = { menu } alt = "menu icon" className="w-5 h-5 md:w-6 md:h-6" />
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