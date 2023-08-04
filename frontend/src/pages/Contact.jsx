import React from 'react'
import { Form, Link } from 'react-router-dom'


const Contact = () => {
  return (
    <React.Fragment>
      <div>
      <header className='bg-background1 object-cover w-screen h-64'>
            <Link className='text-white font-lato text-5xl font-normal content-end'>CONTACT US</Link>
        </header>
        <section>
            <h3>We would love to hear from you.</h3>
            <p>If you have any query or any type of           suggestion,  you can contact us here. We would love to hear from you.</p>
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
      </div>
    </React.Fragment>
  )
}

export default Contact
