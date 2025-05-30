import React from 'react'
import Page1 from './SubPages/Page1'
import Page2 from './SubPages/Page2'
import Page3 from './SubPages/Page3'
import Page4 from './SubPages/Pages4'
import Footer from './SubPages/Footer'



const Home = () => {
  return (
    <div className='w-[100vw] h-fit overflow-x-hidden' >
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <div className = 'w-full h-16 md:h-32'></div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home