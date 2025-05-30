import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'


const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <React.Fragment>

        <div className = "bg-background1 w-[100vw] h-56 sm:h-64 md:h-72 lg:h-80 contact object-contain relative">
          <h3 className = 'absolute top-32 sm:top-40 md:top-48 lg:top-56 ml-4 sm:ml-8 md:ml-16 text-white text-2xl sm:text-3xl md:text-4xl font-bold'> CONTACT US </h3>
        </div> 

        <section className = 'contact2 mt-12 sm:mt-16 md:mt-24 w-[100vw] h-fit px-4 sm:px-6 md:px-10 pb-20 relative'>
        
        {
          submitted ? 
            <div className="text-center sm:text-left">
              <h3 className = 'text-tertiary font-bold text-2xl sm:text-3xl md:text-4xl mt-20 sm:mt-32 md:mt-56 mb-8 sm:mb-12 md:mb-16'> Message sent. We'll contact you soon. </h3>
              <Link to = "/">
                <button type = 'submit' className = 'bg-primary3 text-white mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity'> BACK TO HOME </button>
              </Link>
            </div>  
          :
          (
            <div className="lg:flex lg:gap-12 xl:gap-16">
              {/* Main form section */}
              <div className="lg:flex-1 lg:max-w-2xl">
                <h3 className = 'text-tertiary font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6'> We would love to hear from you. </h3>
                <p className = 'font-lato text-tertiary font-normal text-sm sm:text-base mb-6 sm:mb-8 md:mb-10 leading-relaxed'>
                  If you have any query or any type of suggestion, you can contact us here. We would love to hear from you. 
                </p>

                <Form className = 'grid gap-4 sm:gap-6' onSubmit = { handleSubmit }> 
                  <div className = 'flex flex-col sm:flex-row gap-4'>
                    <div className = 'grid flex-1'>
                      <label htmlFor = "name" className="text-tertiary font-medium mb-2"> Name </label>
                      <input 
                        type = "text" 
                        id = 'name' 
                        required 
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary3 focus:border-transparent"
                      />
                    </div>

                    <div className = 'grid flex-1'>
                      <label htmlFor = "email" className="text-tertiary font-medium mb-2"> Email </label>
                      <input 
                        type = "email" 
                        id = 'email' 
                        required 
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary3 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className = "grid">
                    <label htmlFor = "message" className="text-tertiary font-medium mb-2"> Message </label>
                    <textarea 
                      name = "" 
                      id = "message" 
                      cols = "2" 
                      rows = "4" 
                      required
                      className="border border-gray-300 rounded px-3 py-2 min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-primary3 focus:border-transparent"
                    ></textarea>
                  </div>
            
                  <button 
                    type = 'submit' 
                    className = 'bg-primary3 text-white mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-self-start'
                  > 
                    SEND MESSAGE 
                  </button>
                </Form>
              </div>

              {/* Sidebar */}
              <aside className = 'xl:ml-48 mt-12 lg:mt-0 lg:w-96 xl:w-96 bg-gray-50 p-6 rounded-lg h-fit'>
                  <div className="mb-8">
                    <h5 className="text-tertiary font-bold text-lg mb-3"> Visit Us </h5>
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed"> 
                      FUTA SOUTHGATE <br /> 
                      <span className="font-medium">+2349065765454</span> 
                    </p>
                  </div>

                  <div>
                      <h5 className="text-tertiary font-bold text-lg mb-3"> Get In Touch </h5>
                      <p className="text-tertiary text-sm sm:text-base leading-relaxed mb-2"> 
                        You can get in touch with us on this provided email. 
                      </p>
                      <p className="text-tertiary text-sm sm:text-base"> 
                        Email: <span className="font-medium text-primary3">hmjawad087@gmail.com</span>
                      </p>
                  </div>
              </aside>
            </div>
          )
        }

      </section>
      {/* <div>
      <header className='bg-background1  relative object-cover w-screen h-72'>
            <Link className='text-white font-lato text-5xl font-normal bottom-0 absolute mb-12 ml-12'>CONTACT US</Link>
        </header>
        <section>
            <h3 className='font-arimo text-tertiary font-bold text-4xl'>We would love to hear from you.</h3>
            <p className='font-lato text-tertiary font-normal text-base'>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
        <Form>
            <label htmlFor="name">Name
            <input type="text" />
            </label>
            <label htmlFor="name">Email
            <input type="email" />
            </label>
            <label htmlFor="name">Message
            <input type="text" />
            </label>
            <button type='submit'>SEND MESSAGE</button>
        </Form>
        <aside>
            <div>
            <h5>Visit Us</h5>
            <p>FUTA SOUTHGATE <br /> +2349065765454</p>
            </div>
            <div>
                <h5>Get In Touch</h5>
                <p>You can get in touch with us on this provided email.</p>
                <p>Email: hmjawad087@gmail.com</p>
            </div>
        </aside>
      </section>
      </div> */}
    </React.Fragment>
  )
}

export default Contact