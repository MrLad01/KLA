import React from 'react'
import logo from '../../assets/KLA logo.png'
import arrow from '../../assets/arrow.png'
import visa from "../../assets/sponsors/visa.png"
import mastercard from "../../assets/sponsors/mastercard.png"
import paypal from "../../assets/sponsors/paypal.png"
import visa2 from "../../assets/sponsors/visa2.png"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className = "footer min-h-112 w-[100vw] bg-footer px-4 md:px-10 py-6 ">
        <img src = { logo } alt = ""  className='mix-blend-multiply w-16 md:w-20' />
        
        <section className = 'flex flex-col md:flex-row gap-4 md:gap-x-52 mt-6 mb-8 md:mb-16'>
          <div className = 'grid mt-0 md:mt-8'>
            <a href = "about" className="mb-2"> About Us </a>
            <a href = "/" className="mb-2"> Latest Post </a>
            <a href = "contact" className="mb-2"> Contact Us </a>
            <a href = "" className="mb-2"> Shop </a>
          </div>
        
          <div className = 'flex flex-col'>
            <header> <h1 className="mb-2 font-bold"> HELP LINKS </h1>  </header>
            <a href = "" className="mb-2"> Tracking </a>
            <a href = "" className="mb-2"> Order Status </a>
            <a href = "" className="mb-2"> Delivery </a>
            <a href = "" className="mb-2"> Shipping Info </a>
            <a href = "" className="mb-2"> FAQ </a>
          </div>

          <div className = 'flex flex-col'>
            <header> <h1 className="mb-2 font-bold"> USEFUL LINKS </h1> </header>
            <a href = "" className='mb-2'> Special Offers </a>
            <a href = "" className='mb-2'> Terms of Use </a>
          </div>

          <div className = 'grid md:absolute md:right-32 md:mt-28 w-full md:w-auto'>
            <header> <h1 className="mb-2 font-bold"> GET IN THE KNOW </h1> </header>
            
            <div className = 'flex flex-col sm:flex-row gap-2'>
              <input 
                type = "text" 
                placeholder = 'Enter Email' 
                className = 'bg-footer border-b-2 mt-2 md:mt-5 mr-0 sm:mr-2 outline-none flex-1 min-w-0' 
              />
              <button className="self-start mt-2">
                <img src = { arrow } alt = "" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <hr className="my-4" />

        <footer className = 'mt-4'>
          <div className = 'flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
            <div className = 'grid order-2 md:order-1'>
              <h3 className="mb-2"> &copy; 2023 KLA eCommerce </h3>
              <div className = 'flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0.5'>
                <a href = ""> Privacy </a>
                <a href = ""> Terms and Conditions </a>
              </div>
            </div>

            <div className = 'flex gap-0.5 order-1 md:order-2'>
              <img src = { visa } alt = "" className="h-6 w-auto" />
              <img src = { mastercard }  alt = "" className="h-6 w-auto" />
              <img src = { paypal } alt = "" className="h-6 w-auto" />
              <img src = { visa2 } alt = "" className="h-6 w-auto" />
            </div>
          </div>
        </footer>

      </footer>
      {/* satin-black */}
      {/* radial-gradient */}
    </React.Fragment>
  )
}

export default Footer