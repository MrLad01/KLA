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

        <div className = "bg-background1 w-screen h-56 contact object-contain">
          <h3 className = 'absolute top-48 ml-16 text-white'> CONTACT US </h3>
        </div> 

        <section className = 'contact2 mt-24 w-screen h-162 px-10'>
        
        {
          submitted ? 
            <div>
              <h3 className = ' text-tertiary font-bold text-4xl mt-56 mb-16'> Message sent. We’ll contact you soon. </h3>
              <Link to = "/">
                <button type = 'submit' className = 'bg-primary3  text-white mt-8 px-8 py-4'> BACK TO HOME </button>
              </Link>
            </div>  
          :
          (
            <>

            <h3 className = ' text-tertiary font-bold text-4xl mb-6'> We would love to hear from you. </h3>
            <p className = 'font-lato text-tertiary font-normal text-base mb-10'>
              If you have any query or any type of suggestion, you can contact us here. We would love to hear from you. 
            </p>

            <Form className = 'grid' onSubmit = { handleSubmit }> 
              <div className = 'flex gap-4'>
                <div className = 'grid'>
                  <label htmlFor = "name"> Name </label>
                  <input type = "text" id = 'name' required />
                </div>

                <div className = 'grid'>
                  <label htmlFor = "email"> Email </label>
                  <input type = "email" id = 'email' required />
                </div>
              </div>

              <div className = "mt-4 grid">
                <label htmlFor = "message"> Message </label>
                <textarea name = "" id = "" cols = "2" rows = "2" required></textarea>
              </div>
        
              <button type = 'submit' className = 'bg-primary3  text-white mt-8'> SEND MESSAGE </button>
            </Form>

            </>
          )
        }

 
        <aside className = 'absolute right-10 top-96 mt-4'>
            <div>
              <h5> Visit Us </h5>
              <p> FUTA SOUTHGATE <br /> +2349065765454 </p>
            </div>

            <div className = 'mt-10'>
                <h5> Get In Touch </h5>
                <p> You can get in touch with us on this provided email. </p>
                <p> Email: hmjawad087@gmail.com </p>
            </div>
        </aside>

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
