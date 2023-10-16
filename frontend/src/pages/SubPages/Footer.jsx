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
      <footer className = "footer h-112 w-screen bg-footer px-10 py-6">
        <img src = { logo } alt = "" />
        
        <section className = 'flex gap-x-52 mt-6 mb-16'>
          <div className = 'grid mt-8'>
            <a href = "about"> About Us </a>
            <a href = "/"> Latest Post </a>
            <a href = "contact"> Contact Us </a>
            <a href = ""> Shop </a>
          </div>
        
          <div className = 'grid'>
            <header> <h1> HELP LINKS </h1>  </header>
            <a href = ""> Tracking </a>
            <a href = ""> Order Status </a>
            <a href = ""> Delivery </a>
            <a href = ""> Shipping Info </a>
            <a href = ""> FAQ </a>
          </div>

          <div className = 'grid'>
            <header> <h1> USEFUL LINKS </h1> </header>
            <a href = ""> Special Offers </a>
            <a href = ""> Gift Cards </a>
            <a href = ""> Advertising </a>
            <a href = ""> Terms of Use </a>
          </div>
        </section>

        <aside className = 'absolute right-32 -mt-72'>
          <header> <h1> GET IN THE KNOW </h1> </header>
          
          <div className = 'flex'>
            <input type = "text" placeholder = 'Enter Email' className = 'bg-footer border-b-2 mt-5 mr-2 outline-none' />
            <button>
              <img src = { arrow } alt = "" />
            </button>
          </div>

        </aside>
        <hr />

        <footer className = 'mt-4'>
          <div className = 'absolute right-20 flex gap-0.5'>
            <img src = { visa } alt = "" />
            <img src = { mastercard }  alt = "" />
            <img src = { paypal } alt = "" />
            <img src = { visa2 } alt = "" />
          </div>

          <div className = 'grid'>
            <h3> &copy; 2023 KLA eCommerce </h3>
            <div className = 'flex gap-4 mt-0.5'>
              <a href = ""> Privacy </a>
              <a href = ""> Terms and Conditions </a>
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
